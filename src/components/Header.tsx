import React from 'react';
import { ReactComponent as CatwikiLogo } from '../assets/icons/CatwikiLogo.svg';

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <CatwikiLogo className="header__logo" />
    </header>
  );
}
