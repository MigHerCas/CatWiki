import React from 'react';
import { ReactComponent as Logo } from '../assets/icons/CatwikiLogo.svg';
import Loading from '../components/Loading';
import Error from '../components/Error';
import useFetch from '../hooks/useFetchBreeds';

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
      <main>
        Main wrapper
        <div>Hero</div>
        <article className="most-searched">Most searched</article>
        <article className="info-article" />
      </main>
    </>
  );
}
