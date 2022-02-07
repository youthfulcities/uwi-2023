import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";

import PhotoButton from "../components/PhotoButton";
import Back from "../components/Back";
import getData from "../helpers/odsClientV2.js";

const ExploreAll = () => {
  const [recs, setRecs] = useState([]);
  const query = "/records?limit=10&offset=0";

  useEffect(() => {
    const retrievedCities = getData("cities", query).then((res) => res.records);

    const setCities = async () => {
      setRecs(await retrievedCities);
    };

    setCities();
  }, []);

  console.log(recs);

  return (
    <>
      <Container maxWidth="md">
        <Grid
          sx={{ minHeight: "90vh" }}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          py="14vh"
          spacing={0}
        >
          <Grid mb={2} item>
            <Typography align="center" variant="h1">
              Explore All Cities
            </Typography>
          </Grid>
          {recs.map((city) => (
            <Grid mt={2} className="photoButtonContainer" item>
              <PhotoButton
                city={city.record.fields.city_name}
                alt={city.record.fields.main_img_alt}
                src={city.record.fields.main_img}
              >
                {city.record.fields.city_name}
              </PhotoButton>
            </Grid>
          ))}
        </Grid>
        <Back />
      </Container>
      <div className="background"></div>
    </>
  );
};

export default ExploreAll;
