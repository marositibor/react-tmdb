import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useWiki from "../hooks/useWiki";
import { Box, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
  content: {},
  link: {},
});

export default function MovieDetails({ name }) {
  const classes = useStyles();
  const { response, error, isLoading } = useWiki(name);
  console.log(response);
  return (
    <Box>
      {isLoading && <CircularProgress />}
      {response && (
        <Box>
          <Typography variant="body1">
            {response.query.pages[Object.keys(response.query.pages)[0]].extract}
          </Typography>
          <Button
            href={
              "https://en.wikipedia.org/?curid=" +
              response.query.pages[Object.keys(response.query.pages)[0]].pageid
            }
            target={"_blank"}
            color={"primary"}
          >
            Wikipedia
          </Button>
        </Box>
      )}
      {error && "Error Loading Wikipedia Data"}
    </Box>
  );
}
