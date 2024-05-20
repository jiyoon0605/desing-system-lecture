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
}

export default function DefaultTextField({
                                           errorMessage, iconPath, onIconClick, placeholder, onChange, value, iconAlt, isError
                                         }: DefaultTextFieldProps) {
  const [focus, setFocus] = useState(true);
  const borderColor = focus ? 'border-secondary' : !value ? 'border-mono300' : 'border-primary';
  return <div onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}>
    <div className={`text-primary border-b ${borderColor}`}>
      <input type="text"
             value={value}
             placeholder={placeholder}
             onChange={onChange}
      />
      {value && <IconButton alt={iconAlt} iconPath={iconPath} onClick={onIconClick}/>}
    </div>
    {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
  </div>;
}