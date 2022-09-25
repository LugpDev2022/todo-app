import { useContext, useRef } from 'react';

import { VscTrash } from 'react-icons/vsc';

import { TodoContext } from '../context';

export const CompletedTodo = ({ todo }) => {
  const { onToggleTodo, onDeleteTodo } = useContext(TodoContext);

  const todoRef = useRef();

  const { id, description, done } = todo;

  return (
    <li className='list-group-item border-0 px-0 align-items-center d-flex animate__animated animate__fadeInLeft'>
      <input
        type='checkbox'
        className='form-check-input me-3 p-3 ps-2 pb-2'
        name={id}
        id={id}
        defaultChecked={done}
        onClick={onToggleTodo}
        ref={todoRef}
      />

      <label
        htmlFor={id}
        className={`${
          done ? 'text-decoration-line-through' : ''
        } text-break fs-5`}
      >
        {description}
      </label>

      <div className='flex-grow-1 d-flex justify-content-end'>
        <VscTrash className='fs-3' onClick={() => onDeleteTodo(todoRef)} />
      </div>
    </li>
  );
};
