import React from "react";
import { Container, Grid } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item mt={1}>
            <a href="https://youthfulcities.com/">
              <img
                src={"./assets/images/yc-logo.png"}
                height="60vh"
                alt="Youthful Cities logo"
              />
            </a>
          </Grid>
          <Grid item mt={1}>
            <a href="https://www.therefugeecentre.org/">
              <img
                src={"./assets/images/trc-logo.png"}
                height="60vh"
                alt="The Refugee Centre / Le Centre de Réfugiés logo"
              />
            </a>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
