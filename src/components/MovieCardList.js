import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MovieCard from "./MovieCard";

const useStyles = makeStyles((theme) => ({
  item: {
    flexGrow: 0,
  },
}));

export default function MovieCardList({ movieNodeList }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={2} justify="center">
        {movieNodeList.map((item) => (
          <Grid item xs={6} sm={4} md={3} lg={2} className={classes.item}>
            <MovieCard movieNode={item} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
