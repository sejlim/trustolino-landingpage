# Trustolino Landing Page

This is the pre-release landing page for **Trustolino**, a stress-free childcare marketplace connecting parents with verified caregivers. This specific landing page is targeted at Caregivers (Educators) to register early for the "Trusted Educator" program.

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start)
- **Routing**: [TanStack Router](https://tanstack.com/router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database**: [SQLite](https://sqlite.org/) (via `better-sqlite3` for server-side form submissions)
- **Icons**: [Heroicons](https://heroicons.com/)

## Getting Started

### Prerequisites

You need [Node.js](https://nodejs.org/) installed on your machine.

### Environment Variables

Copy the provided `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Configure the environment variables:

- `SQLITE_DB_PATH`: The local path where the SQLite database will be stored (e.g., `./data/trustolino_leads.db`).
- `VITE_COUNTDOWN_TARGET`: The target date for the countdown timer (e.g., `2026-12-31T23:59:59Z`).

### Installation

Install the project dependencies:

```bash
npm install
```

### Running Locally

To start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to view the application.

## Building for Production

To build the application for production:

```bash
npm run build
```

You can then serve the production build using:

```bash
npm run start
```

## Nix Deployment

This project includes a `flake.nix` for deployment on NixOS.
The flake builds the project using `buildNpmPackage` and provides a systemd service module (`services.trustolino-landingpage`).
