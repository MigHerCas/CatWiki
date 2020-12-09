import React from 'react';

import CatPic1 from '../assets/images/image 1.png';
import CatPic2 from '../assets/images/image 2.png';
import CatPic3 from '../assets/images/image 3.png';

export default function MostSearched(): JSX.Element {
  return (
    <section className="most-searched wrapper">
      <h4 className="most-searched__sub-title">Most Searched Breeds</h4>
      <div className="most-searched__title-row">
        <h1 className="most-searched__title">66+ Breeds For you to discover</h1>
        <a href="/breed" className="most-searched__cta arrow-link">
          See more
          <span className="material-icons">arrow_right_alt</span>
        </a>
      </div>
      <ul className="most-searched__list">
        <li className="most-searched__card">
          <a href="/breed">
            <figure>
              <img src={CatPic1} alt="Cat" />
              <figcaption>Bengal</figcaption>
            </figure>
          </a>
        </li>
        <li className="most-searched__card">
          <a href="/breed">
            <figure>
              <img src={CatPic2} alt="Cat" />
              <figcaption>Bengal</figcaption>
            </figure>
          </a>
        </li>
        <li className="most-searched__card">
          <a href="/breed">
            <figure>
              <img src={CatPic3} alt="Cat" />
              <figcaption>Bengal</figcaption>
            </figure>
          </a>
        </li>
        <li className="most-searched__card">
          <a href="/breed">
            <figure>
              <img src={CatPic2} alt="Cat" />
              <figcaption>Bengal</figcaption>
            </figure>
          </a>
        </li>
      </ul>
    </section>
  );
}
