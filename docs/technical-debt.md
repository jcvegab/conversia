# TODOs And Technical Debt

## TODOs

- Migrar endpoint GraphQL y token a variables de entorno.
- Agregar `.env.example` cuando exista configuracion por entorno.
- Configurar tests y documentar comando oficial.
- Convertir decisiones importantes en ADRs bajo `docs/adr/`.

## Technical Debt

- `graphql/main.ts` contiene endpoint y bearer token hardcodeados; antes de produccion, mover esa configuracion y rotar el token expuesto.

## Follow-Ups

- Mantener README y docs tecnicos alineados cuando cambien comandos, rutas, variables de entorno o arquitectura.

## Known Risks

- El flujo `/users` depende de un servicio GraphQL externo y de credenciales actualmente versionadas.
