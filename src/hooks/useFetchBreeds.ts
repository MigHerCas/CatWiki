import { useState, useEffect } from 'react';
import apiService from '../api/apiService';
import { Breed } from '../models/schema';

type HookReturns = {
  breeds: Breed[];
  isError: boolean;
  isLoading: boolean;
};

const useFetchBreeds = (): HookReturns => {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const url = '/breeds';
    const fetchBreeds = async (): Promise<void> => {
      try {
        setIsError(false);
        setIsLoading(true);
        const { data, status } = await apiService.get<Breed[]>(url);

        if (status === 200) {
          // Success
          setBreeds(data);
          setIsLoading(false);
        } else {
          // Error
          setIsError(true);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchBreeds();
  }, []);

  return { breeds, isError, isLoading };
};

export default useFetchBreeds;
