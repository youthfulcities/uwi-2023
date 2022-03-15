import React from "react";
import { Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import BasicContainer from "../components/BasicContainer";
import Decoration from "../components/Decoration";
import PhotoBackground from "../components/PhotoBackground";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Home = ({
  languages,
  setCurrentLangCode,
  currentLangCode,
  textSize,
  setTextSize,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <BasicContainer
        width="xs"
        languages={languages}
        setCurrentLangCode={setCurrentLangCode}
        currentLangCode={currentLangCode}
        textSize={textSize}
        setTextSize={setTextSize}
      >
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <img
            alt="Home icon with a group of four houses"
            src="/assets/images/home-white.png"
          />
          <Typography color="#FFF" variant="h1" align="center" mx={2}>
            KULBA
          </Typography>
        </Grid>
        <Grid item mt={2} mb={5}>
          <Typography color="#FFF" variant="h4" align="center">
            کور • Home
          </Typography>
        </Grid>
        <Grid item mt={2} mb={5}>
          <Typography color="#FFF" variant="h5" align="center">
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
