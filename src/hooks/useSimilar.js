import React from "react";

export default function useSimilar() {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const createBody = (id) => {
    return JSON.stringify({
      query: `query movie { 
                movie(id:${id}) {
                    similar{
                        id
                        name 
                        releaseDate
                        poster{
                          small
                        }  
                        score
                    }
                }
              }`,
      operationName: "movie",
    });
  };

  async function search(id) {
    await setResponse(null);
    const body = createBody(id);
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
  }
  return { response, error, isLoading, search };
}
