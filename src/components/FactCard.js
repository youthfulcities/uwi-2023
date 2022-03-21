import React from "react";
import { Card, Typography, Grid } from "@mui/material";

const FactCard = ({ children }) => {
  return (
    <Card sx={{ minHeight: 100 }}>
      <Grid
        container
        sx={{ minHeight: 100 }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h2" align="center" color="#F2695D">
            {children}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default FactCard;
