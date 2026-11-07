import request from 'supertest';
import { beforeEach, describe, expect, it } from 'vitest';
import { createApp } from '../src/app';
import { todoStore } from '../src/store/todoStore';

const app = createApp();

describe('Todos API', () => {
  beforeEach(() => todoStore.reset());

  it('lists all todos', async () => {
    const res = await request(app).get('/api/todos');

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(2);
  });

  it('returns a single todo', async () => {
    const res = await request(app).get('/api/todos/1');

    expect(res.status).toBe(200);
    expect(res.body.title).toBe('Learn CI/CD');
  });

  it('returns 404 for a missing todo', async () => {
    const res = await request(app).get('/api/todos/999');

    expect(res.status).toBe(404);
  });

  it('creates a todo', async () => {
    const res = await request(app).post('/api/todos').send({ title: 'Ship it' });

    expect(res.status).toBe(201);
    expect(res.body).toEqual({ id: 3, title: 'Ship it', completed: false });
  });

  it('rejects a todo without a title', async () => {
    const res = await request(app).post('/api/todos').send({});

    expect(res.status).toBe(400);
  });
});
