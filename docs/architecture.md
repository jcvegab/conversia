# Arquitectura

## Resumen

Conversia Users Frontend es una aplicacion Next.js App Router enfocada en gestion de usuarios. Combina UI por rutas, componentes compartidos, acceso GraphQL y un modulo de dominio de usuarios con separacion por capas.

## Capas

- `app/`: entrypoints de Next.js, layouts, rutas y server actions.
- `sections/`: UI y hooks por feature. `sections/users` contiene formularios, contexto y hooks de autenticacion/usuarios.
- `components/`: componentes visuales reutilizables sin logica de dominio.
- `graphql/`: cliente Apollo, fragments y queries para comunicacion con API GraphQL.
- `modules/users/domain`: entidades, value validations y contrato `UserRepository`.
- `modules/users/application`: casos de uso `createUser`, `getUser` y `getAllUsers`.
- `modules/users/infraestructure`: implementacion actual `GCPUserRepository`, hoy stub parcial.
- `hooks/` y `types/`: utilidades compartidas.

## Flujo `/users`

1. `app/users/page.tsx` recibe `limit` y `offset` desde `searchParams`.
2. Llama `getUsers` desde `app/users/actions.ts`.
3. `getUsers` crea Apollo Client mediante `graphql/main.ts`.
4. Apollo ejecuta `GET_ALL_USERS` desde `graphql/queries.ts`.
5. La pagina renderiza `fullName` y `email` de cada usuario.

## Flujo dominio usuarios

1. Los formularios de `sections/users` construyen datos de usuario.
2. Los casos de uso en `modules/users/application` validan y delegan al repositorio.
3. `modules/users/domain/User.ts` centraliza `ensureUserIsValid`.
4. Los value objects validan `id`, `fullName`, `email`, `imageUrl` y `password`.

## Decisiones actuales

- Next.js App Router vive en `app/`, sin carpeta `src/`.
- React Compiler esta habilitado en `next.config.ts`; evitar `useMemo` y `useCallback` defensivos.
- Tailwind CSS v4 se carga desde `app/globals.css` y PostCSS.
- `/users` usa ruta GraphQL directa; el modulo `modules/users` permanece separado y no reemplaza esa ruta aun.

## Riesgos y deuda tecnica

- `graphql/main.ts` contiene endpoint y bearer token hardcodeados.
- `modules/users/infraestructure/GCPUserRepository.ts` es stub y retorna datos vacios/null.
- No hay test runner configurado.
- `sections/auth/AuthContext.tsx` es codigo legado comentado, no auth activa.
