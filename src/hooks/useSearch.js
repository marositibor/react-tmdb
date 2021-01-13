import React from "react";

export default function useSearch(defaultQuery) {
  const [query, setQuery] = React.useState(defaultQuery);
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const createBody = (query) => {
    return JSON.stringify({
      query: `query SearchMovies {  
                searchMovies(query: "${query}") {
                        id
                        name 
                        releaseDate
                        poster{
                          medium
                        }  
                    }}`,
      operationName: "SearchMovies",
    });
  };

  React.useEffect(() => {
    const body = createBody(query);

    const url = "https://tmdb.sandbox.zoosh.ie/dev/graphql";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    };

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [query]);

  function search(query) {
    setQuery(query);
  }
  return { response, error, isLoading, search };
}
