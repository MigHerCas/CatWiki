import { useState, useEffect, RefObject } from 'react';
import apiService from '../api/apiService';
import { Breed } from '../models/schema';

type HookReturns = {
  searchedResults: Array<Breed>;
  searchIsLoading: boolean;
};

interface Props {
  searchRef: RefObject<HTMLInputElement>;
  query: string;
}

const useSearch = ({ searchRef, query }: Props): HookReturns => {
  const [searchedResults, setSearchedResults] = useState<Breed[]>([]);
  const [searchIsLoading, setSearchIsLoading] = useState<boolean>(false);

  const sleep = (ms: number) => {
    return new Promise<TimeRanges>((resolve) => setTimeout(resolve, ms));
  };

  const searchBreeds = async (searchQuery: string) => {
    const { data } = await apiService.get(`/breeds/search?q=${searchQuery}`);
    return data;
  };

  useEffect(() => {
    searchRef?.current?.focus();
  }, [searchRef]);

  useEffect(() => {
    // let currentQuery = true;

    const loadBreeds = async () => {
      if (!query) return setSearchedResults([]);
      await sleep(200);

      try {
        setSearchIsLoading(true);
        const loadedBreeds = await searchBreeds(query);
        setSearchedResults(loadedBreeds);
        setSearchIsLoading(false);
      } catch (err) {
        throw new Error(err);
      }

      return loadBreeds;
    };

    loadBreeds();
  }, [query]);

  return { searchedResults, searchIsLoading };
};

export default useSearch;
