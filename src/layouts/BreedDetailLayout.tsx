import React from 'react';
import BreedDetails from '../components/BreedDetails';
import BreedPhotosGrid from '../components/BreedPhotosGrid';

export default function BreedScreen(): JSX.Element {
  return (
    <main className="main-content">
      <article className="breed-detail-page">
        <BreedDetails />
        <BreedPhotosGrid />
      </article>
    </main>
  );
}
