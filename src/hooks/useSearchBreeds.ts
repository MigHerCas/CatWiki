import { useState, useEffect, RefObject } from 'react';
import apiService from '../api/apiService';
import { Breed } from '../models/schema';

type HookReturns = {
  searchedBreeds: Breed[];
  searchIsLoading: boolean;
};

interface Props {
  searchRef: RefObject<HTMLInputElement>;
  query: string;
}

const useSearchBreeds = ({ searchRef, query }: Props): HookReturns => {
  const [searchedBreeds, setSearchedBreeds] = useState<Breed[]>([]);
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
    let currentQuery = true;

    const loadBreeds = async () => {
      if (!query) return setSearchedBreeds([]);
      await sleep(200);

      if (currentQuery) {
        try {
          setSearchIsLoading(true);
          const loadedBreeds = await searchBreeds(query);
          setSearchedBreeds(loadedBreeds);
          setSearchIsLoading(false);
        } catch (err) {
          throw new Error(err);
        }
      }

      return loadBreeds;
    };

    loadBreeds();

    return () => {
      currentQuery = false;
    };
  }, [query]);

  return { searchedBreeds, searchIsLoading };
};

export default useSearchBreeds;
