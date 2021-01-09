import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    height: 500,
  },
  media: {
    height: 278,
    backgroundPositionY: 0,
  },
});

export default function MovieCard({ movieNode }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={movieNode.poster}
        title="Poster of movie"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {movieNode.originalTitle}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Text Secondary
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Wikipedia
        </Button>
        <Button size="small" color="primary">
          IMDb
        </Button>
      </CardActions>
    </Card>
  );
}
