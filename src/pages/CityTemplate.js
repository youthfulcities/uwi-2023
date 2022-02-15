import React, { useState, useEffect } from "react";
import Decoration from "../components/Decoration";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import getData from "../helpers/odsClientV2.js";

import PhotoHeader from "../components/CityTemplate/PhotoHeader";
import Back from "../components/Back";
import Socials from "../components/Socials";
import CityInfo from "../components/CityTemplate/CityInfo";
import Search from "../components/CityTemplate/Search";
import FactCard from "../components/CityTemplate/FactCard";
import Stories from "../components/CityTemplate/Stories";

const CityTemplate = () => {
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
              py="14vh"
              spacing={0}
            >
              <div>
                <CityInfo
                  src={city.record.fields.main_img}
                  alt={city.record.fields.main_img_alt}
                />
                <Accordion
                  sx={{
                    "&.Mui-expanded": {
                      background: "#FBD166",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon fontSize="large" />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography variant="h3">Resources</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Search
                      setSearchString={setSearchString}
                      searchString={searchString}
                      createStringQuery={createStringQuery}
                      setSearchStringQuery={setSearchStringQuery}
                    />
                    {subResources && subResources.flat().length === 1 ? (
                      <div className="accordianContainer">
                        <Typography variant="p">
                          No results found. Try searching something else.
                        </Typography>
                      </div>
                    ) : (
                      <div>
                        {resources !== undefined &&
                          resources.map((resource, i) => {
                            return (
                              <>
                                {subResources &&
                                subResources[i] !== undefined &&
                                subResources[i].length > 0 ? (
                                  <Accordion
                                    sx={{
                                      "&:last-of-type": {
                                        borderRadius: 0,
                                      },
                                      background: "#E8E8E8",
                                      "&.Mui-expanded": {
                                        background: "#4F66AF",
                                        color: "#fff",
                                      },
                                    }}
                                    square={
                                      i === resources.length - 1 ? false : true
                                    }
                                    disableGutters={true}
                                    key={`panel-resources-${i}a`}
                                  >
                                    <AccordionSummary
                                      expandIcon={
                                        <ExpandMoreIcon fontSize="large" />
                                      }
                                      aria-controls={`panel-resources-${i}a-content`}
                                      id={`panel-resources-${i}a-header`}
                                    >
                                      <Typography variant="h5">
                                        {resource.record.fields.indicator_en}
                                      </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                      {subResources &&
                                        subResources[i].map(
                                          (subResource, index) => (
                                            <Accordion
                                              sx={{
                                                background: "#DCDCDC",
                                                "&.Mui-expanded": {
                                                  background: "#B8D98D",
                                                },
                                              }}
                                              square={
                                                index === resources.length - 1
                                                  ? false
                                                  : true
                                              }
                                              disableGutters={true}
                                              key={`panel-resources-${index}b`}
                                            >
                                              <AccordionSummary
                                                sx={{
                                                  marginLeft: 5,
                                                }}
                                                expandIcon={
                                                  <ExpandMoreIcon fontSize="large" />
                                                }
                                                aria-controls={`panel-resources-${index}b-content`}
                                                id={`panel-resources-${index}b-header`}
                                              >
                                                <Typography variant="h5">
                                                  {
                                                    subResource.record.fields
                                                      .measurement_en
                                                  }
                                                </Typography>
                                              </AccordionSummary>
                                              <AccordionDetails>
                                                {
                                                  <div className="accordianContainer">
                                                    <FactCard>
                                                      {
                                                        subResource.record
                                                          .fields.value
                                                      }
                                                    </FactCard>
                                                  </div>
                                                }
                                              </AccordionDetails>
                                            </Accordion>
                                          )
                                        )}
                                    </AccordionDetails>
                                  </Accordion>
                                ) : null}
                              </>
                            );
                          })}
                      </div>
                    )}
                  </AccordionDetails>
                </Accordion>
                <Stories />
              </div>
            </Grid>
            <Back />
            <Socials />
          </Container>
          <Decoration />
        </>
      ) : (
        <p>"Loading..."</p>
      )}
    </>
  );
};

export default CityTemplate;
