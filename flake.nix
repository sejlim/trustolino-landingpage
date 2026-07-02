{
  description = "trustolino-landingpage";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      supportedSystems = [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
      forAllSystems = nixpkgs.lib.genAttrs supportedSystems;
      pkgsFor = system: nixpkgs.legacyPackages.${system};
    in
    {
      packages = forAllSystems (system:
        let
          pkgs = pkgsFor system;
        in
        {
          default = pkgs.buildNpmPackage {
            pname = "trustolino-landingpage";
            version = "1.0.0";
            src = ./.;

            # To update this hash, run `nix build` once. Nix will fail and tell you the correct hash.
            # Replace the fakeHash with the output.
            npmDepsHash = "sha256-z1bem+Gw3oTI4N0H9GkuWdZOCtaiqDs0ta54S5o0U/o=";

            # We need Vite and other dev dependencies to serve the app via `npm run preview`
            npmFlags = [ "" ];

            buildPhase = ''
              runHook preBuild
              npm run build
              runHook postBuild
            '';

            installPhase = ''
              runHook preInstall
              mkdir -p $out/share/trustolino-landingpage
              cp -r dist $out/share/trustolino-landingpage/
              cp -r src $out/share/trustolino-landingpage/
              cp -r public $out/share/trustolino-landingpage/
              cp package.json $out/share/trustolino-landingpage/
              cp package-lock.json $out/share/trustolino-landingpage/
              cp vite.config.ts $out/share/trustolino-landingpage/
              cp tsconfig.json $out/share/trustolino-landingpage/
              cp tsr.config.json $out/share/trustolino-landingpage/
              # Preserve node_modules for the production runner and sqlite3 binaries
              cp -r node_modules $out/share/trustolino-landingpage/
              
              # Create mount points for systemd tmpfs (fixes Vite EROFS)
              mkdir -p $out/share/trustolino-landingpage/node_modules/.vite-temp
              mkdir -p $out/share/trustolino-landingpage/node_modules/.vite
              
              runHook postInstall
            '';
          };
        });

      nixosModules.default = { config, lib, pkgs, ... }:
        let
          cfg = config.services.trustolino-landingpage;
        in
        {
          options.services.trustolino-landingpage = {
            enable = lib.mkEnableOption "trustolino-landingpage service";

            user = lib.mkOption {
              type = lib.types.str;
              default = "trustolino";
              description = "User account under which the service runs. Ensure this user has write permissions to the SQLITE_DB_PATH.";
            };

            environment = lib.mkOption {
              type = lib.types.attrsOf lib.types.str;
              default = { };
              description = "Environment variables for the trustolino-landingpage service (e.g., PORT, SQLITE_DB_PATH).";
              example = {
                PORT = "4173";
                SQLITE_DB_PATH = "/var/lib/trustolino-landingpage/data.db";
              };
            };
          };

          config = lib.mkIf cfg.enable {
            systemd.services.trustolino-landingpage = {
              description = "trustolino-landingpage";
              wantedBy = [ "multi-user.target" ];
              after = [ "network.target" ];

              environment = cfg.environment;

              path = [ pkgs.nodejs pkgs.bash ];

              serviceConfig = {
                # We use bash to allow bash parameter expansion for the port
                ExecStart = "${pkgs.bash}/bin/bash -c '${pkgs.nodejs}/bin/npm run preview -- --port \${PORT} --host'";
                WorkingDirectory = "${self.packages.${pkgs.system}.default}/share/trustolino-landingpage";
                Restart = "always";
                RestartSec = "10";
                User = cfg.user;
                TemporaryFileSystem = [
                  "${self.packages.${pkgs.system}.default}/share/trustolino-landingpage/node_modules/.vite-temp"
                  "${self.packages.${pkgs.system}.default}/share/trustolino-landingpage/node_modules/.vite"
                ];
              };
            };
          };
        };
    };
}
