import { DeleteAllTodos, TodoList } from '../components';

export const CompletedTodosPage = () => (
  <>
    <TodoList show='completed' />
    <DeleteAllTodos />
  </>
);
