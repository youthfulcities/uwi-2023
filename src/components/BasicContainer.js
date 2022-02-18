import React from "react";
import { Container, Grid } from "@mui/material";
import Back from "./Back";
import Socials from "./Socials";

const BasicContainer = ({ children, width }) => {
  return (
    <>
      <Container maxWidth={width === undefined ? "xs" : width}>
        <Grid
          sx={{ minHeight: "90vh", minWidth: "100%" }}
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
        >
          <Grid
            sx={{ minHeight: "80vh", minWidth: "100%" }}
            container
            item
            direction="column"
            justifyContent="center"
            alignItems="center"
            pt="14vh"
            pb="10vh"
            spacing={0}
          >
            {children}
          </Grid>
          <Grid item pb={3} sx={{ maxHeight: "10vh" }}>
            <Socials />
          </Grid>
        </Grid>
        {document.location.pathname !== "/" && <Back />}
      </Container>
    </>
  );
};

export default BasicContainer;
