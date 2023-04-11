import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import BasicContainer from '../components/BasicContainer';
import FadeInUp from '../components/FadeInUp';
import PhotoBackground from '../components/PhotoBackground';

const Home = ({ languages, setCurrentLangCode, currentLangCode }) => {
  const { t } = useTranslation();

  return (
    <>
      <PhotoBackground />
      <FadeInUp>
        <BasicContainer
          width="xs"
          spacing={1}
          px={3}
          py={8}
          languages={languages}
          setCurrentLangCode={setCurrentLangCode}
          currentLangCode={currentLangCode}>
          <Grid item>
            <Typography variant="h1" align="left" className="title">
              Find my <span className="highlight-title"> best</span> city
            </Typography>
          </Grid>
          <Grid item sx={{ width: '100%' }} mb={4}>
            <Typography variant="h5" align="left">
              urban work index 2023
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/quiz">
              <Button variant="contained">Take the Quiz</Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/all">
              <Button variant="contained">Explore All Cities</Button>
            </Link>
          </Grid>
        </BasicContainer>
      </FadeInUp>
    </>
  );
};

export default Home;
