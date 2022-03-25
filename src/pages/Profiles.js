import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Grid, Typography } from "@mui/material";

import cities from "../data/cities.json";
import PhotoButton from "../components/PhotoButton";
import BasicContainer from "../components/BasicContainer";

const Profiles = ({
  currentLangCode,
  languages,
  setCurrentLangCode,
  textSize,
  setTextSize,
}) => {
  const { t } = useTranslation();

  const [recs] = useState(cities);

  //for retriving cities via api
  // const [recs, setRecs] = useState([]);
  // const query = "/records?limit=10&offset=0";

  // useEffect(() => {
  //   const retrievedCities = getData("cities", query).then((res) => res.records);

  //   const setCities = async () => {
  //     setRecs(await retrievedCities);
  //   };

  //   setCities();
  // }, []);

  return (
    <>
      <BasicContainer
        width="md"
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
        {recs.map((city, i) => (
          <Grid key={i} mt={2} className="photoButtonContainer" item>
            <PhotoButton
              city={city.city_name}
              alt={city.main_img_alt}
              src={city.main_img}
              factoid={city.population}
              province={city.province}
              currentLangCode={currentLangCode}
            >
              {city.city_name}
            </PhotoButton>
          </Grid>
        ))}
      </BasicContainer>
    </>
  );
};

export default Profiles;
