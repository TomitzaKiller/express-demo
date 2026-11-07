import { Router } from 'express';
import { todoStore } from '../store/todoStore';

export const todosRouter = Router();

todosRouter.get('/', (_req, res) => {
  res.json(todoStore.all());
});

todosRouter.get('/:id', (req, res) => {
  const todo = todoStore.find(Number(req.params.id));

  if (!todo) {
    res.status(404).json({ error: 'Todo not found' });
    return;
  }

  res.json(todo);
});

todosRouter.post('/', (req, res) => {
  const { title } = req.body ?? {};

  if (typeof title !== 'string' || title.trim() === '') {
    res.status(400).json({ error: 'Title is required' });
    return;
  }

  res.status(201).json(todoStore.create(title.trim()));
});
