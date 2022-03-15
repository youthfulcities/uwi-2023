import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import _ from "lodash";
import {
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import getData from "../helpers/odsClientV2";
import additionalInfo from "../cityCalc/additionalInfo";

import BasicContainer from "../components/BasicContainer";
import PhotoButton from "../components/PhotoButton";
import Decoration from "../components/Decoration";
import FactCard from "../components/FactCard";

import calcCity from "../cityCalc/calcCity";

const SuggestedCities = ({ form }) => {
  const { t } = useTranslation();

  const getDemographicMeasurements = () => {
    const { numberOfPeople, family } = form;
    let ages = family.map((familyMember) => familyMember.age);

    let ageMeasurements = additionalInfo.map((measurement) => {
      if (Array.isArray(measurement.demographic)) {
        if (_.intersection(measurement.demographic, ages).length > 0) {
          return measurement.name;
        }
      } else if (measurement.demographic === "all") {
        return measurement.name;
      } else if (
        typeof measurement.demographic === "object" &&
        numberOfPeople >= measurement.demographic.minNumberOfPeople &&
        numberOfPeople <= measurement.demographic.maxNumberOfPeople
      ) {
        return measurement.name;
      }
      return undefined;
    });
    return ageMeasurements.filter((e) => e !== undefined);
  };

  const measurements = getDemographicMeasurements();

  console.log(measurements);

  const topThreeCities = calcCity(measurements)
    .slice(0, 3)
    .map((e) => e.city);

  const [cityNames] = useState(topThreeCities);
  const [cityData, setCityData] = useState(undefined);
  const [resources, setResources] = useState(undefined);

  useEffect(() => {
    const createQuery = (city) => {
      return `/records?refine=city_name:${city}`;
    };

    if (cityNames !== undefined) {
      const queries = cityNames.map((city) => createQuery(city));

      const retrievedInfo = Promise.all(
        queries.map((query) =>
          getData("cities", query).then((res) => res.records[0])
        )
      );

      const addCities = async () => {
        setCityData(await retrievedInfo);
      };

      addCities();
    }
  }, [cityNames]);

  //get sub categories within resources
  useEffect(() => {
    const createQuery = (city) => {
      return `/records?refine=city:${city}&limit=3&select=avg(value) as value,measurement_en,indicator_en,noteen,city&group_by=measurement_en,indicator_en,noteen,city`;
    };

    if (cityNames !== undefined) {
      const queries = cityNames.map((city) => createQuery(city));

      const retrievedInfo = Promise.all(
        queries.map((query) =>
          getData("index-2020-full", query).then((res) => res.records)
        )
      );

      const setSubs = async () => {
        setResources(await retrievedInfo);
      };

      setSubs();
    }
  }, [cityNames]);

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
      <BasicContainer width="md">
        <Grid mb={2} item>
          <Typography align="center" variant="h1">
            {t("suggestedCitiesHeading")}
          </Typography>
        </Grid>
        {cityData ? (
          cityData.map((city, i) => (
            <>
              <Grid key={i} mt={6} className="photoButtonContainer" item>
                <PhotoButton
                  city={city.record.fields.city_name}
                  alt={city.record.fields.main_img_alt}
                  src={city.record.fields.main_img}
                  factoid={city.record.fields.population}
                >
                  {city.record.fields.city_name}
                </PhotoButton>
              </Grid>
              <Grid mt={1} item sx={{ width: "100%" }}>
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
                    {resources &&
                      resources[i].map((resource) => (
                        <Grid item sx={{ width: "100%" }} flexGrow="5">
                          <div className="accordianContainer">
                            <FactCard>
                              <Typography
                                variant="h5"
                                color="#000"
                                align="center"
                              >
                                {resource.record.fields.measurement_en}
                              </Typography>
                              {resource.record.fields.value}
                            </FactCard>
                          </div>
                        </Grid>
                      ))}
                    <div className="accordianContainer">
                      <Grid mt={1} item flexGrow="1">
                        <Link to={`/about/${city.record.fields.city_name}`}>
                          <Button
                            variant="contained"
                            size="large"
                            fullWidth={true}
                          >
                            <Typography variant="h5">{t("more")}</Typography>
                          </Button>
                        </Link>
                      </Grid>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </BasicContainer>
      <Decoration />
    </>
  );
};

export default SuggestedCities;
