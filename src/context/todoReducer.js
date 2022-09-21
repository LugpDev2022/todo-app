import { types } from './';

export const todoReducer = (todos, action) => {
  switch (action.type) {
    case types.add:
      return [...todos, action.payload];

    case types.delete:
      console.log('deleting todo');
      break;

    case types.toggle:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });

    default:
      return [...todos];
  }
};
