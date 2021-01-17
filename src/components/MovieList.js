import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, CircularProgress } from "@material-ui/core";
import MovieCardList from "./MovieCardList";
import MovieSearchBar from "./MovieSearchBar";
import useSearch from "../hooks/useSearch";
import useSimilar from "../hooks/useSimilar";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    justifyContent: "center",
  },
  button: { margin: 5 },
}));

export default function MovieList({ ...props }) {
  const classes = useStyles();
  const [similar, setSimilar] = React.useState(false);
  const { response, error, isLoading, search } = useSearch("Star Wars");
  const Similar = useSimilar();

  async function handleSimilar(id) {
    setSimilar(true);
    Similar.search(id);
  }

  function handleSearch(query) {
    search(query);
  }

  return (
    <React.Fragment>
      {similar ? (
        <React.Fragment>
          <Box className={classes.box}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => {
                setSimilar(false);
              }}
            >
              {"< Back to Search"}
            </Button>
          </Box>

          {Similar.response && (
            <MovieCardList
              movieNodeList={Similar.response.data.movie.similar}
              onSimilar={handleSimilar}
            ></MovieCardList>
          )}
          {Similar.isLoading && (
            <Box className={classes.box}>
              <CircularProgress />
            </Box>
          )}
          {Similar.error && "Error connectiong to The Movie Database"}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <MovieSearchBar onSearch={handleSearch}></MovieSearchBar>
          {response && (
            <MovieCardList
              movieNodeList={response.data.searchMovies}
              onSimilar={handleSimilar}
            ></MovieCardList>
          )}
          {isLoading && (
            <Box className={classes.box}>
              <CircularProgress />
            </Box>
          )}
          {error && "Error connectiong to The Movie Database"}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
