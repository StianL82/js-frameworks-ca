import { useEffect, useState } from "react";

export default function useFetchAPI(url) {
  const [data, setData] = useState(null); // Data fra API
  const [isLoading, setIsLoading] = useState(false); // Loading-tilstand
  const [isError, setIsError] = useState(false); // Error-tilstand

  useEffect(() => {
    // Variabel for å beskytte mot oppdatering av state etter unmount
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
          setData(json); // Oppdater data kun hvis komponenten er mountet
        }
      } catch (error) {
        if (isMounted) {
          console.error("Error fetching data:", error);
          setIsError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false); // Slå av loading-tilstand
        }
      }
    }

    fetchData();

    // Cleanup-funksjon for å unngå oppdatering av state etter unmount
    return () => {
      isMounted = false;
    };
  }, [url]); // Avhenger av URL

  return { data, isLoading, isError }; // Returner loading, error og data
}
