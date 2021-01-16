import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MovieCard from "./MovieCard";
import Typography from "@material-ui/core/Typography";

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
  console.log(movieNodeList);
  return (
    <React.Fragment>
      <Grid container justify="center" className={classes.container}>
        {movieNodeList.length === 0 ? (
          <Typography color={"primary"} variant={"h5"}>
            We have looked everywhere but couldn't find that movie
          </Typography>
        ) : (
          movieNodeList.map((movie) => (
            <Grid item xs={12} key={movie.id} className={classes.item}>
              <MovieCard
                key={movie.id}
                posterUrl={movie.poster ? movie.poster.small : null}
                title={movie.name}
                releaseDate={new Date(movie.releaseDate).toLocaleDateString()}
                score={movie.score}
              />
            </Grid>
          ))
        )}
      </Grid>
    </React.Fragment>
  );
}
