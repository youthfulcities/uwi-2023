import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";

import Decoration from "../components/Decoration";
import PhotoHeader from "../components/CityTemplate/PhotoHeader";
import Back from "../components/Back";
import Socials from "../components/Socials";
import CityInfo from "../components/CityTemplate/CityInfo";
import Stories from "../components/CityTemplate/Stories";
import Resources from "../components/CityTemplate/Resources";
import getData from "../helpers/odsClientV2.js";

const CityTemplate = ({ currentLangCode }) => {
  const { t } = useTranslation();
  const { cityname } = useParams();
  const [city, setCity] = useState(undefined);
  const [resources, setResources] = useState(undefined);

  const cityQuery = `/records?refine=city_name:${cityname}`;
  const resourceQuery = `/records?refine=city:${cityname}&limit=10&select=measurement&group_by=measurement`;

  const getCityData = useCallback(() => {
    const retrievedInfo = getData("cities", cityQuery).then(
      (res) => res.records[0]
    );

    const setCities = async () => {
      setCity(await retrievedInfo);
    };

    setCities();
  }, [cityQuery]);

  const getCategories = useCallback(() => {
    const retrievedInfo = getData("refugee-test-data", resourceQuery).then(
      (res) => res.records
    );

    const setCities = async () => {
      setResources(await retrievedInfo);
    };

    setCities();
  }, [resourceQuery]);

  //get initial city info
  useEffect(() => {
    getCityData();
  }, [getCityData]);

  //get main categories
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <>
      {city !== undefined ? (
        <>
          <PhotoHeader
            src={city.record.fields.main_img}
            alt={city.record.fields.main_img_alt}
          >
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
                  src={city.record.fields.main_img}
                  alt={city.record.fields.main_img_alt}
                />
                <Stories />
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
          </Container>
          <Decoration />
        </>
      ) : (
        <p>{t("loading")}</p>
      )}
    </>
  );
};

export default CityTemplate;
