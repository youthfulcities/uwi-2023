import { Card, CardMedia, Container, Grid, Typography } from "@mui/material";
import _ from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Back from "../components/Back";
import BookNow from "../components/BookNow";
import ChangeLang from "../components/ChangeLang";
import CityInfo from "../components/CityTemplate/CityInfo";
import Facts from "../components/CityTemplate/Facts";
import Filter from "../components/CityTemplate/Filter";
import PhotoHeader from "../components/CityTemplate/PhotoHeader";
import Search from "../components/CityTemplate/Search";
import Feedback from "../components/Feedback";
import Socials from "../components/Socials";
import cities from "../data/cities.json";
import getData from "../helpers/odsClientV2.js";
import Loading from "../pages/Loading";

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

const CityTemplate = ({
  languages,
  setCurrentLangCode,
  currentLangCode,
  textSize,
  setTextSize,
}) => {
  const { t } = useTranslation();
  const { cityname } = useParams();

  const getCityData = () => {
    return cities.find((e) => e.city_name === cityname);
  };

  const [city] = useState(getCityData());
  const [searchStringQuery, setSearchStringQuery] = useState("");
  const [offset, setOffset] = useState(0);
  const [resources, setResources] = useState([]);
  const [subResources, setSubResources] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const colours = [
    { background: "#1e316d", text: "#fff" },
    { background: "#253D88", text: "#fff" },
    { background: "#5164a0", text: "#fff" },
    { background: "#cde4af", text: "#000" },
    { background: "#B8D98D", text: "#000" },
    { background: "#FBD166", text: "#000" },
    { background: "#fcdf94", text: "#000" },
    { background: "#F2695D", text: "#000" },
    { background: "#f5877d", text: "#000" },
    { background: "#F6D9D7", text: "#000" },
    { background: "#fae8e7", text: "#000" },
  ];

  const getResources = useCallback(() => {
    console.log("data api triggered");
    const query = `/records?select=city,category_for_app,edited_title,edited_title_fa,category_for_app_fa,topic_en,sheet_title,comment,value,measureable_value,url,measurement_en,noteen,indicator_en,suppname&refine=city:${cityname}&limit=100&offset=${offset}${
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
      groupedArrayNames(resources).then((res) => {
        setCategories(res);
        res.length !== 0 && setFilteredCategories([res[0]]);
      });
    };
    createSubCategories();
  }, [resources]);

  useEffect(() => {
    setOffset(0);
    setResources([]);
  }, [searchStringQuery]);

  return (
    <>
      {city !== undefined ? (
        <>
          <PhotoHeader src={city.main_img} alt={city.main_img_alt}>
            {cityname}
          </PhotoHeader>
          <Container maxWidth="lg">
            <Grid
              sx={{ minHeight: "30vh", height: "100%" }}
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              pt={0}
              pb={10}
              spacing={0}
            >
              <Grid
                container
                direction="row"
                spacing={2}
                justifyContent="space-between"
              >
                <Grid item xs={12} md={6} lg={4}>
                  <CityInfo
                    description={
                      city.description_fa !== undefined &&
                      currentLangCode === "fa"
                        ? city.description_fa
                        : city.description
                    }
                    src={city.main_img}
                    alt={city.main_img_alt}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={8}
                  container
                  direction="column"
                  flexWrap="nowrap"
                  alignItems="center"
                  spacing={2}
                  mt={1}
                >
                  <Grid
                    item
                    sx={{ minHeight: "300px", height: "100%", width: "100%" }}
                    xs={12}
                  >
                    <Card
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <CardMedia
                        sx={{ zIndex: "1", position: "absolute" }}
                        component="img"
                        height="100%"
                        src={city.main_img}
                        alt={city.main_img_alt}
                      />
                    </Card>
                  </Grid>
                  <Grid item container alignItems="stretch" spacing={2}>
                    <Grid item lg={8} xs={12}>
                      <BookNow />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                      <Feedback />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item mb={1} mt={3} width="100%">
                <Search setSearchStringQuery={setSearchStringQuery} />
              </Grid>
              {resources.length > 0 ? (
                <>
                  <Grid item mb={3} width="100%">
                    <Filter
                      categories={categories}
                      filteredCategories={filteredCategories}
                      setFilteredCategories={setFilteredCategories}
                      colours={colours}
                      subResources={subResources}
                      currentLangCode={currentLangCode}
                    />
                  </Grid>
                  <Facts
                    cityname={cityname}
                    currentLangCode={currentLangCode}
                    searchStringQuery={searchStringQuery}
                    colours={colours}
                    subResources={subResources}
                    resources={resources}
                    categories={categories}
                    filteredCategories={filteredCategories}
                  />
                </>
              ) : (
                <Grid item className="accordianContainer">
                  <Typography variant="body1">{t("noneFound")}</Typography>
                </Grid>
              )}
            </Grid>
            <Back />
            <Grid item mb={2} sx={{ maxHeight: "10vh" }}>
              <Socials />
            </Grid>
            <ChangeLang
              languages={languages}
              setCurrentLangCode={setCurrentLangCode}
              currentLangCode={currentLangCode}
              textSize={textSize}
              setTextSize={setTextSize}
            />
          </Container>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default CityTemplate;
