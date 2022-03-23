import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
// import _ from "lodash";
import {
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import getData from "../helpers/odsClientV2";
import cities from "../data/cities.json";

import BasicContainer from "../components/BasicContainer";
import PhotoButton from "../components/PhotoButton";
import Decoration from "../components/Decoration";
import FactCard from "../components/FactCard";
import Loading from "../pages/Loading";

import { calcCity, topMeasurements } from "../cityCalc/calcCity";

const SuggestedCities = ({ form }) => {
  const { t } = useTranslation();
  const { priorities } = form;

  const topCities = calcCity(priorities)
    .slice(0, 3)
    .map((e) => e.city);

  const [cityNames] = useState(topCities);

  const resources = topMeasurements(priorities, cityNames, 3);

  const [cityData, setCityData] = useState(undefined);

  useEffect(() => {
    const data = cityNames.flatMap((city) =>
      cities.filter((e) => e.city_name === city)
    );
    setCityData(data);
  }, [cityNames]);

  //for retrieving city data via API
  // useEffect(() => {
  //   const createQuery = (city) => {
  //     return `/records?refine=city_name:${city}`;
  //   };

  //   if (cityNames !== undefined) {
  //     const queries = cityNames.map((city) => createQuery(city));

  //     const retrievedInfo = Promise.all(
  //       queries.map((query) =>
  //         getData("cities", query).then((res) => res.records[0])
  //       )
  //     );

  //     const addCities = async () => {
  //       setCityData(await retrievedInfo);
  //     };

  //     console.log("city api triggered");
  //     addCities();
  //   }
  // }, [cityNames]);

  // //get sub categories within resources
  // useEffect(() => {
  //   const createQuery = (city) => {
  //     return `/records?refine=city:${city}&limit=3&select=avg(value) as value,measurement_en,indicator_en,noteen,city&group_by=measurement_en,indicator_en,noteen,city`;
  //   };

  //   if (cityNames !== undefined) {
  //     const queries = cityNames.map((city) => createQuery(city));

  //     const retrievedInfo = Promise.all(
  //       queries.map((query) =>
  //         getData("resource-data-test", query).then((res) => res.records)
  //       )
  //     );

  //     const setSubs = async () => {
  //       setResources(await retrievedInfo);
  //     };

  //     setSubs();
  //   }
  // }, [cityNames]);

  //for controlling open/close manually
  // const handleExpand = (e) => {
  //   let i = e.target.id;
  //   let expanded = expand[i].state;
  //   const newStates = [...expand];
  //   expand[i].state = !expanded;
  //   setExpand(newStates);
  // };

  return (
    <>
      <Decoration />
      <BasicContainer width="md">
        {cityData !== undefined ? (
          <>
            <Grid mb={2} item>
              <Typography align="center" variant="h1">
                {t("suggestedCitiesHeading")}
              </Typography>
            </Grid>
            {cityData.map((city, i) => (
              <Grid
                container
                direction="column"
                sx={{ minWidth: "100%" }}
                key={i}
              >
                <Grid
                  key={i}
                  mt={6}
                  xs={12}
                  className="photoButtonContainer"
                  item
                >
                  <PhotoButton
                    city={city.city_name}
                    alt={city.main_img_alt}
                    src={city.main_img}
                    province={city.province}
                    factoid={city.population}
                  >
                    {city.city_name}
                  </PhotoButton>
                </Grid>
                <Grid mt={1} item xs={12}>
                  <Accordion
                    sx={{
                      width: "100%",
                      borderRadius: "35px",
                      "&.Mui-expanded": {
                        background: "#FBD166",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon fontSize="large" />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography variant="h3">{t("facts")}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="accordianContainer">
                        <Typography variant="h4">
                          Here are some of the highest scoring measurements in
                          this city based on what was important to you. (Scores
                          are calculated per capita when applicable.)
                        </Typography>
                      </div>
                      {resources &&
                        resources[i].map((resource, i) => (
                          <Grid item sx={{ width: "100%" }} flexGrow="5">
                            <div key={i} className="accordianContainer">
                              <FactCard>
                                <Typography
                                  variant="h5"
                                  color="#000"
                                  align="center"
                                >
                                  {
                                    priorities.find(
                                      (priority) =>
                                        priority.name === resource.JSONNames
                                    ).measurement
                                  }
                                </Typography>
                                <Typography
                                  mt={2}
                                  variant="h2"
                                  align="center"
                                  color="#F2695D"
                                >
                                  {resource.measureableValue === "dollar value"
                                    ? `$${resource.Value}`
                                    : resource.Value}
                                </Typography>
                              </FactCard>
                            </div>
                          </Grid>
                        ))}
                      <div className="accordianContainer">
                        <Link to={`/about/${city.city_name}`}>
                          <Grid mt={1} item flexGrow="1">
                            <Button
                              variant="contained"
                              size="large"
                              fullWidth={true}
                            >
                              <Typography variant="h5">{t("more")}</Typography>
                            </Button>
                          </Grid>
                        </Link>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </Grid>
            ))}
          </>
        ) : (
          <Loading />
        )}
      </BasicContainer>
    </>
  );
};

export default SuggestedCities;
