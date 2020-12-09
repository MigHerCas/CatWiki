import React from 'react';

import CatPic1 from '../assets/images/image 1.png';
import CatPic2 from '../assets/images/image 2.png';
import CatPic3 from '../assets/images/image 3.png';

export default function InfoArticle(): JSX.Element {
  return (
    <section className="info-article wrapper">
      <div className="left-column">
        <h1 className="info-article__title overline">
          Why should you have a cat?
        </h1>
        <p className="info-article__text">
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <a href="/breed" className="info-article__cta arrow-link">
          Read more
          <span className="material-icons">arrow_right_alt</span>
        </a>
      </div>
      <div className="right-column">
        <figure className="photo-composition">
          <img src={CatPic2} alt="CatPic" />
          <img src={CatPic3} alt="CatPic" />
          <img src={CatPic1} alt="CatPic" />
        </figure>
      </div>
    </section>
  );
}
