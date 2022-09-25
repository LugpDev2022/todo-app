import { types } from './';

export const todoReducer = (todos, action) => {
  switch (action.type) {
    case types.add:
      return [...todos, action.payload];

    case types.delete:
      const newTodos = todos.filter(todo => todo.id !== action.payload.id);
      return newTodos;

    case types.toggle:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });

    case types.deleteAll:
      const filteredTodos = todos.filter(todo => todo.done !== true);
      return filteredTodos;

    default:
      return todos;
  }
};
