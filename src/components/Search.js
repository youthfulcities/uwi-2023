import React from "react";

import { Button, Grid, TextField, InputAdornment } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Search = ({ setSearchString, searchString }) => {
  return (
    <div className="accordianContainer">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <Grid item flexGrow="2">
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="large" />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            onChange={(e) => setSearchString(e.target.value)}
            fullWidth={true}
            label="Search"
          ></TextField>
        </Grid>
        {searchString.length > 0 && (
          <>
            <Grid item>
              <Button
                sx={{ minWidth: 0 }}
                className="roundButton"
                variant="contained"
                color="error"
                onClick={() => setSearchString("")}
              >
                <CloseIcon fontSize="large" />
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{ minWidth: 0 }}
                className="roundButton"
                variant="contained"
                color="primary"
              >
                <ArrowForwardIcon fontSize="large" />
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
};

export default Search;
