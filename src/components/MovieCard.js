import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useWiki from "../hooks/useWiki";
import MovieIcon from "@material-ui/icons/Movie";

const useStyles = makeStyles({
  root: {
    height: 150,
    display: "flex",
    flexDirection: "row",
  },
  media: {
    height: 150,
    backgroundPositionY: 0,
    width: 100,
    flexShrink: 0,
  },
});

export default function MovieCard({
  posterUrl,
  title,
  releaseDate,
  description,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={3}>
      {posterUrl ? (
        <CardMedia
          className={classes.media}
          image={posterUrl}
          title="Poster of movie"
        />
      ) : (
        <MovieIcon
          className={classes.media}
          title="No movie poster"
          fontSize="large"
          color="primary"
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" component="p">
          Release date: {releaseDate}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function MovieCardDetails({ name }) {
  const { response, error, isLoading } = useWiki(name);
}
