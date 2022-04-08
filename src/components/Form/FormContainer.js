import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Container,
  Fab,
  Grid,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Back from "../Back";
import ChangeLang from "../ChangeLang";
import Decoration from "../Decoration";
import Socials from "../Socials";

const FormContainer = ({
  children,
  width,
  prevStep,
  step,
  languages,
  setCurrentLangCode,
  groupedPrioritiesArray,
  currentLangCode,
  textSize,
  setTextSize,
}) => {
  const { t } = useTranslation();

  const progress = (step / (groupedPrioritiesArray.length + 1)) * 100;

  return (
    <>
      <Decoration />
      <Container maxWidth={width === undefined ? "xs" : width}>
        <Grid
          sx={{ minHeight: "90vh", minWidth: "100%" }}
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
        >
          <Grid item my="5vh">
            <Paper>
              <Grid item pt={5}>
                <LinearProgress variant="determinate" value={progress} />
              </Grid>
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
              onClick={() => {
                prevStep();
              }}
              color="primary"
              size="medium"
              className="backButton"
              sx={{ height: "58px", width: "58px" }}
            >
              <ArrowBackIcon fontSize="large" />
            </Fab>
          ) : (
            <Back />
          )}
        </Grid>
        <ChangeLang
          languages={languages}
          setCurrentLangCode={setCurrentLangCode}
          currentLangCode={currentLangCode}
          textSize={textSize}
          setTextSize={setTextSize}
        />
      </Container>
    </>
  );
};

export default FormContainer;
