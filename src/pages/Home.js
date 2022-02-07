import React from "react";
import { Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import BasicContainer from "../components/BasicContainer";
import Decoration from "../components/Decoration";
import PhotoBackground from "../components/PhotoBackground";

const Home = () => {
  return (
    <>
      <BasicContainer width="xs">
        <Grid item>
          <Typography color="#FFF" variant="h1" align="center">
            Welcome!
          </Typography>
        </Grid>
        <Grid item mt={1}>
          <Typography color="#FFF" variant="h4" align="center">
            This app is to help refugees know where to settle and provide
            resources for those cities.
          </Typography>
        </Grid>
        <Grid item mt={5}>
          <Link to="/intro">
            <Button color="primary" variant="contained" size="large">
              <Typography variant="h5">English</Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item mt={1}>
          <Link to="/intro">
            <Button color="primary" variant="contained" size="large">
              <Typography variant="h5">دری</Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item mt={1}>
          <Link to="/intro">
            <Button color="primary" variant="contained" size="large">
              <Typography variant="h5">پښتو</Typography>
            </Button>
          </Link>
        </Grid>
      </BasicContainer>
      <Decoration />
      <PhotoBackground />
    </>
  );
};

export default Home;
