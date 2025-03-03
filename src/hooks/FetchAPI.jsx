import { useEffect, useState } from 'react';

/**
 * Custom Hook: useFetchAPI
 *
 * Fetches data from a given API endpoint and manages loading and error states.
 *
 * @function useFetchAPI
 * @param {string} url - The API endpoint to fetch data from.
 * @returns {Object} Hook state values.
 * @returns {any} return.data - The fetched data, or null if not yet available.
 * @returns {boolean} return.isLoading - Indicates if the data is currently being loaded.
 * @returns {boolean} return.isError - Indicates if an error occurred during the fetch process.
 */

export default function useFetchAPI(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();

        if (isMounted) {
          setData(json);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error fetching data:', error);
          setIsError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, isLoading, isError };
}
