import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MovieCard from "./MovieCard";

const useStyles = makeStyles((theme) => ({
  container: {
    flexWrap: "nowrap",
    flexDirection: "column",
    alignItems: "center",
  },
  item: {
    flexGrow: 0,
    flexShrink: 0,
    padding: 10,
    maxWidth: 900,
    width: "100%",
  },
}));

export default function MovieCardList({ movieNodeList }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container justify="center" className={classes.container}>
        {movieNodeList.map((movie) => (
          <Grid item xs={12} className={classes.item}>
            <MovieCard
              key={movie.id}
              posterUrl={movie.poster ? movie.poster.small : null}
              title={movie.name}
              releaseDate={new Date(movie.releaseDate).toLocaleDateString()}
              description={movie.overview}
            />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
