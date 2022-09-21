import { useReducer } from 'react';

import { TodoContext, todoReducer, types } from './';

export const TodoProvider = ({ children }) => {
  const init = () => {
    const todos = localStorage.getItem('todos');

    if (todos === null) {
      localStorage.setItem('todos', JSON.stringify([]));
      return [];
    }

    return JSON.parse(todos);
  };

  const [todos, dispatch] = useReducer(todoReducer, [], init);

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
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
