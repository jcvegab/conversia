# Repository Instructions

## Commands
- Use npm; `package-lock.json` is the lockfile. Ignore the generic README alternatives unless the lockfile changes.
- Install deps with `npm install`.
- Dev server: `npm run dev`.
- Lint: `npm run lint`.
- Typecheck: `npx tsc --noEmit`; there is no `typecheck` script.
- Production compile: `npm run build`.
- Format all files: `npm run format`; this writes across the repo.
- There is no test script or test framework configured yet.

## App Shape
- Next.js App Router lives in `app/`; route files are colocated there, not under `src/`.
- Root layout is `app/layout.tsx`; it always renders `Header`, `Footer`, and `react-hot-toast` `Toaster`.
- Shared UI components live in `components/`; feature UI/hooks live in `sections/`.
- User domain/application/repository code lives in `modules/users/` and is separate from the GraphQL path.
- GraphQL client/query code lives in `graphql/`; `/users` currently fetches through `app/users/actions.ts` with Apollo.
- Import alias `@/*` maps to repo root via `tsconfig.json`.

## Tooling Quirks
- Next config enables `reactCompiler: true` and `reactStrictMode: true`; avoid defensive `useMemo`/`useCallback` unless there is a measured need or existing pattern.
- Tailwind CSS v4 is loaded via `@import 'tailwindcss'` in `app/globals.css` and PostCSS uses `@tailwindcss/postcss`; do not add old `tailwind.config.js` assumptions.
- ESLint is flat config in `eslint.config.mjs`; unused args/vars are errors unless prefixed with `_`.
- Husky is listed in `prepare`, but no `.husky/` hooks are present in this repo snapshot.

## Gotchas
- `graphql/main.ts` hardcodes the GraphQL endpoint and bearer token; builds or `/users` work can depend on that external service/token.
- `modules/users/infraestructure/GCPUserRepository.ts` is a stub that only logs and returns empty/null data.
- `sections/auth/AuthContext.tsx` is commented-out legacy code; do not treat it as active auth wiring.
