import React from "react";
import { Grid } from "@mui/material";

import Back from "../components/Back";

const Map = () => {
  return (
    <Grid sx={{ minHeight: "88vh", minWidth: "100%" }} container>
      <Grid item sx={{ minHeight: "100%", minWidth: "100%" }}>
        <iframe
          title="Resource map"
          src="https://www.google.com/maps/d/embed?mid=13OIut-UoxG55ILUmj4Y7vpMZfJV0zTi_&ehbc=2E312F"
          width="100%"
          height="100%"
        ></iframe>
      </Grid>
      <Back />
    </Grid>
  );
};

export default Map;
