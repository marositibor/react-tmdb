import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MovieCard from "./MovieCard";

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

export default function MovieCardList({ movieNodeList }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.root} spacing={2}>
        {movieNodeList.map((item) => (
          <Grid item xs={1}>
            <MovieCard movieNode={item.node} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
