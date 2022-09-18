import { types } from './';

export const todoReducer = (state, action) => {
  switch (action.type) {
    case types.add:
      console.log('Adding todo');
      break;

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
