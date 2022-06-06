import { FC, ReactNode } from 'react';

type Props = {
  label: string;
  htmlFor?: string;
  required?: boolean;
  children: ReactNode;
};

const InputTextField: FC<Props> = ({ label, htmlFor = '', required = false, children }) => {
  return (
    <fieldset>
      <label className="input-text-label" htmlFor={htmlFor}>
        {label}
        {required && <span className="text-sm text-red-500">*</span>}
      </label>
      <p className="py-1 ml-1 text-sm"></p>
      {children}
    </fieldset>
  );
};

export default InputTextField;
