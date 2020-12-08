import React from 'react';
import Loading from '../components/Loading';
import Error from '../components/Error';
import useFetch from '../hooks/useFetchBreeds';

import { ReactComponent as CatwikiLogo } from '../assets/icons/CatwikiLogo.svg';
import CatPic1 from '../assets/images/image 1.png';
import CatPic2 from '../assets/images/image 2.png';
import CatPic3 from '../assets/images/image 3.png';

export default function HomeScreen(): JSX.Element {
  const { breeds, isLoading, isError } = useFetch();

  console.log(breeds);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <main className="main-content">
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
        <section className="most-searched wrapper">
          <h4 className="most-searched__sub-title">Most Searched Breeds</h4>
          <div className="most-searched__title-row">
            <h1 className="most-searched__title">
              66+ Breeds For you to discover
            </h1>
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
        <section className="info-article wrapper">
          <div className="left-column">
            <h1 className="info-article__title overline">
              Why should you have a cat?
            </h1>
            <p className="info-article__text">
              Having a cat around you can actually trigger the release of
              calming chemicals in your body which lower your stress and anxiety
              leves
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
      </main>
    </>
  );
}
