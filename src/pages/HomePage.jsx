import { useContext } from 'react';

import { AddTodoInput, TodoList } from '../components';
import { TodoContext } from '../context';
import { TodosAlert } from '../ui';

export const HomePage = () => {
  const { todos } = useContext(TodoContext);

  return (
    <>
      <AddTodoInput />
      {todos.length < 1 ? <TodosAlert /> : <TodoList show='all' />}
    </>
  );
};
