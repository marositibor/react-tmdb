import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    minWidth: 72,
  },
  wheel: {},
  score: {
    position: "absolute",
    top: 34,
  },
}));

export default function UserScore({ label, score }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="body2" component="p" className={classes.label}>
        {label}
      </Typography>
      <CircularProgress
        className={classes.wheel}
        variant="determinate"
        value={score}
        size={60}
        thickness={5}
      ></CircularProgress>
      <Typography variant="h6" component="b" className={classes.score}>
        {score}%
      </Typography>
    </Box>
  );
}
