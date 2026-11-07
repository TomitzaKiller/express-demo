import express, { Request, Response } from 'express';
import { healthRouter } from './routes/health';
import { todosRouter } from './routes/todos';

export function createApp() {
  const app = express();

  app.use(express.json());

  app.use('/health', healthRouter);
  app.use('/api/todos', todosRouter);

  app.use((_req: Request, res: Response) => {
    res.status(404).json({ error: 'Not found' });
  });

  return app;
}
