# Conversia Users Frontend

Frontend para gestion de usuarios de Conversia. La aplicacion esta construida con Next.js App Router, React, TypeScript, Apollo Client y Tailwind CSS.

## Stack

- Next.js 16 con App Router y React Compiler habilitado.
- React 19 y TypeScript.
- Tailwind CSS v4 via `@tailwindcss/postcss`.
- Apollo Client para consultas GraphQL.
- ESLint flat config, Prettier, Husky y lint-staged.

## Funcionalidad actual

- Ruta `/` con pagina inicial basica.
- Ruta `/users` con lectura paginada de usuarios desde GraphQL.
- Rutas `/login` y `/signup` con formularios de autenticacion/registro.
- Componentes compartidos para layout, header, footer, formularios, filas y spinner.
- Modulo `modules/users` separado por dominio, aplicacion e infraestructura.

## Requisitos

- Node.js compatible con Next.js 16.
- npm. Este repositorio usa `package-lock.json` como lockfile.

## Instalacion

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abrir `http://localhost:3000`.

## Comandos

```bash
npm run dev
npm run lint
npx tsc --noEmit
npm run build
npm run format
```

No hay framework de tests configurado todavia.

## Estructura

```text
app/                 Rutas Next.js App Router y server actions
components/          Componentes UI compartidos
graphql/             Cliente Apollo, fragments y queries
hooks/               Hooks reutilizables
modules/users/       Dominio, casos de uso y repositorio de usuarios
sections/users/      UI y estado de feature users
types/               Tipos compartidos
docs/                Documentacion tecnica del repositorio
```

## GraphQL

La ruta `/users` ejecuta `getUsers` en `app/users/actions.ts`, crea un cliente Apollo desde `graphql/main.ts` y consulta `GET_ALL_USERS`.

Nota operativa: `graphql/main.ts` contiene endpoint y bearer token hardcodeados. Antes de produccion, mover esa configuracion a variables de entorno y rotar el token expuesto.

## Documentacion

- [Arquitectura](docs/architecture.md)
- [Guia de desarrollo](docs/development.md)
- [Plan de documentacion](docs/documentation-plan.md)

## Codebase Memory

Este repositorio fue indexado con `codebase-memory-mcp` como `home-jcvegab-jcvegab-projects-conversia`. El indice local queda en `.codebase-memory/`, ignorado por Git en este workspace.
