import React from 'react';
import { ReactComponent as CatwikiLogo } from '../assets/icons/CatwikiLogo.svg';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer wrapper">
      <div className="footer__content">
        <CatwikiLogo className="footer__logo" />
        <small className="footer__copyright">
          © Miguel Hernanz - devchallenge.io 2020
        </small>
      </div>
    </footer>
  );
}
