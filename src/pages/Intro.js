import React from "react";
import { Typography, Button, Container, Grid, Fab } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const Intro = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <Container maxWidth="xs">
        <Fab
          onClick={() => goBack()}
          color="primary"
          size="medium"
          className="backButton"
        >
          <ArrowBackIcon fontSize="large" />
        </Fab>
        <Grid
          sx={{ height: "90vh" }}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={0}
        >
          <Grid item>
            <Typography color="#FFF" variant="h1" align="center">
              Let's Find Your Best City
            </Typography>
          </Grid>
          <Grid item mt={1}>
            <Typography color="#FFF" variant="h4" align="center">
              We're going to ask you some questions to help determine which
              cities will be best for you.
              <br />
              <br />
              We will not be recording any personal information.
            </Typography>
          </Grid>
          <Grid item mt={5}>
            <Link to="/intro">
              <Button color="primary" variant="contained" size="large">
                <Typography variant="h5">Help Me Decide</Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item mt={1}>
            <Link to="/intro">
              <Button color="info" variant="outlined" size="large">
                <Typography variant="h5">Explore All Cities</Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <div className="background"></div>
      <div className="photoBackgroundOverlay"></div>
      <div className="photoBackground"></div>
    </>
  );
};

export default Intro;
