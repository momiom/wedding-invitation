import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  type: string;
  id?: string;
  autoComplete?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
};

const InputText = React.forwardRef(function input({
  type,
  autoComplete = '',
  placeholder = '',
  id = '',
  register,
}: Props) {
  return (
    <div className="relative w-full">
      <input className="input-text" {...{ type, autoComplete, placeholder, id }} {...register} />
    </div>
  );
});

export default InputText;
