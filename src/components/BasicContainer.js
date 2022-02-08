import React from "react";
import { Container, Grid } from "@mui/material";
import Back from "./Back.js";

const BasicContainer = ({ children, width }) => {
  return (
    <>
      <Container maxWidth={width === undefined ? "xs" : width}>
        {document.location.pathname !== "/" && <Back />}

        <Grid
          sx={{ minHeight: "90vh", minWidth: "100%" }}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          py="14vh"
          spacing={0}
        >
          {children}
        </Grid>
      </Container>
    </>
  );
};

export default BasicContainer;