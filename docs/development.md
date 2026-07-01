# Guia de desarrollo

## Setup

```bash
npm install
```

## Servidor local

```bash
npm run dev
```

Abrir `http://localhost:3000`.

## Calidad

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Formato

```bash
npm run format
```

Este comando escribe cambios en todo el repositorio. Revisar diff antes de commitear.

## Convenciones

- Usar npm y mantener `package-lock.json`.
- Mantener rutas en `app/`.
- Mantener UI compartida en `components/`.
- Mantener UI/hooks de feature en `sections/`.
- Mantener dominio de usuarios en `modules/users/`.
- Usar alias `@/*` para imports desde la raiz del repositorio.
- Prefijar con `_` variables o argumentos intencionalmente no usados.

## Variables y secretos

El cliente GraphQL actual no usa variables de entorno. Antes de nuevos despliegues productivos, migrar estos valores:

```text
NEXT_PUBLIC_GRAPHQL_ENDPOINT
GRAPHQL_ACCESS_TOKEN
```

Despues de migrar, rotar cualquier token expuesto en el historial o codigo.

## Verificacion antes de PR

```bash
npm run lint
npx tsc --noEmit
npm run build
```

No existe comando de tests todavia.
