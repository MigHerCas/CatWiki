import React from 'react';

// Hooks
import useFetch from '../hooks/useFetchBreeds';

// Components
import Loading from '../components/Loading';
import Error from '../components/Error';
import Hero from '../components/Hero';
import InfoArticle from '../components/InfoArticle';
import MostSearched from '../components/MostSearched';

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
    <main className="main-content">
      <Hero />
      <MostSearched />
      <InfoArticle />
    </main>
  );
}
