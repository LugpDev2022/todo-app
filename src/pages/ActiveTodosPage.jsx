import { AddTodoInput, TodoList } from '../components';

export const ActiveTodosPage = () => (
  <>
    <AddTodoInput />
    <TodoList show='active' />
  </>
);
