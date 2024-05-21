import { MouseEventHandler } from 'react';

interface TagButtonProps {
  children: string;
  isChecked: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function TagButton({children, isChecked, onClick}: TagButtonProps) {
  const buttonStyle = isChecked ? ' text-primary' : 'bg-opacity-10 text-white';
  return <button className={`
                          rounded-tag-button
                          px-[10px]
                          border
                          border-white
                          text-sm
                          font-medium
                          bg-white ${buttonStyle}`}
                 onClick={onClick}>{children}</button>;
}