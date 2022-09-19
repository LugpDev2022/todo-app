import { useContext, useState } from 'react';
import { uid } from 'uid';

import { TodoContext, types } from '../context';

export const useAddTodo = () => {
  const [formValue, setFormValue] = useState('');
  const [isTodoValid, setIsTodoValid] = useState(true);

  const { dispatch } = useContext(TodoContext);

  const onInputChange = ({ target }) => {
    setFormValue(target.value);
  };

  const action = {
    type: types.add,
    payload: {
      description: formValue,
      id: uid(),
      done: false,
    },
  };

  const onAddTodo = e => {
    e.preventDefault();

    if (formValue.length < 1) {
      setIsTodoValid(false);
      return;
    }
    setIsTodoValid(true);
    dispatch(action);
    setFormValue('');
  };

  return { onInputChange, onAddTodo, formValue, isTodoValid };
};
