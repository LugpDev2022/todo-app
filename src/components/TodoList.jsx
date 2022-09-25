import { useContext } from 'react';

import { TodoContext } from '../context';
import { TodoListItem, CompletedTodo } from './';

export const TodoList = ({ show }) => {
  const { todos, activeTodos, completedTodos } = useContext(TodoContext);

  if (show === 'all') {
    return (
      <div className='row justify-content-center mt-4'>
        <ul className='row list-group col-12 col-md-9 col-lg-6 px-4 '>
          {todos.map(todo => (
            <TodoListItem todo={todo} key={todo.id} />
          ))}
        </ul>
      </div>
    );
  }

  if (show === 'active') {
    return (
      <div className='row justify-content-center mt-4'>
        <ul className='row list-group col-12 col-md-9 col-lg-6 px-4 '>
          {activeTodos.map(todo => (
            <TodoListItem todo={todo} key={todo.id} />
          ))}
        </ul>
      </div>
    );
  }

  if (show === 'completed') {
    return (
      <div className='row justify-content-center mt-4'>
        <ul className='row list-group col-12 col-md-9 col-lg-6 px-4 '>
          {completedTodos.map(todo => (
            <CompletedTodo todo={todo} key={todo.id} />
          ))}
        </ul>
      </div>
    );
  }
};
