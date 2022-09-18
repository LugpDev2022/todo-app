import { useReducer } from 'react';
import { TodoContext, todoReducer } from './';

export const TodoProvider = ({ children }) => {
  const initialState = {
    todos: ['comer', 'dormir'],
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state }}>{children}</TodoContext.Provider>
  );
};
