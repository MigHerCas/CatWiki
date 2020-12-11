import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CatwikiLogo } from '../assets/icons/CatwikiLogo.svg';

export default function Header(): JSX.Element {
  return (
    <header className="header wrapper">
      <Link to="/">
        <CatwikiLogo className="header__logo" />
      </Link>
    </header>
  );
}
