import React from 'react';
import { ReactComponent as CatwikiLogo } from '../assets/icons/CatwikiLogo.svg';

export default function Footer(): JSX.Element {
  return (
    <footer>
      <CatwikiLogo />
      <span className="copyright">© Miguel Hernanz - devchallenge.io 2020</span>
    </footer>
  );
}
