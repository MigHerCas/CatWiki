import React, { createRef, useState } from 'react';
import useFetch from './hooks/useFetchBreeds';
import useSearch from './hooks/useSearch';

function App(): JSX.Element {
  const searchRef = createRef<HTMLInputElement>();
  const [query, setQuery] = useState<string>('');
  const { breeds, isLoading, isError } = useFetch();
  const { searchedBreeds, searchIsLoading } = useSearch({
    searchRef,
    query,
  });

  if (breeds.length) {
    console.log(breeds);
  }

  return (
    <>
      <div className="App">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error!</p>}
        <form>
          <input
            type="search"
            name="search"
            placeholder="Search breed"
            ref={searchRef}
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
        </form>
        {searchIsLoading && <p>Search loading...</p>}
        {!searchIsLoading && searchedBreeds && (
          <ul>
            {searchedBreeds.map(({ name, id }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
