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

  const activeTodos = todos.filter(todo => todo.done === false);

  const completedTodos = todos.filter(todo => todo.done === true);

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

  const onDeleteTodo = todo => {
    const action = {
      type: types.delete,
      payload: {
        id: todo.current.id,
      },
    };

    dispatch(action);
  };

  const onDeleteAll = () => {
    const action = {
      type: types.deleteAll,
    };

    dispatch(action);
  };

  return (
    <TodoContext.Provider
      value={{
        activeTodos,
        addTodo,
        completedTodos,
        onDeleteAll,
        onDeleteTodo,
        onToggleTodo,
        todos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
