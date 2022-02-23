import React from "react";
import { Card, Typography, Grid } from "@mui/material";

const ResourceCard = ({ children }) => {
  return (
    <Card sx={{ minHeight: 100, padding: "24px" }}>
      <Grid
        container
        sx={{ minHeight: 100 }}
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h4">Resource name</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ResourceCard;
