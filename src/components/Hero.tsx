import React from 'react';
import { ReactComponent as CatwikiLogo } from '../assets/icons/CatwikiLogo.svg';

export default function Hero(): JSX.Element {
  return (
    <section className="hero wrapper">
      <div className="hero-content">
        <CatwikiLogo className="hero__logo" />
        <p className="quote">Get to know more about your cat breed</p>
        <form>
          <input
            type="text"
            name="search"
            placeholder="Enter your breed"
            id="search"
            className="search-input"
          />
        </form>
      </div>
    </section>
  );
}
