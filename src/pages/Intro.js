import React from "react";
import { Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Decoration from "../components/Decoration";
import PhotoBackground from "../components/PhotoBackground";
import BasicContainer from "../components/BasicContainer";
import { useTranslation } from "react-i18next";
import ChangeLang from "../components/ChangeLang";

const Intro = () => {
  const { t } = useTranslation();

  return (
    <>
      <BasicContainer width="sm">
        <Grid item>
          <Typography color="#FFF" variant="h1" align="center">
            {t("introHeading")}
          </Typography>
        </Grid>
        <Grid item mt={1}>
          <Typography color="#FFF" variant="h4" align="center">
            {t("introPar1")}
            <br />
            <br />
            {t("introPar2")}
          </Typography>
        </Grid>
        <Grid item mt={5}>
          <Link to="/create-profile">
            <Button color="primary" variant="contained" size="large">
              <Typography variant="h5">{t("toProfile")}</Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item mt={1}>
          <Link to="/explore-all">
            <Button color="info" variant="outlined" size="large">
              <Typography variant="h5">{t("toExplore")}</Typography>
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
