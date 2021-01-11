import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Search from "@material-ui/icons/Search";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import useSearch from "../hooks/useSearch";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function MovieSearchBar({ onSearch }) {
  const classes = useStyles();
  const [query, setQuery] = React.useState("Star Wars");
  const { response, error, isLoading } = useSearch(query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <React.Fragment>
      <Grid container className={classes.grid}>
        <Typography variant="h5">Search for a Movie:</Typography>
        <TextField
          className={classes.margin}
          variant="outlined"
          color="primary"
          placeholder="e.g.: Star Wars"
          value={query}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" color="primary">
          Search
        </Button>
      </Grid>
    </React.Fragment>
  );
}
