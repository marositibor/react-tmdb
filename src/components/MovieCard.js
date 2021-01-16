import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MovieIcon from "@material-ui/icons/Movie";
import { Box, Collapse } from "@material-ui/core";
import UserScore from "./UserScore";
import MovieDetails from "./MovieDetails";

const useStyles = makeStyles({
  root: {
    height: "auto",
    display: "flex",
    flexDirection: "row",
  },
  media: {
    height: 150,
    backgroundPositionY: 0,
    width: 100,
    flexShrink: 0,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    flexGrow: 1,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 1,
  },
});

export default function MovieCard({ posterUrl, title, releaseDate, score }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
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
      <CardContent className={classes.content}>
        <Box className={classes.row}>
          <Box>
            <Button
              color="primary"
              size="large"
              onClick={() => {
                setExpanded(!expanded);
              }}
            >
              <Typography variant="h6" component="h2">
                {title}
              </Typography>
            </Button>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              Release date: {releaseDate}
            </Typography>
          </Box>
          <Box>
            <UserScore score={score * 10} label={"User score:"}></UserScore>
          </Box>
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <MovieDetails name={title}></MovieDetails>
        </Collapse>
      </CardContent>
    </Card>
  );
}
