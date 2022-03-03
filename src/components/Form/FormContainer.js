import React from "react";
import { useTranslation } from "react-i18next";

import { Container, Grid, Fab, Typography, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Socials from "../Socials";
import Decoration from "../Decoration";
import Back from "../Back";

const FormContainer = ({ children, width, prevStep, step }) => {
  const { t } = useTranslation();
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
          <Grid item mt="17vh" mb="7vh">
            <Paper>
              <Grid
                sx={{ minWidth: "100%" }}
                container
                item
                direction="column"
                justifyContent="flex-start"
                alignItems="stretch"
                py="7vh"
                px={5}
                spacing={0}
              >
                <Typography variant="h1" align="center" mb={4}>
                  {t("createProfileHeading")}
                </Typography>
                {children}
              </Grid>
            </Paper>
          </Grid>
          <Grid item mb={2} sx={{ maxHeight: "10vh" }}>
            <Socials />
          </Grid>
          {step > 1 ? (
            <Fab
              onClick={() => prevStep()}
              color="primary"
              size="medium"
              className="backButton"
            >
              <ArrowBackIcon fontSize="large" />
            </Fab>
          ) : (
            <Back />
          )}
          {/* <Fab
            onClick={() => nextStep()}
            color="primary"
            size="medium"
            className="forwardButton"
          >
            <ArrowForwardIcon fontSize="large" />
          </Fab> */}
        </Grid>
      </Container>
      <Decoration />
    </>
  );
};

export default FormContainer;
