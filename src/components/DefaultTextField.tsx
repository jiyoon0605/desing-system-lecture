import IconButton from './IconButton.tsx';
import ErrorMessage from './ErrorMessage.tsx';
import { ChangeEventHandler, MouseEventHandler, useState } from 'react';

interface DefaultTextFieldProps {
  errorMessage: string;
  iconPath: string;
  onIconClick: MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  iconAlt: string;
  isError: boolean;
  id: string;
}

export default function DefaultTextField({
                                           errorMessage, iconPath, onIconClick, placeholder, onChange, value, iconAlt, isError, id
                                         }: DefaultTextFieldProps) {
  const [focus, setFocus] = useState(false);
  const borderColor = focus ? 'border-secondary' : !value ? 'border-mono300' : 'border-primary';
  return <div className={'relative mb-4'}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}>
    <div className={`text-primary border-b ${borderColor}`}>
      <input id={id}
             type="text"
             value={value}
             placeholder={placeholder}
             onChange={onChange}
      />
      {value && <IconButton alt={iconAlt} iconPath={iconPath} onClick={onIconClick}/>}
    </div>
    {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
  </div>;
}