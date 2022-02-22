import React from "react";
import { Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import BasicContainer from "../components/BasicContainer";
import Decoration from "../components/Decoration";
import PhotoBackground from "../components/PhotoBackground";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          Welcome: "Welcome!",
          WelcomeMessage:
            "This app is to help refugees know where to settle provide resources for those cities.",
        },
      },
      fa: {
        translation: {
          Welcome: "خوش آمدی!",
          WelcomeMessage:
            "این برنامه برای کمک به پناهندگان است که بدانند در کجا مستقر شوند منابعی را برای آن شهرها فراهم کنند.",
        },
      },
      ps: {
        translation: {
          Welcome: "ښه راغلاست!",
          WelcomeMessage:
            "دا اپلیکیشن د دې لپاره دی چې له کډوالو سره مرسته وکړي چې پوه شي چې چیرې میشته شي د دې ښارونو لپاره سرچینې چمتو کړي.",
        },
      },
    },
    lng: "",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <BasicContainer width="xs">
        <Grid item>
          <Typography color="#FFF" variant="h1" align="center">
            {t("Welcome")}
          </Typography>
        </Grid>
        <Grid item mt={1}>
          <Typography color="#FFF" variant="h4" align="center">
            {t("WelcomeMessage")}
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
