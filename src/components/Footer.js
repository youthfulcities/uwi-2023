import React from "react";
import { Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item mt={1}>
            <Grid
              container
              direction="row"
              // justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://youthfulcities.com/"
                >
                  <img
                    src={"./assets/images/yc-logo.png"}
                    height="60vh"
                    alt="Youthful Cities logo"
                  />
                </a>
              </Grid>
              {/* <Grid item sx={{ maxWidth: "50%" }}>
                <Typography color="#fff" variant="p" className="smallText">
                  Youthful Cities is a not-for-profit determined to make cities
                  better places to work, live, and play for everyone.
                </Typography>
              </Grid> */}
            </Grid>
          </Grid>
          <Grid item mt={1}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.therefugeecentre.org/"
            >
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
