import React from 'react';
import useFetchBreeds from './hooks/useFetchBreeds';

function App(): JSX.Element {
  const { breeds, isLoading, isError } = useFetchBreeds();

  if (breeds.length) {
    console.log(breeds);
  }
  return (
    <>
      <div className="App">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error!</p>}
        {breeds && breeds.map(({ id, name }) => <p key={id}>{name}</p>)}
      </div>
    </>
  );
}

export default App;
