export const TodoItem = ({ todo }) => {
  const { id, description, done } = todo;

  return (
    <li className='list-group-item'>
      <input
        type='checkbox'
        className='form-check-input me-2'
        name={id}
        id={id}
        defaultChecked={done}
      />

      <label htmlFor={id}>{description}</label>
    </li>
  );
};
