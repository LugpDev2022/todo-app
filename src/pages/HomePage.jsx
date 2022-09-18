import { useContext } from 'react';
import { AddTodoInput } from '../components';
import { TodoContext } from '../context';

export const HomePage = () => {
  const { state } = useContext(TodoContext);

  return (
    <>
      <AddTodoInput />;
    </>
  );
};
