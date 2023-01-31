import { Container, Grid } from '@mui/material';
import React from 'react';
import ChangeLang from './ChangeLang';

const BasicContainer = ({
  children,
  width = 'xs',
  spacing = 0,
  px = 0,
  languages,
  setCurrentLangCode,
  currentLangCode,
  textSize,
  setTextSize,
}) => (
  <Container maxWidth={width}>
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      px={px}
      pt="5vh"
      pb="5vh"
      spacing={spacing}>
      {children}
    </Grid>
    {/* {document.location.pathname !== "/" && <Back />} */}
    <ChangeLang
      languages={languages}
      setCurrentLangCode={setCurrentLangCode}
      currentLangCode={currentLangCode}
      textSize={textSize}
      setTextSize={setTextSize}
    />
  </Container>
);

export default BasicContainer;
