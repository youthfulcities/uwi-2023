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

import BasicContainer from "../components/BasicContainer";
import PhotoButton from "../components/PhotoButton";
import Decoration from "../components/Decoration";
import FactCard from "../components/FactCard";

import calcCity from "../cityCalc/calcCity";

const additionalInfo = [
  {
    name: "gasbuddy_gas",
    measurement: "Cost of gas",
    lowerIsBetter: true,
    demographic: "all",
  },
  {
    name: "planhub_internet",
    measurement: "Cost of internet plan",
    lowerIsBetter: true,
    demographic: "all",
  },
  {
    name: "min_wage",
    measurement: "Minimum wage",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "planhub_phone_basic_plan",
    measurement: "Cost of basic phone plan",
    lowerIsBetter: true,
    demographic: "all",
  },
  {
    name: "planhub_phone_avg_plan",
    measurement: "Cost of premium phone plan",
    lowerIsBetter: true,
    demographic: "all",
  },
  {
    name: "statscan_tuition",
    measurement: "Cost of tuition",
    lowerIsBetter: true,
    demographic: ["13-18", "19-35"],
  },
  {
    name: "rent_one_br",
    measurement: "Cost of 1 bedroom appartment",
    lowerIsBetter: true,
    demographic: {
      minNumberOfPeople: 1,
      maxNumberOfPeople: 2,
    },
  },
  {
    name: "rent_two_br",
    measurement: "Cost of 2 bedroom appartment",
    lowerIsBetter: true,
    demographic: {
      minNumberOfPeople: 3,
      maxNumberOfPeople: 4,
    },
  },
  {
    name: "rent_three_br",
    measurement: "Cost of 3 bedroom appartment",
    lowerIsBetter: true,
    demographic: {
      minNumberOfPeople: 5,
      maxNumberOfPeople: 5,
    },
  },
  {
    name: "rent_four_br",
    measurement: "Cost of 4 bedroom appartment",
    lowerIsBetter: true,
    demographic: {
      minNumberOfPeople: 6,
      maxNumberOfPeople: 100,
    },
  },
  {
    name: "",
    measurement: "Number of computer classes for basic skills",
    lowerIsBetter: false,
    demographic: ["36-65"],
  },
  {
    name: "",
    measurement: "Number of briding programs for professionals",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "",
    measurement: "Number of paid employment training and placement programs",
    lowerIsBetter: false,
    demographic: ["19-35"],
  },
  {
    name: "",
    measurement: "Number of public colleges",
    lowerIsBetter: false,
    demographic: ["19-35"],
  },
  {
    name: "",
    measurement: "Number of public universities",
    lowerIsBetter: false,
    demographic: ["19-35"],
  },
  {
    name: "",
    measurement: "Number of public schools",
    lowerIsBetter: false,
    demographic: ["0-12", "13-18"],
  },
  {
    name: "",
    measurement: "Number of Caltholic schools",
    lowerIsBetter: false,
    demographic: ["0-12", "13-18"],
  },
  {
    name: "",
    measurement: "Number of religious/ethnic schools",
    lowerIsBetter: false,
    demographic: ["0-12", "13-18"],
  },
  {
    name: "",
    measurement: "Number of parenting and new mother programs",
    lowerIsBetter: false,
    demographic: ["0-12"],
  },
  {
    name: "",
    measurement: "Number of recreation programs for seniors",
    lowerIsBetter: false,
    demographic: ["65+"],
  },
  {
    name: "",
    measurement: "Number of recreation programs for kids and teenagers",
    lowerIsBetter: false,
    demographic: ["0-12", "13-18"],
  },
  {
    name: "",
    measurement: "Number of community organizations offering English courses",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "",
    measurement: "Number of literacy programs for seniors",
    lowerIsBetter: false,
    demographic: ["65+"],
  },
  {
    name: "",
    measurement: "Number of family shelters",
    lowerIsBetter: false,
    demographic: {
      minNumberOfPeople: 3,
      maxNumberOfPeople: 100,
    },
  },
  {
    name: "",
    measurement: "Number of youth shelters",
    lowerIsBetter: false,
    demographic: ["13-18"],
  },
  {
    name: "",
    measurement: "Number of food banks and Islamic foodbanks",
    lowerIsBetter: false,
    demographic: "all",
  },
  {
    name: "",
    measurement: "Number of furniture banks",
    lowerIsBetter: false,
    demographic: "all",
  },
  {
    name: "",
    measurement: "Number of free/subsidized clothing resources",
    lowerIsBetter: false,
    demographic: "all",
  },
  {
    name: "",
    measurement: "Cost of public daycare",
    lowerIsBetter: true,
    demographic: ["0-12"],
  },
  {
    name: "",
    measurement: "Cost of private daycare",
    lowerIsBetter: true,
    demographic: ["0-12"],
  },
  {
    name: "",
    measurement: "Number of parent relief programs",
    lowerIsBetter: false,
    demographic: ["0-12"],
  },
  {
    name: "",
    measurement: "Number of organizations offering financial resources",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "",
    measurement: "Minimum deposit required to apply for secure credit card",
    lowerIsBetter: true,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "",
    measurement: "Number of banks that provide unsecure credit cards",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "",
    measurement: "Number of employment services",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "",
    measurement: "Number of services to file taxes",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "",
    measurement: "Average temperature in winter",
    lowerIsBetter: false,
    demographic: ["65+"],
  },
  {
    name: "",
    measurement: "Number of sunny days",
    lowerIsBetter: false,
    demographic: ["65+"],
  },
  {
    name: "",
    measurement: "Number of snowy days",
    lowerIsBetter: true,
    demographic: ["65+"],
  },
  {
    name: "",
    measurement: "Number of rainy days",
    lowerIsBetter: true,
    demographic: ["65+"],
  },
  {
    name: "",
    measurement: "Cost of a business liscence",
    lowerIsBetter: true,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "",
    measurement: "Cost of municipal property tax",
    lowerIsBetter: true,
    demographic: ["36-65"],
  },
  {
    name: "",
    measurement: "Number of legal aid services for newcomers",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65", "65+"],
  },
  {
    name: "",
    measurement: "Number of youth employment centres",
    lowerIsBetter: false,
    demographic: ["19-35"],
  },
  {
    name: "",
    measurement:
      "Number of doctors taking new patients who speak, Pashto, Dari, Urdu, or Arabic",
    lowerIsBetter: false,
    demographic: "all",
  },
  {
    name: "",
    measurement: "Number of libraries",
    lowerIsBetter: false,
    demographic: "all",
  },
  {
    name: "",
    measurement:
      "Number of community recreation centres providing sports programs/facilities",
    lowerIsBetter: false,
    demographic: ["13-18", "19-35"],
  },
  {
    name: "",
    measurement: "Number of mosques/islamic centres",
    lowerIsBetter: false,
    demographic: ["65+"],
  },
  {
    name: "",
    measurement: "Number of Afghan community",
    lowerIsBetter: false,
    demographic: ["65+"],
  },
  {
    name: "",
    measurement: "Number of stores that sell ethnic/cultural food",
    lowerIsBetter: false,
    demographic: "all",
  },
  {
    name: "",
    measurement: "Number of restaurants that offer Afgan cusines",
    lowerIsBetter: false,
    demographic: "all",
  },
  {
    name: "",
    measurement: "Cost of a senior's pass",
    lowerIsBetter: false,
    demographic: ["65+"],
  },
];

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

  const [cityNames, setCityNames] = useState(topThreeCities);
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
