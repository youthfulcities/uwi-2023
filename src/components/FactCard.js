import React from "react";
import { Card, Grid } from "@mui/material";

const FactCard = ({ children, colour }) => {
  return (
    <Card
      sx={{
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: colour.background,
        color: colour.text,
      }}
    >
      <Grid
        container
        direction="column"
        sx={{ height: "100%" }}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        p={3}
      >
        {children}
      </Grid>
    </Card>
  );
};

export default FactCard;
