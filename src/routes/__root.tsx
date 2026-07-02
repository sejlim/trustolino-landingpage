import { HeadContent, Scripts, createRootRoute, useLocation, Outlet, Link } from '@tanstack/react-router'
import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { SiteHeader } from '../components/landing/site-header'
import { SiteFooter } from '../components/landing/site-footer'
import { NotFound } from '../components/NotFound'

import appCss from '../styles.css?url'

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      {
        title: 'Trustolino',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        href: '/icon.png',
      }
    ],
  }),
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const isEn = location.pathname.startsWith('/en')
  const lang = isEn ? "en" : "de"

  const isLandingPage = location.pathname === '/' || location.pathname === '/en' || location.pathname === '/en/'
  const isLegalPage = [
    "/impressum",
    "/datenschutz",
    "/en/imprint",
    "/en/privacy-policy"
  ].includes(location.pathname.replace(/\/$/, ''))

  return (
    <html lang={lang} suppressHydrationWarning className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="font-sans text-foreground antialiased selection:bg-primary/20">
        {isLandingPage && <SiteHeader lang={lang} />}
        {isLegalPage && (
          <div className="mx-auto max-w-3xl px-4 pt-12 sm:px-6">
            <Link to={isEn ? "/en" : "/"} className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeftIcon className="size-4" />
              {isEn ? "Back to Home" : "Zurück zur Startseite"}
            </Link>
          </div>
        )}
        {children}
        {isLandingPage && <SiteFooter lang={lang} />}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
