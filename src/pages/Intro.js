import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import BasicContainer from '../components/BasicContainer';
import Decoration from '../components/Decoration';
import PhotoBackground from '../components/PhotoBackground';

const Intro = ({
  languages,
  setCurrentLangCode,
  currentLangCode,
  textSize,
  setTextSize,
  form,
  setForm,
}) => {
  const { t } = useTranslation();

  return (
    <div className="photoBackgroundContainer">
      <Decoration hideText />
      <PhotoBackground />
      <BasicContainer
        width="sm"
        languages={languages}
        setCurrentLangCode={setCurrentLangCode}
        currentLangCode={currentLangCode}
        textSize={textSize}
        setTextSize={setTextSize}>
        <Grid item>
          <Typography color="#FFF" variant="h1" align="center">
            {t('introHeading')}
          </Typography>
        </Grid>
        <Grid item mt={5}>
          <Typography color="#FFF" variant="h5" align="center">
            {t('introPar1')}
            <br />
            <br />
            {t('introPar2')}
          </Typography>
        </Grid>
        <Grid item mt={5}>
          <Link to="/create-profile">
            <Button
              color="primary"
              variant="contained"
              size="large"
              onClick={() => setForm({ ...form, step: 1 })}>
              <Typography variant="h5">{t('toProfile')}</Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item mt={1}>
          <Link to="/explore-all">
            <Button color="info" variant="outlined" size="large">
              <Typography variant="h5">{t('toExplore')}</Typography>
            </Button>
          </Link>
        </Grid>
      </BasicContainer>
    </div>
  );
};

export default Intro;
