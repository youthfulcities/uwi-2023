import { Container, Grid } from '@mui/material';
import React, { forwardRef } from 'react';
import FadeInUp from './FadeInUp';
import PhotoBackground from './PhotoBackground';

const BasicContainer = (
  {
    children,
    inView = true,
    width = 'xs',
    spacing = 0,
    px = 0,
    pt = '10vh',
    pb = '3vh',
    languages,
    setCurrentLangCode,
    currentLangCode,
    textSize,
    setTextSize,
  },
  ref
) => (
  <>
    <PhotoBackground />
    <Container ref={ref} maxWidth={width}>
      <FadeInUp inView={inView}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          px={px}
          pt={pt}
          pb={pb}
          spacing={spacing}>
          {children}
        </Grid>
      </FadeInUp>
    </Container>
  </>
);

export default forwardRef(BasicContainer);
