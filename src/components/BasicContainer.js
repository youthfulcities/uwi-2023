import { Container, Grid } from '@mui/material';
import React, { forwardRef } from 'react';
import ChangeLang from './ChangeLang';
import FadeInUp from './FadeInUp';

const BasicContainer = (
  {
    children,
    inView = true,
    width = 'xs',
    spacing = 0,
    px = 0,
    py = '5vh',
    languages,
    setCurrentLangCode,
    currentLangCode,
    textSize,
    setTextSize,
  },
  ref
) => (
  <Container ref={ref} maxWidth={width}>
    <FadeInUp inView={inView}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        px={px}
        py={py}
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
    </FadeInUp>
  </Container>
);

export default forwardRef(BasicContainer);
