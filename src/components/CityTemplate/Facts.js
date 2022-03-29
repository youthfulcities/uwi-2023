import React, { useState, useEffect, useCallback } from "react";
import _ from "lodash";

import { useTranslation } from "react-i18next";
import { Typography, Grid } from "@mui/material";

import getData from "../../helpers/odsClientV2.js";
import Search from "./Search";
import FactCard from "../FactCard";
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

const Facts = ({ cityname, currentLangCode, searchStringQuery }) => {
  const { t } = useTranslation();

  const [offset, setOffset] = useState(0);
  const [resources, setResources] = useState([]);
  const [subResources, setSubResources] = useState([]);
  const [categories, setCategories] = useState([]);

  const colours = [
    { background: "#1e316d", text: "#fff" },
    { background: "#253D88", text: "#fff" },
    { background: "#5164a0", text: "#fff" },
    { background: "#FBD166", text: "#000" },
    { background: "#fcdf94", text: "#000" },
    { background: "#F2695D", text: "#000" },
    { background: "#f5877d", text: "#000" },
    { background: "#ddc3c2", text: "#000" },
    { background: "#F6D9D7", text: "#000" },
    { background: "#fae8e7", text: "#000" },
    { background: "#cde4af", text: "#000" },
    { background: "#B8D98D", text: "#000" },
    { background: "#93ae71", text: "#000" },
  ];

  const getResources = useCallback(() => {
    console.log("data api triggered");
    const query = `/records?select=city,category_for_app,edited_title,topic_en,sheet_title,comment,value,measureable_value,url,measurement_en,noteen,indicator_en,suppname&refine=city:${cityname}&limit=100&offset=${offset}${
      searchStringQuery.length > 0 ? "&where='" + searchStringQuery + "'" : ""
    }`;
    let retrievedInfo = getData("refugee-data", query).then(
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

  console.log(subResources);

  return (
    <>
      {(resources.length === 0 ||
        categories.length === 0 ||
        subResources.length === 0) && <Loading />}
      {categories && categories.length === 0 ? (
        <Grid item className="accordianContainer">
          <Typography variant="body1">{t("noneFound")}</Typography>
        </Grid>
      ) : (
        <>
          <Grid container direction="row" spacing={2} alignItems="stretch">
            {categories !== undefined &&
              categories.map((category, i) =>
                subResources[category].map((resource, index) => (
                  <Grid item lg={3} md={4} sm={6} xs={12} key={"card-" + index}>
                    <FactCard colour={colours[i]}>
                      {/* <Typography variant="h5">
                        {resource.record.fields.category_for_app || category}
                      </Typography> */}
                      <Typography
                        sx={{ wordBreak: "break-word" }}
                        variant="h5"
                        align="center"
                      >
                        {resource.record.fields.edited_title ||
                          resource.record.fields.measurement_en}
                      </Typography>
                      {(resource.record.fields.comment ||
                        resource.record.fields.noteen ||
                        resource.record.fields.measureable_value) && (
                        <Typography
                          m={1}
                          variant="body1"
                          align="center"
                          sx={{ wordBreak: "break-word" }}
                        >
                          {resource.record.fields.comment &&
                          resource.record.fields.noteen
                            ? `(${resource.record.fields.comment}, ${
                                resource.record.fields.noteen ||
                                resource.record.fields.measureable_value
                              })`
                            : `(${
                                resource.record.fields.comment ||
                                resource.record.fields.noteen ||
                                resource.record.fields.measureable_value
                              })`}
                        </Typography>
                      )}
                      <Typography
                        m={2}
                        variant="h2"
                        align="center"
                        color={colours[i].text}
                      >
                        {resource.record.fields.measureable_value ===
                        "dollar value"
                          ? `$${resource.record.fields.value.toLocaleString()}`
                          : resource.record.fields.value.toLocaleString()}
                      </Typography>

                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={
                          resource.record.fields.url ||
                          `https://pivothub.youthfulcities.com/explore/dataset/resource-data/table/?q=${
                            resource.record.fields.sheet_title ||
                            resource.record.fields.indicator_en
                          }`
                        }
                      >
                        <Typography
                          variant="body2"
                          align="center"
                          sx={{
                            wordBreak: "break-word",
                            textDecoration: "underline",
                          }}
                          color={colours[i].text}
                        >
                          (More information)
                        </Typography>
                      </a>
                    </FactCard>
                  </Grid>
                ))
              )}
          </Grid>
        </>
      )}
    </>
  );
};

export default Facts;
