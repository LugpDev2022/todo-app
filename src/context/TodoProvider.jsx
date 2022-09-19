import { useReducer } from 'react';
import { TodoContext, todoReducer } from './';

export const TodoProvider = ({ children }) => {
  const initialState = {
    todos: [
      {
        description: 'Comer',
        done: false,
        id: 123,
      },

      {
        description: 'Dormir',
        done: true,
        id: 124,
      },
    ],
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state }}>{children}</TodoContext.Provider>
  );
};
