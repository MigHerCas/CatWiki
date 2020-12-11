import React from 'react';

import CatPic1 from '../assets/images/cat1.jpg';
import CatPic2 from '../assets/images/cat2.jpg';
import CatPic3 from '../assets/images/cat3.jpg';
import CatPic4 from '../assets/images/cat4.jpg';
import CatPic5 from '../assets/images/cat5.jpg';
import CatPic6 from '../assets/images/cat6.jpg';
import CatPic7 from '../assets/images/cat7.jpg';
import CatPic8 from '../assets/images/cat8.jpg';

export default function BreedPhotosGrid(): JSX.Element {
  return (
    <section className="breed-photos">
      <h2>Other photos</h2>
      <div className="breed-photos__grid">
        <img className="w-2 h-3" src={CatPic1} alt="Cat" />
        <img className="w-2 h-2" src={CatPic2} alt="Cat" />
        <img className="w-2 h-3" src={CatPic3} alt="Cat" />
        <img className="w-2 h-5" src={CatPic4} alt="Cat" />
        <img className="w-2 h-2" src={CatPic5} alt="Cat" />
        <img className="w-2 h-2" src={CatPic6} alt="Cat" />
        <img className="w-2 h-2" src={CatPic7} alt="Cat" />
        <img className="w-2 h-2" src={CatPic8} alt="Cat" />
      </div>
    </section>
  );
}
