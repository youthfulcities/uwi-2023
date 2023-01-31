import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Button, Grid, Typography } from '@mui/material';

import BasicContainer from '../components/BasicContainer';
import Decoration from '../components/Decoration';
import PhotoCard from '../components/PhotoCard';
import cities from '../data/cities.json';

const ExploreAll = ({
  currentLangCode,
  languages,
  setCurrentLangCode,
  textSize,
  setTextSize,
  form,
  setForm,
}) => {
  const { t } = useTranslation();

  const [recs] = useState(cities);

  return (
    <>
      <Decoration />
      <BasicContainer
        width="lg"
        languages={languages}
        setCurrentLangCode={setCurrentLangCode}
        currentLangCode={currentLangCode}
        textSize={textSize}
        setTextSize={setTextSize}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Link to="/create-profile">
              <Button
                variant="contained"
                onClick={() => setForm({ ...form, step: 1 })}>
                Find the best city for me
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid mb={2} mt={3} item>
          <Typography align="center" variant="h1">
            {t('exploreHeading')}
          </Typography>
        </Grid>
        <Grid container direction="row" spacing={2}>
          {recs.map((city) => (
            <Grid key={uuidv4()} item lg={4} md={6} xs={12}>
              <PhotoCard
                city={city.city_name}
                alt={city.main_img_alt}
                src={city.main_img}
                factoid={city.population}
                province={city.province}
                currentLangCode={currentLangCode}>
                {city.city_name}
              </PhotoCard>
            </Grid>
          ))}
        </Grid>
      </BasicContainer>
    </>
  );
};

export default ExploreAll;
