import React from "react";
import { Container, Grid, Typography } from "@mui/material";

import PhotoButton from "../components/PhotoButton";

const ExploreAll = () => {
  return (
    <>
      <Container maxWidth="md">
        <Grid
          sx={{ minHeight: "90vh" }}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          pt="13vh"
          spacing={0}
        >
          <Grid item>
            <Typography variant="h1">Explore All Cities</Typography>
          </Grid>
          <Grid className="photoButtonContainer" item>
            <PhotoButton
              city="calgary"
              alt="Downtown Calgary"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Downtown_Calgary_2020-3.jpg/1200px-Downtown_Calgary_2020-3.jpg"
            >
              Calgary
            </PhotoButton>
          </Grid>
        </Grid>
      </Container>
      <div className="background"></div>
    </>
  );
};

export default ExploreAll;
