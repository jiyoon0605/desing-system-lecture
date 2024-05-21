import { MouseEventHandler } from 'react';

type PrimaryButtonTheme = 'dark' | 'light' | 'social' | 'text';

interface PrimaryButtonProps {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isDisabled: boolean;
  theme: PrimaryButtonTheme;
}

const dark = 'bg-primary text-white';
const light = 'bg-white text-primary';
const social = 'bg-social text-white';
const text = 'bg-transparent text-primary';
const disabledStyle = 'disabled:bg-mono100 disabled:text-mono200';

const color: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text,
};
export default function PrimaryButton({children, onClick, isDisabled, theme}: PrimaryButtonProps) {
  return (
    <button disabled={isDisabled}
            className={`w-full h-[59px] rounded-primary-button ${color[theme]} ${disabledStyle}`}
            onClick={onClick}>
      {children}
    </button>
  );
}