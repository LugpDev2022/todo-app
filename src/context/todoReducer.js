import { types } from './';

export const todoReducer = (todos, action) => {
  switch (action.type) {
    case types.add:
      return [...todos, action.payload];

    case types.delete:
      console.log('deleting todo');
      break;

    case types.toggle:
      console.log('toggle todo');
      break;

    default:
      console.log('Ningun todo');
  }
};
