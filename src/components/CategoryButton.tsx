import { MouseEventHandler } from 'react';
import { flexColCenter } from '../style.ts';

interface CategoryButtonProps {
  iconPath: string;
  iconAlt: string;
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
export default function CategoryButton({ iconPath, iconAlt, children, onClick }: CategoryButtonProps) {
  return (
    <button className={`
        rounded-button-default
        border
        border-primary
        text-primary
        text-base
        font-bold
        px-[22px]
        py-4
        ${flexColCenter}
    `}
      onClick={onClick}>
      <img src={iconPath} alt={iconAlt}/>
      <p>{children}</p>
    </button>
  );
}