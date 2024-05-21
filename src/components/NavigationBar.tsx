import IconButton from './IconButton.tsx';
import { MouseEventHandler } from 'react';

interface NavigationBarProps {
  showBackButton: boolean;
  showCloseButton: boolean;
  onBackButtonClick?: MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick?: MouseEventHandler<HTMLButtonElement>;
  pageTitle?: string;
  isDark: boolean;
}

export default function NavigationBar(
  {
    showBackButton,
    showCloseButton,
    onCloseButtonClick = () => {
    },
    onBackButtonClick = () => {
    },
    pageTitle = '',
    isDark
  }: NavigationBarProps) {
  return (
    <div className={`flex justify-between`}>
      <div className="navigation-title-wrapper flex">
        {showBackButton &&
          <IconButton alt={'back-left'}
                      iconPath={`/icons/ic-back-left${isDark ? '-white' : ''}.svg`}
                      onClick={onBackButtonClick}/>}
        <h1 className={`text-2xl ${isDark && 'text-white'}`}>
          {pageTitle}
        </h1>
      </div>
      {showCloseButton &&
        <IconButton alt={'cancel'}
                    iconPath={`/icons/ic-cancel${isDark ? '-white' : ''}.svg`}
                    onClick={onCloseButtonClick}/>}
    </div>
  );
}