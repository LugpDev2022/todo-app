import { useReducer } from 'react';

import { TodoContext, todoReducer, types } from './';

export const TodoProvider = ({ children }) => {
  const initialState = [
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
  ];

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = ({ description, id, done }) => {
    const action = {
      type: types.add,
      payload: {
        description,
        id,
        done,
      },
    };

    dispatch(action);
  };

  return (
    <TodoContext.Provider value={{ state, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
