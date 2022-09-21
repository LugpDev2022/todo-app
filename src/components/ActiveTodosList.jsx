import { useContext } from 'react';
import { TodoContext } from '../context';
import { TodoItem } from './';

export const ActiveTodosList = () => {
  const { todos } = useContext(TodoContext);

  const activeTodos = todos.filter(todo => {
    return todo.done === false;
  });

  return (
    <div className='row justify-content-center mt-4'>
      <ul className='row list-group col-12 col-md-9 col-lg-7 px-4 '>
        {activeTodos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};
