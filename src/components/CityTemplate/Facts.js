import React, { useState, useEffect, useCallback } from "react";
import _ from "lodash";

import { useTranslation } from "react-i18next";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import getData from "../../helpers/odsClientV2.js";
import Search from "./Search";
import FactCard from "../FactCard";
import Loading from "../../pages/Loading.js";

const groupedArray = async (array) => {
  let grouped = _.groupBy(array, (item) => item.record.fields.indicator_en);
  return grouped;
};

const groupedArrayNames = async (array) => {
  let names = Object.keys(
    _.groupBy(array, (item) => item.record.fields.indicator_en)
  );
  return names;
};

// const subGroup = (array) => {
//   let grouped = _.groupBy(array, (item) => item.record.fields.edited_title);
//   return grouped;
// };

// const subGroupNames = (array) => {
//   let names = Object.keys(
//     _.groupBy(array, (item) => item.record.fields.edited_title)
//   );
//   return names;
// };

const Facts = ({ cityname, currentLangCode }) => {
  const { t } = useTranslation();

  const [offset, setOffset] = useState(0);
  const [resources, setResources] = useState([]);
  const [subResources, setSubResources] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchStringQuery, setSearchStringQuery] = useState("");

  const getResources = useCallback(() => {
    console.log("data api triggered");
    const query = `/records?select=city,comment,value,measureable_value,url,measurement_en,noteen,indicator_en,suppname&refine=city:${cityname}&refine=measureable_value:'dollar value'&limit=100&offset=${offset}${
      searchStringQuery.length > 0 ? "&where='" + searchStringQuery + "'" : ""
    }`;
    let retrievedInfo = getData("refugee-data", query).then(
      (res) => res.records
    );

    const setRes = async () => {
      let newResources = await retrievedInfo;
      console.log(newResources);
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
    console.log("values subcategory effect triggered");
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

  return (
    <>
      {(resources.length === 0 ||
        categories.length === 0 ||
        subResources.length === 0) && <Loading />}
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
              <Typography variant="h3">Facts</Typography>
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
                        square={true}
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
                          {subResources[category].map((resource, index) => (
                            <div
                              key={`subresource-${index}`}
                              className="accordianContainer"
                            >
                              <Grid container spacing={2} direction="column">
                                <Grid item>
                                  <FactCard>
                                    <Typography
                                      sx={{ wordBreak: "break-all" }}
                                      variant="h5"
                                      align="center"
                                    >
                                      {resource.record.fields.measurement_en}
                                    </Typography>
                                    {(resource.record.fields.comment ||
                                      resource.record.fields.noteen) && (
                                      <Typography
                                        m={1}
                                        variant="body1"
                                        align="center"
                                        sx={{ wordBreak: "break-all" }}
                                      >
                                        {resource.record.fields.comment &&
                                        resource.record.fields.noteen
                                          ? `(${resource.record.fields.comment}, ${resource.record.fields.noteen})`
                                          : `(${
                                              resource.record.fields.comment ||
                                              resource.record.fields.noteen
                                            })`}
                                      </Typography>
                                    )}
                                    <Typography
                                      m={2}
                                      variant="h2"
                                      align="center"
                                      color="#F2695D"
                                    >
                                      {resource.record.fields
                                        .measureable_value === "dollar value"
                                        ? `$${resource.record.fields.value.toLocaleString()}`
                                        : resource.record.fields.value.toLocaleString()}
                                    </Typography>
                                    <Typography
                                      variant="body2"
                                      align="center"
                                      sx={{ wordBreak: "break-word" }}
                                    >
                                      <a href={resource.record.fields.url}>
                                        (Where this number came from and more
                                        information)
                                      </a>
                                    </Typography>
                                  </FactCard>
                                </Grid>
                              </Grid>
                            </div>
                          ))}
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

export default Facts;
