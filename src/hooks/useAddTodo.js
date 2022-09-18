import { useState } from 'react';

export const useAddTodo = () => {
  const [formValue, setFormValue] = useState('');
  const [isTodoValid, setIsTodoValid] = useState(true);

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
    setFormValue('');
    console.log(formValue);
  };

  return { onInputChange, onAddTodo, formValue, isTodoValid };
};
