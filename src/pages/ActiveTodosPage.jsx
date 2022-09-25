import { useContext } from 'react';

import { AddTodoInput, TodoList } from '../components';
import { TodoContext } from '../context';
import { TodosAlert } from '../ui';

export const ActiveTodosPage = () => {
  const { activeTodos } = useContext(TodoContext);

  return (
    <>
      <AddTodoInput />
      {activeTodos.length < 1 ? <TodosAlert /> : <TodoList show='active' />}
    </>
  );
};
