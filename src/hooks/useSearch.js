import useFetch from "./useFetch";

export default function useSearch(defaultQuery) {
  const createBody = (query) => {
    return JSON.stringify({
      query: `query SearchMovies {  
                searchMovies(query: "${query}") {
                        id
                        name 
                        releaseDate  
                    }}`,
      operationName: "SearchMovies",
    });
  };

  const defaultBody = createBody(defaultQuery);

  const { response, error, isLoading } = useFetch(
    "https://tmdb.sandbox.zoosh.ie/dev/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: defaultBody,
    }
  );

  return { response, error, isLoading };
}
