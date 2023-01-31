import { Container, Grid } from '@mui/material';
import React from 'react';

const Footer = () => (
  <footer>
    <Container maxWidth="lg">
      <Grid
        sx={{ minHeight: '10vh', maxHeight: '10vh' }}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center">
        <Grid item>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://youthfulcities.com/">
            <img
              src="./assets/images/yc-logo.png"
              height="50px"
              alt="Youthful Cities logo"
            />
          </a>
        </Grid>
        <Grid item>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.rbc.com/dms/enterprise/futurelaunch/">
            <img
              src="./assets/images/fl.png"
              height="40px"
              alt="RBC Future Launch logo"
            />
          </a>
        </Grid>
      </Grid>
    </Container>
  </footer>
);

export default Footer;
