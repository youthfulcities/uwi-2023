import { Container, Grid } from '@mui/material';
import React, { forwardRef } from 'react';

const BasicContainer = (
  {
    children,
    width = 'xs',
    spacing = 0,
    px = 1,
    pt = '11vh',
    pb = '3vh',
    languages,
    setCurrentLangCode,
    currentLangCode,
    textSize,
    setTextSize,
  },
  ref
) => (
  <Container ref={ref} maxWidth={width}>
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
  </Container>
);

export default forwardRef(BasicContainer);
