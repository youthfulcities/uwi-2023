import React from "react";
import { Card, Grid } from "@mui/material";

const FactCard = ({ children }) => {
  return (
    <Card sx={{ minHeight: 100 }}>
      <Grid
        container
        sx={{ minHeight: 100 }}
        justifyContent="center"
        alignItems="center"
        p={3}
      >
        <Grid item>{children}</Grid>
      </Grid>
    </Card>
  );
};

export default FactCard;
