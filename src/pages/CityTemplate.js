import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";

import getData from "../helpers/odsClientV2.js";

import Decoration from "../components/Decoration";
import PhotoHeader from "../components/CityTemplate/PhotoHeader";
import Back from "../components/Back";
import Socials from "../components/Socials";
import CityInfo from "../components/CityTemplate/CityInfo";
import Stories from "../components/CityTemplate/Stories";
import Resources from "../components/CityTemplate/Resources";

const CityTemplate = () => {
  const { t } = useTranslation();
  let { cityname } = useParams();
  const [city, setCity] = useState(undefined);
  const [resources, setResources] = useState(undefined);
  const [subResources, setSubResources] = useState(undefined);
  const [searchString, setSearchString] = useState("");
  const [searchStringQuery, setSearchStringQuery] = useState("");

  const cityQuery = `/records?refine=city_name:${cityname}`;
  let resourceQuery = `/records?refine=city:${cityname}&limit=10&select=indicator_en&group_by=indicator_en`;

  useEffect(() => {
    const retrievedInfo = getData("cities", cityQuery).then(
      (res) => res.records[0]
    );

    const setCities = async () => {
      setCity(await retrievedInfo);
    };

    setCities();
  }, [cityQuery]);

  //get main categories
  useEffect(() => {
    const retrievedInfo = getData("index-2020-full", resourceQuery).then(
      (res) => res.records
    );

    const setCities = async () => {
      setResources(await retrievedInfo);
    };

    setCities();
  }, [resourceQuery]);

  //get sub categories within resources
  useEffect(() => {
    const createSubResourceQuery = (indicator_en) => {
      return `/records?refine=city:${cityname}&limit=10&select=avg(value) as value,measurement_en,indicator_en,noteen&where=indicator_en="${indicator_en}"${
        searchStringQuery.length > 0 ? "AND '" + searchStringQuery + "'" : ""
      }&group_by=measurement_en,indicator_en,noteen`;
    };

    if (resources !== undefined) {
      const sub = resources.map((resource) =>
        createSubResourceQuery(resource.record.fields.indicator_en)
      );

      const retrievedInfo = Promise.all(
        sub.map((query) =>
          getData("index-2020-full", query).then((res) => res.records)
        )
      );

      const setSubs = async () => {
        setSubResources(await retrievedInfo);
      };

      setSubs();
    }
  }, [resources, cityname, searchStringQuery]);

  //for removing unnescessary words from search
  const cleanSearch = (s) => {
    var words = ["of", "the", "in", "on", "at", "to", "a", "is", "for"];
    var re = new RegExp("\\b(" + words.join("|") + ")\\b", "g");
    return (s || "").replace(re, "").replace(/[ ]{2,}/, " ");
  };

  const createStringQuery = () => {
    if (searchString === "") {
      setSearchStringQuery("");
    } else {
      let words = cleanSearch(searchString)
        .replace(/\s+/g, " ") //remove extra spaces
        .trim()
        .split(" ") //split at spaces
        .join("*' AND '") //add wildcard to each query word
        .concat("*");

      setSearchStringQuery(words);
    }
  };

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
                  setSearchString={setSearchString}
                  searchString={searchString}
                  createStringQuery={createStringQuery}
                  setSearchStringQuery={setSearchStringQuery}
                  subResources={subResources}
                  resources={resources}
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
