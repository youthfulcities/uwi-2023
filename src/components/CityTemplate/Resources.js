import React, { useState, useEffect, useCallback } from "react";
// import { Link } from "react-router-dom";
import _ from "lodash";

import { useTranslation } from "react-i18next";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  // Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import getData from "../../helpers/odsClientV2.js";
import Search from "./Search";
// import FactCard from "../FactCard";
import ResourceCard from "./ResourceCard";
import Loading from "../../pages/Loading.js";

const groupedArray = async (array) => {
  let grouped = _.groupBy(array, (item) => item.record.fields.category_for_app);
  return grouped;
};

const groupedArrayNames = async (array) => {
  let names = Object.keys(
    _.groupBy(array, (item) => item.record.fields.category_for_app)
  );
  return names;
};

const subGroup = (array) => {
  let grouped = _.groupBy(array, (item) => item.record.fields.edited_title);
  return grouped;
};

const subGroupNames = (array) => {
  let names = Object.keys(
    _.groupBy(array, (item) => item.record.fields.edited_title)
  );
  return names;
};

const Resources = ({ cityname, currentLangCode }) => {
  const { t } = useTranslation();

  const [offset, setOffset] = useState(0);
  const [resources, setResources] = useState([]);
  const [subResources, setSubResources] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchStringQuery, setSearchStringQuery] = useState("");

  const getResources = useCallback(() => {
    console.log("resource api triggered");
    const query = `/records?refine=city:${cityname}&select=category_for_app,edited_title,name,url,phone,address,description,email&limit=100&offset=${offset}${
      searchStringQuery.length > 0 ? "&where='" + searchStringQuery + "'" : ""
    }`;
    let retrievedInfo = getData("resource-data", query).then(
      (res) => res.records
    );

    const setRes = async () => {
      let newResources = await retrievedInfo;
      setResources((prev) => [...prev, ...newResources]);
      if (newResources.length === 100) {
        setOffset((prev) => prev + 100);
      }
    };
    setRes();
  }, [cityname, offset, searchStringQuery]);

  useEffect(() => {
    getResources();
  }, [getResources]);

  useEffect(() => {
    console.log("subcategory effect triggered");
    const createSubCategories = () => {
      groupedArray(resources).then((res) => setSubResources(res));
      groupedArrayNames(resources).then((res) => setCategories(res));
    };
    createSubCategories();
  }, [resources]);

  useEffect(() => {
    setOffset(0);
    setResources([]);
  }, [searchStringQuery]);

  //determine which array of resources is the last one with actual entries so that we can format the rounded corners properly
  const getLastIndex = () => {
    const lastIndex = categories.length - 1;
    return lastIndex;
  };

  const checkIfSquare = (i) => {
    if (i === getLastIndex()) {
      return false;
    }
    return true;
  };

  return (
    <>
      {(resources.length === 0 ||
        subResources.length === 0 ||
        categories.length === 0) && <Loading />}
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
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="nowrap"
          >
            <Grid item>
              <Typography variant="h3">{t("resources")}</Typography>
            </Grid>
            <Grid item mx={2}>
              {/* <Link to={`/map/${cityname}`}>
                <Button
                  sx={{ minWidth: 0 }}
                  color="primary"
                  variant="contained"
                  size="large"
                >
                  <Typography variant="h5">View On Map</Typography>
                </Button>
              </Link> */}
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Search setSearchStringQuery={setSearchStringQuery} />
          {categories && categories.length === 0 ? (
            <div className="accordianContainer">
              <Typography variant="body1">{t("noneFound")}</Typography>
            </div>
          ) : (
            <div>
              {categories !== undefined &&
                categories.map((category, i) => {
                  return (
                    <div key={i}>
                      <Accordion
                        sx={{
                          background: "#E8E8E8",
                          "&.Mui-expanded": {
                            background: "#B8D98D",
                          },
                          "&:first-of-type": {
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                          },
                        }}
                        square={checkIfSquare(i)}
                        disableGutters={true}
                        key={`panel-resources-${i}a`}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon fontSize="large" />}
                          aria-controls={`panel-resources-${i}a-content`}
                          id={`panel-resources-${i}a-header`}
                        >
                          <Typography variant="h5">{category}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {subGroupNames(subResources[category]).map(
                            (name, index) => (
                              <Accordion
                                sx={{
                                  "&:first-of-type": {
                                    borderTopLeftRadius: 0,
                                    borderTopRightRadius: 0,
                                  },
                                  background: "#DCDCDC",
                                  "&.Mui-expanded": {
                                    background: "#F2695D",
                                  },
                                }}
                                square={checkIfSquare(i)}
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
                                  <Typography variant="h5">{name}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  {subGroup(subResources[category])[name].map(
                                    (subResource, index) => (
                                      <div
                                        key={`subresource-${index}`}
                                        className="accordianContainer"
                                      >
                                        <Grid
                                          container
                                          spacing={2}
                                          direction="column"
                                        >
                                          <Grid item>
                                            <ResourceCard
                                              description={
                                                subResource.record.fields
                                                  .description
                                              }
                                              phone={
                                                subResource.record.fields.phone
                                              }
                                              address={
                                                subResource.record.fields
                                                  .address
                                              }
                                              name={
                                                subResource.record.fields.name
                                              }
                                              email={
                                                subResource.record.fields.email
                                              }
                                              url={
                                                subResource.record.fields.url
                                              }
                                              currentLangCode={currentLangCode}
                                            />
                                          </Grid>
                                        </Grid>
                                      </div>
                                    )
                                  )}
                                </AccordionDetails>
                              </Accordion>
                            )
                          )}
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  );
                })}
            </div>
          )}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Resources;
