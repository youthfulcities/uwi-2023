import React, { useState, useEffect, useCallback } from "react";

import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";

import cities from "../data/cities.json";

import PhotoHeader from "../components/CityTemplate/PhotoHeader";
import Back from "../components/Back";
import Socials from "../components/Socials";
import CityInfo from "../components/CityTemplate/CityInfo";
import Stories from "../components/CityTemplate/Stories";
import Resources from "../components/CityTemplate/Resources";
import getData from "../helpers/odsClientV2.js";
import ChangeLang from "../components/ChangeLang";
import Loading from "../pages/Loading";

const CityTemplate = ({
  languages,
  setCurrentLangCode,
  currentLangCode,
  textSize,
  setTextSize,
}) => {
  const { cityname } = useParams();
  //for getting city data locally
  const getCityData = () => {
    return cities.find((e) => e.city_name === cityname);
  };

  const [city] = useState(getCityData());

  //for getting city data via api call
  // const [city, setCity] = useState(undefined)
  const [resources, setResources] = useState(undefined);

  //for getting city data via api call
  // const cityQuery = `/records?refine=city_name:${cityname}`;
  const resourceQuery = `/records?refine=city:${cityname}&limit=20&select=sheet_title as measurement&group_by=sheet_title`;

  //for getting city data via api call
  // const getCityData = useCallback(() => {
  //   const retrievedInfo = getData("cities", cityQuery).then(
  //     (res) => res.records[0]
  //   );

  //   const setCities = async () => {
  //     setCity(await retrievedInfo);
  //   };

  //   setCities();
  // }, [cityQuery]);

  const getCategories = useCallback(() => {
    const retrievedInfo = getData("resource-data-test", resourceQuery).then(
      (res) => res.records
    );

    const setCities = async () => {
      setResources(await retrievedInfo);
    };

    setCities();
  }, [resourceQuery]);

  //for getting city data via api call
  // useEffect(() => {
  //   console.log("city data api triggered");
  //   getCityData();
  // }, [getCityData]);
  //to access returning data the format is "city.record.fields.main_img"

  //get main categories
  useEffect(() => {
    console.log("category api triggered");
    getCategories();
  }, [getCategories]);

  return (
    <>
      {city !== undefined ? (
        <>
          <PhotoHeader src={city.main_img} alt={city.main_img_alt}>
            {cityname}
          </PhotoHeader>
          <Container maxWidth="md">
            <Grid
              sx={{ minHeight: "55vh" }}
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              py="7vh"
              spacing={0}
            >
              <div>
                <CityInfo
                  description={city.description}
                  src={city.main_img}
                  alt={city.main_img_alt}
                />
                <Stories stories={city.stories} />
                <Resources
                  resources={resources}
                  cityname={cityname}
                  currentLangCode={currentLangCode}
                />
              </div>
            </Grid>
            <Back />
            <Grid item mb={2} sx={{ maxHeight: "10vh" }}>
              <Socials />
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
      ) : (
        <Loading />
      )}
    </>
  );
};

export default CityTemplate;
