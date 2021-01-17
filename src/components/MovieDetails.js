import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useWiki from "../hooks/useWiki";
import { Box, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles({
  button: { margin: 5 },
  text: {
    margin: 7,
  },
  center: {
    textAlign: "center",
  },
});

export default function MovieDetails({ name, movieId, onSimilar }) {
  const classes = useStyles();
  const { response, error, isLoading } = useWiki(name);
  return (
    <Box>
      <Box>
        {isLoading && (
          <Box className={classes.center}>
            <CircularProgress />
          </Box>
        )}
        {response && (
          <React.Fragment>
            {Object.keys(response.query.pages)[0] === "-1" ? (
              <Typography variant="body1" className={classes.text}>
                Could not find a Wiki page related to this movie.
              </Typography>
            ) : (
              <React.Fragment>
                {response.query.pages[
                  Object.keys(response.query.pages)[0]
                ].extract
                  .split("\n")
                  .map((paragraph, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      className={classes.text}
                    >
                      {paragraph}
                    </Typography>
                  ))}

                <Button
                  className={classes.button}
                  href={
                    "https://en.wikipedia.org/?curid=" +
                    response.query.pages[Object.keys(response.query.pages)[0]]
                      .pageid
                  }
                  target={"_blank"}
                  color={"primary"}
                  variant="outlined"
                >
                  Wikipedia
                </Button>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
        {error && (
          <Box>
            <Typography variant="body1" className={classes.text}>
              Could not connect to Wikipedia.
            </Typography>
          </Box>
        )}
        <Button
          className={classes.button}
          href={"https://www.themoviedb.org/movie/" + movieId}
          target={"_blank"}
          color={"primary"}
          variant="outlined"
        >
          TMDB
        </Button>
        <Button
          className={classes.button}
          color="secondary"
          variant="outlined"
          onClick={() => {
            onSimilar(movieId);
          }}
        >
          Related
        </Button>
      </Box>
    </Box>
  );
}
