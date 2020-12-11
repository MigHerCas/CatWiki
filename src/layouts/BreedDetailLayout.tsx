import React from 'react';
import BreedDetails from '../components/BreedDetails';

export default function BreedScreen(): JSX.Element {
  return (
    <main className="main-content">
      <article>
        <BreedDetails />
      </article>
      {/* <BreedPictures /> */}
    </main>
  );
}
