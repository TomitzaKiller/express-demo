# node-demo

Demo TypeScript + Express API for a CI/CD lecture.

## Endpoints

| Method | Path             | Description          |
|--------|------------------|----------------------|
| GET    | `/health`        | Health check         |
| GET    | `/api/todos`     | List todos           |
| GET    | `/api/todos/:id` | Get a single todo    |
| POST   | `/api/todos`     | Create a todo (`{ "title": "..." }`) |

## Scripts

```bash
npm ci             # install
npm run dev        # dev server with reload (port 3000)
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm test           # Vitest + Supertest
npm run build      # compile to dist/
npm start          # run compiled build
```
