import { useContext } from 'react';

import { TodoContext } from '../context';

export const TodoItem = ({ todo }) => {
  const { id, description, done } = todo;

  const { onToggleTodo } = useContext(TodoContext);

  return (
    <li className='list-group-item border-0 px-0 align-items-center d-flex'>
      <input
        type='checkbox'
        className='form-check-input me-3 p-3 ps-2 pb-2'
        name={id}
        id={id}
        defaultChecked={done}
        onClick={onToggleTodo}
      />

      <label
        htmlFor={id}
        className={`${
          done ? 'text-decoration-line-through' : ''
        } text-break fs-5`}
      >
        {description}
      </label>
    </li>
  );
};
