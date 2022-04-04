import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Grid, Typography } from "@mui/material";

import cities from "../data/cities.json";
import PhotoCard from "../components/PhotoCard";
import BasicContainer from "../components/BasicContainer";

const ExploreAll = ({
  currentLangCode,
  languages,
  setCurrentLangCode,
  textSize,
  setTextSize,
}) => {
  const { t } = useTranslation();

  const [recs] = useState(cities);

  return (
    <>
      <BasicContainer
        width="lg"
        languages={languages}
        setCurrentLangCode={setCurrentLangCode}
        currentLangCode={currentLangCode}
        textSize={textSize}
        setTextSize={setTextSize}
      >
        <Grid mb={2} item>
          <Typography align="center" variant="h1">
            {t("exploreHeading")}
          </Typography>
        </Grid>
        <Grid container direction="row" spacing={2}>
          {recs.map((city, i) => (
            <Grid key={i} item lg={3} md={6} xs={12}>
              <PhotoCard
                city={city.city_name}
                alt={city.main_img_alt}
                src={city.main_img}
                factoid={city.population}
                province={city.province}
                currentLangCode={currentLangCode}
              >
                {city.city_name}
              </PhotoCard>
            </Grid>
          ))}
        </Grid>
      </BasicContainer>
    </>
  );
};

export default ExploreAll;
