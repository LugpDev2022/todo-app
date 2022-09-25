import { useContext } from 'react';

import { DeleteAllTodos, TodoList } from '../components';
import { TodoContext } from '../context';
import { NoCompletedTodosAlert } from '../ui';

export const CompletedTodosPage = () => {
  const { completedTodos } = useContext(TodoContext);

  if (completedTodos.length < 1) {
    return <NoCompletedTodosAlert />;
  }

  return (
    <>
      <TodoList show='completed' />
      <DeleteAllTodos />
    </>
  );
};
