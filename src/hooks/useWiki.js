import React from "react";

export default function useSearch(title) {
  const [query, setQuery] = React.useState(title);
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const createUrl = (title) => {
    return encodeURI(
      "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&info&redirects=1&origin=*&titles=" +
        title
    );
  };

  React.useEffect(() => {
    const url = createUrl(query);
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Origin: "*",
      },
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

  return { response, error, isLoading };
}
