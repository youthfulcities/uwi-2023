import { Container, Grid } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <Container maxWidth='lg'>
        <Grid
          sx={{ minHeight: '14vh', maxHeight: '14vh' }}
          container
          direction='row'
          justifyContent='center'
          alignItems='center'>
          <Grid item>
            <Grid container direction='row' alignItems='center'>
              <Grid item container spacing='1vh' direction='column'>
                <Grid item>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://youthfulcities.com/'>
                    <img
                      src={'./assets/images/yc-logo.png'}
                      height='60vh'
                      alt='Youthful Cities logo'
                    />
                  </a>
                  <Grid item className='attributionLink' mx='1vh'>
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://icons8.com/icon/6EivusYGgM4h/home'>
                      Home
                    </a>
                    icon by
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://icons8.com'>
                      Icons8
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              {/* <Grid item sx={{ maxWidth: "50%" }}>
                <Typography color="#fff" variant="body1" className="smallText">
                  Youthful Cities is a not-for-profit determined to make cities
                  better places to work, live, and play for everyone.
                </Typography>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
