import { useContext, useEffect, useState } from 'react';
import { uid } from 'uid';

import { TodoContext } from '../context';

export const useAddTodo = () => {
  const [formValue, setFormValue] = useState('');
  const [isTodoValid, setIsTodoValid] = useState(true);

  const { addTodo, todos } = useContext(TodoContext);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [addTodo]);

  const payload = {
    description: formValue,
    id: uid(),
    done: false,
  };

  const onInputChange = ({ target }) => {
    setFormValue(target.value);
  };

  const onAddTodo = e => {
    e.preventDefault();

    if (formValue.length < 1) {
      setIsTodoValid(false);
      return;
    }

    setIsTodoValid(true);
    addTodo(payload);
    setFormValue('');
  };

  return { onInputChange, onAddTodo, formValue, isTodoValid };
};
