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

  const activeTodos = todos.filter(todo => {
    return todo.done === false;
  });

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

  const onToggleTodo = ({ target }) => {
    const action = {
      type: types.toggle,
      payload: {
        id: target.id,
      },
    };

    dispatch(action);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, onToggleTodo, activeTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
