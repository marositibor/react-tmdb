import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MovieCardList from "./MovieCardList";
import MovieSearchBar from "./MovieSearchBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MovieList({ ...props }) {
  const classes = useStyles();
  const [results, setResults] = React.useState(
    JSON.parse(`[
        {
            "node": {
              "originalTitle": "Star Wars",
              "poster": "https://image.tmdb.org/t/p/w342/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
              "rating": 8.2,
              "id": 11
            }
          },
          {
            "node": {
              "originalTitle": "The Lego Star Wars Holiday Special",
              "poster": "https://image.tmdb.org/t/p/w342/zyzJSI7UZZzz5Toj10rYGF5689z.jpg",
              "rating": 7.2,
              "id": 732670
            }
          },
          {
            "node": {
              "originalTitle": "Star Wars: The Last Jedi",
              "poster": "https://image.tmdb.org/t/p/w342/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
              "rating": 6.9,
              "id": 181808
            }
          },
          {
            "node": {
              "originalTitle": "Star Wars",
              "poster": "https://image.tmdb.org/t/p/w342/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
              "rating": 8.2,
              "id": 11
            }
          },
          {
            "node": {
              "originalTitle": "The Lego Star Wars Holiday Special",
              "poster": "https://image.tmdb.org/t/p/w342/zyzJSI7UZZzz5Toj10rYGF5689z.jpg",
              "rating": 7.2,
              "id": 732670
            }
          },
          {
            "node": {
              "originalTitle": "Star Wars: The Last Jedi",
              "poster": "https://image.tmdb.org/t/p/w342/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
              "rating": 6.9,
              "id": 181808
            }
          },
          {
            "node": {
              "originalTitle": "Star Wars",
              "poster": "https://image.tmdb.org/t/p/w342/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
              "rating": 8.2,
              "id": 11
            }
          },
          {
            "node": {
              "originalTitle": "The Lego Star Wars Holiday Special",
              "poster": "https://image.tmdb.org/t/p/w342/zyzJSI7UZZzz5Toj10rYGF5689z.jpg",
              "rating": 7.2,
              "id": 732670
            }
          },
          {
            "node": {
              "originalTitle": "Star Wars: The Last Jedi",
              "poster": "https://image.tmdb.org/t/p/w342/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
              "rating": 6.9,
              "id": 181808
            }
          },
          {
            "node": {
              "originalTitle": "Star Wars",
              "poster": "https://image.tmdb.org/t/p/w342/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
              "rating": 8.2,
              "id": 11
            }
          },
          {
            "node": {
              "originalTitle": "The Lego Star Wars Holiday Special",
              "poster": "https://image.tmdb.org/t/p/w342/zyzJSI7UZZzz5Toj10rYGF5689z.jpg",
              "rating": 7.2,
              "id": 732670
            }
          },
          {
            "node": {
              "originalTitle": "Star Wars: The Last Jedi",
              "poster": "https://image.tmdb.org/t/p/w342/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
              "rating": 6.9,
              "id": 181808
            }
          },
          {
            "node": {
              "originalTitle": "Star Wars",
              "poster": "https://image.tmdb.org/t/p/w342/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
              "rating": 8.2,
              "id": 11
            }
          },
          {
            "node": {
              "originalTitle": "The Lego Star Wars Holiday Special",
              "poster": "https://image.tmdb.org/t/p/w342/zyzJSI7UZZzz5Toj10rYGF5689z.jpg",
              "rating": 7.2,
              "id": 732670
            }
          },
          {
            "node": {
              "originalTitle": "Star Wars: The Last Jedi",
              "poster": "https://image.tmdb.org/t/p/w342/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
              "rating": 6.9,
              "id": 181808
            }
          },
          {
            "node": {
              "originalTitle": "Star Wars",
              "poster": "https://image.tmdb.org/t/p/w342/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
              "rating": 8.2,
              "id": 11
            }
          },
          {
            "node": {
              "originalTitle": "The Lego Star Wars Holiday Special",
              "poster": "https://image.tmdb.org/t/p/w342/zyzJSI7UZZzz5Toj10rYGF5689z.jpg",
              "rating": 7.2,
              "id": 732670
            }
          },
          {
            "node": {
              "originalTitle": "Star Wars: The Last Jedi",
              "poster": "https://image.tmdb.org/t/p/w342/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
              "rating": 6.9,
              "id": 181808
            }
          }]`)
  );
  function handleSearch() {}

  return (
    <React.Fragment>
      <MovieSearchBar onSearch={handleSearch}></MovieSearchBar>
      <MovieCardList movieNodeList={results}></MovieCardList>
    </React.Fragment>
  );
}
