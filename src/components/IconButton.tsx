import { MouseEventHandler } from 'react';

interface IconButtonProps {
  alt: string;
  iconPath: string;
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default function IconButton({alt, iconPath, onClick}: IconButtonProps) {
  return <button type="button" onClick={onClick}>
    <img alt={alt} src={iconPath}/>
  </button>;
}