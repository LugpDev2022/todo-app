import { useAddTodo } from '../hooks/useAddTodo';
import { NotValidTodoAlert } from '../ui';

export const AddTodoInput = () => {
  const { onAddTodo, onInputChange, formValue, isTodoValid } = useAddTodo();

  return (
    <div className='row justify-content-center mt-4'>
      <form onSubmit={onAddTodo} className='col-12 col-md-9 col-lg-6 row'>
        <div className='col-12 col-sm-9'>
          <input
            type='text'
            placeholder='add details'
            className='form-control mb-2 py-2'
            value={formValue}
            onChange={onInputChange}
          />
        </div>

        <div className='col-12 col-sm-3'>
          <button className='btn btn-primary w-100 py-2' type='submit'>
            Add
          </button>
        </div>
      </form>

      {isTodoValid ? '' : <NotValidTodoAlert />}
    </div>
  );
};
