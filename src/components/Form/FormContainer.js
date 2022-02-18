import React from "react";
import { Container, Grid, Fab } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Socials from "../Socials";

const FormContainer = ({ children, width, prevStep, nextStep }) => {
  return (
    <>
      <Container maxWidth={width === undefined ? "xs" : width}>
        <Grid
          sx={{ minHeight: "90vh", minWidth: "100%" }}
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
        >
          <Grid
            sx={{ minHeight: "80vh", minWidth: "100%" }}
            container
            item
            direction="column"
            justifyContent="center"
            alignItems="center"
            pt="14vh"
            pb="10vh"
            spacing={0}
          >
            {children}
          </Grid>
          <Grid item pb={3} sx={{ maxHeight: "10vh" }}>
            <Socials />
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item>
            <Fab
              onClick={() => prevStep()}
              color="primary"
              size="medium"
              className="backButton"
            >
              <ArrowBackIcon fontSize="large" />
            </Fab>
          </Grid>
          <Grid item>
            <Fab
              onClick={() => nextStep()}
              color="primary"
              size="medium"
              className="backButton"
            >
              <ArrowForwardIcon fontSize="large" />
            </Fab>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FormContainer;
