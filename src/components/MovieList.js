import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, CircularProgress } from "@material-ui/core";
import MovieCardList from "./MovieCardList";
import MovieSearchBar from "./MovieSearchBar";
import useSearch from "../hooks/useSearch";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function MovieList({ ...props }) {
  const classes = useStyles();

  const { response, error, isLoading, search } = useSearch("Star Wars");

  if (response) {
    console.log(response.data.searchMovies);
  }
  function handleSearch(query) {
    search(query);
  }

  return (
    <React.Fragment>
      <MovieSearchBar onSearch={handleSearch}></MovieSearchBar>
      {response && (
        <MovieCardList
          movieNodeList={response.data.searchMovies}
        ></MovieCardList>
      )}
      {isLoading && (
        <Box className={classes.box}>
          <CircularProgress />
        </Box>
      )}
    </React.Fragment>
  );
}
