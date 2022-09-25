import { useContext } from 'react';

import { DeleteAllTodos, TodoList } from '../components';
import { TodoContext } from '../context';
import { TodosAlert } from '../ui';

export const CompletedTodosPage = () => {
  const { completedTodos } = useContext(TodoContext);

  if (completedTodos.length < 1) {
    return <TodosAlert />;
  }

  return (
    <>
      <TodoList show='completed' />
      <DeleteAllTodos />
    </>
  );
};
