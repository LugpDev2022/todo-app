import { useContext, useEffect } from 'react';

import { VscTrash } from 'react-icons/vsc';

import { TodoContext } from '../context';

export const DeleteAllTodos = () => {
  const { onDeleteAll, todos, completedTodos } = useContext(TodoContext);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='row mt-4 justify-content-center'>
      <div className='col-12 col-md-9 col-lg-6 px-4 d-flex justify-content-center justify-content-lg-end'>
        <button
          type='button'
          onClick={onDeleteAll}
          className='btn btn-danger px-2 fs-5 d-flex align-items-center'
        >
          <VscTrash className='fs-3 me-2' />
          Delete All
        </button>
      </div>
    </div>
  );
};
