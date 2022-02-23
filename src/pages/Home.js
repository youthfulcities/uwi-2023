import React from "react";
import { Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import BasicContainer from "../components/BasicContainer";
import Decoration from "../components/Decoration";
import PhotoBackground from "../components/PhotoBackground";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Home = ({ languages, setCurrentLangCode }) => {
  const { t } = useTranslation();

  return (
    <>
      <BasicContainer width="xs">
        <Grid item>
          <Typography color="#FFF" variant="h1" align="center">
            {t("welcome")}
          </Typography>
        </Grid>
        <Grid item mt={1} mb={5}>
          <Typography color="#FFF" variant="h4" align="center">
            {t("welcomeMessage")}
          </Typography>
        </Grid>

        {languages.map(({ code, language }) => (
          <Grid key={code} item mt={1}>
            <Link to="/intro">
              <Button
                color="primary"
                variant="contained"
                size="large"
                onClick={() => {
                  i18next.changeLanguage(code);
                  setCurrentLangCode(code);
                }}
              >
                <Typography variant="h5">{language}</Typography>
              </Button>
            </Link>
          </Grid>
        ))}
      </BasicContainer>
      <Decoration />
      <PhotoBackground />
    </>
  );
};

export default Home;
