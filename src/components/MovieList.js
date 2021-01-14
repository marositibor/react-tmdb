import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";
import MovieCardList from "./MovieCardList";
import MovieSearchBar from "./MovieSearchBar";
import useSearch from "../hooks/useSearch";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
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
    <React.Fragment className={classes.root}>
      <MovieSearchBar onSearch={handleSearch}></MovieSearchBar>
      {response && (
        <MovieCardList
          movieNodeList={response.data.searchMovies}
        ></MovieCardList>
      )}
      {isLoading && <CircularProgress />}
    </React.Fragment>
  );
}
