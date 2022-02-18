import React from "react";
import { Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Decoration from "../components/Decoration";
import PhotoBackground from "../components/PhotoBackground";
import BasicContainer from "../components/BasicContainer";

const Intro = () => {
  return (
    <>
      <BasicContainer width="xs">
        <Grid item>
          <Typography color="#FFF" variant="h1" align="center">
            Let's Find Your Best City
          </Typography>
        </Grid>
        <Grid item mt={1}>
          <Typography color="#FFF" variant="h4" align="center">
            We're going to ask you some questions to help determine which cities
            will be best for you.
            <br />
            <br />
            We will not be recording any personal information.
          </Typography>
        </Grid>
        <Grid item mt={5}>
          <Link to="/create-profile">
            <Button color="primary" variant="contained" size="large">
              <Typography variant="h5">Help Me Decide</Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item mt={1}>
          <Link to="/explore-all">
            <Button color="info" variant="outlined" size="large">
              <Typography variant="h5">Explore All Cities</Typography>
            </Button>
          </Link>
        </Grid>
      </BasicContainer>
      <Decoration />
      <PhotoBackground />
    </>
  );
};

export default Intro;
