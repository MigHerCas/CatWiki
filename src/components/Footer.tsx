import React from 'react';
import { ReactComponent as CatwikiLogo } from '../assets/icons/CatwikiLogo.svg';

export default function Footer(): JSX.Element {
  return (
    <header>
      <CatwikiLogo />
      <span className="copyright">© Miguel Hernanz - devchallenge.io 2020</span>
    </header>
  );
}
