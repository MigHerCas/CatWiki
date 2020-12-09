import React, { createRef, useState } from 'react';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';
import useSearch from '../hooks/useSearch';

export default function SearchComponent(): JSX.Element {
  const searchRef = createRef<HTMLInputElement>();
  const [query, setQuery] = useState<string>('');
  const { searchedResults, searchIsLoading } = useSearch({
    searchRef,
    query,
  });
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;

    setQuery(e?.target?.value);

    if (searchQuery.length) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  };

  return (
    <form className="search-form">
      <input
        className="search-form__input"
        type="search"
        name="search"
        placeholder="Enter your breed"
        ref={searchRef}
        onChange={(e) => handleSearch(e)}
        value={query}
      />
      <SearchIcon className="search-form__icon" />
      {isSearching && searchedResults && (
        <div className="search-form__results-wrapper radius">
          <ol className="search-form__results">
            {searchedResults.map((result) => {
              const { name, id } = result;

              return (
                <li className="search-form__results-item" key={id}>
                  <a href="/breed">{name}</a>
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </form>
  );
}
