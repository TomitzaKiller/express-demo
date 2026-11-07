export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const seed = [
  { id: 1, title: 'Learn CI/CD', completed: false },
  { id: 2, title: 'Write tests', completed: true },
];

let todos: Todo[] = [...seed];
let nextId = seed.length + 1;

export const todoStore = {
  all: (): Todo[] => todos,
  find: (id: number): Todo | undefined => todos.find((todo) => todo.id === id),
  create: (title: string): Todo => {
    const todo: Todo = { id: nextId++, title, completed: false };
    todos.push(todo);
    return todo;
  },
  reset: (): void => {
    todos = seed.map((todo) => ({ ...todo }));
    nextId = seed.length + 1;
  },
};
