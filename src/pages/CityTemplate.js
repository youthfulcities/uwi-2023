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

import PhotoHeader from "../components/PhotoHeader";
import Back from "../components/Back";
import Socials from "../components/Socials";
import CityInfo from "../components/CityInfo";
import Search from "../components/Search";

const CityTemplate = () => {
  let { cityname } = useParams();
  const [city, setCity] = useState(undefined);
  const [resources, setResources] = useState(undefined);
  const [subResources, setSubResources] = useState(undefined);
  const [subResourceQuery, setSubResourceQuery] = useState("");
  const [searchString, setSearchString] = useState("");
  const [searchStringQuery, setSearchStringQuery] = useState("");
  const [test, setTest] = useState(0);

  const cityQuery = `/records?refine=city_name:${cityname}`;
  // let resourceQuery = `/records?limit=10`;
  let resourceQuery = `/records?limit=10&select=indicator_en&group_by=indicator_en`;

  const createSubResourceQuery = (indicator_en) => {
    return `/records?limit=10&where=indicator_en="${indicator_en}"&group_by=measurement_en`;
  };

  useEffect(() => {
    const retrievedInfo = getData("cities", cityQuery).then(
      (res) => res.records[0]
    );

    const setCities = async () => {
      setCity(await retrievedInfo);
    };

    setCities();
  }, [cityQuery]);

  useEffect(() => {
    const retrievedInfo = getData("tamarack-index", resourceQuery).then(
      (res) => res.records
    );

    const setCities = async () => {
      console.log(await retrievedInfo);
      setResources(await retrievedInfo);
    };

    setCities();
  }, [resourceQuery]);

  useEffect(() => {
    const sub = resources.map((resource) =>
      createSubResourceQuery(resource.record.fields.indicator_en)
    );

    const retrievedInfo = Promise.all(
      sub.map((query) =>
        getData("tamarack-index", query).then((res) => res.records)
      )
    );

    const setSubs = async () => {
      console.log(await retrievedInfo);
      setSubResources(await retrievedInfo);
    };

    setSubs();
  }, [resources]);

  //for removing unnescessary words from search
  const cleanSearch = (s) => {
    var words = ["of", "the", "in", "on", "at", "to", "a", "is", "for"];
    var re = new RegExp("\\b(" + words.join("|") + ")\\b", "g");
    return (s || "").replace(re, "").replace(/[ ]{2,}/, " ");
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
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography variant="h3">Resources</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Search
                      setSearchString={setSearchString}
                      searchString={searchString}
                    />
                    <div>
                      {resources !== undefined &&
                        resources.map((resource, i) => {
                          return (
                            <>
                              <Accordion
                                square={
                                  i === resources.length - 1 ? false : true
                                }
                                disableGutters={true}
                              >
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls={`panel-resources-${i}a-content`}
                                  id={`panel-resources-${i}a-header`}
                                >
                                  <Typography variant="h5">
                                    {resource.record.fields.indicator_en}
                                  </Typography>
                                </AccordionSummary>
                                <AccordionDetails>{}</AccordionDetails>
                              </Accordion>
                            </>
                          );
                        })}
                    </div>
                  </AccordionDetails>
                </Accordion>
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
