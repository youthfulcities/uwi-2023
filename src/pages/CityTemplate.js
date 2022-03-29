import React, { useState } from "react";

import { useParams } from "react-router-dom";
import { Container, Grid, Card, CardMedia } from "@mui/material";

import cities from "../data/cities.json";

import BookNow from "../components/BookNow";
import PhotoHeader from "../components/CityTemplate/PhotoHeader";
import Back from "../components/Back";
import Socials from "../components/Socials";
import CityInfo from "../components/CityTemplate/CityInfo";
import Facts from "../components/CityTemplate/Facts";
import Search from "../components/CityTemplate/Search";
// import Resources from "../components/CityTemplate/Resources";
// import getData from "../helpers/odsClientV2.js";
import ChangeLang from "../components/ChangeLang";
import Loading from "../pages/Loading";

const CityTemplate = ({
  languages,
  setCurrentLangCode,
  currentLangCode,
  textSize,
  setTextSize,
}) => {
  const { cityname } = useParams();
  //for getting city data locally
  const getCityData = () => {
    return cities.find((e) => e.city_name === cityname);
  };

  const [city] = useState(getCityData());
  const [searchStringQuery, setSearchStringQuery] = useState("");

  return (
    <>
      {city !== undefined ? (
        <>
          <PhotoHeader src={city.main_img} alt={city.main_img_alt}>
            {cityname}
          </PhotoHeader>
          <Container maxWidth="lg">
            <Grid
              sx={{ minHeight: "30vh" }}
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              pt={0}
              pb={10}
              spacing={0}
            >
              <Grid item my={5}>
                <BookNow />
              </Grid>
              <Grid
                container
                direction="row"
                spacing={2}
                justifyContent="space-between"
              >
                <Grid item xs={12} md={6} lg={4}>
                  <CityInfo
                    description={city.description}
                    src={city.main_img}
                    alt={city.main_img_alt}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={8}>
                  <Card
                    sx={{
                      marginTop: "20px",
                      position: "relative",
                      height: "300px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="100%"
                      src={city.main_img}
                      alt={city.main_img_alt}
                    />
                  </Card>
                  <Search setSearchStringQuery={setSearchStringQuery} />
                </Grid>
                <Grid item>
                  <Facts
                    cityname={cityname}
                    currentLangCode={currentLangCode}
                    searchStringQuery={searchStringQuery}
                  />
                  {/* <Resources
                  cityname={cityname}
                  currentLangCode={currentLangCode}
                /> */}
                </Grid>
              </Grid>
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
