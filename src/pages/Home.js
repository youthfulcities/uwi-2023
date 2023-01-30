import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import BasicContainer from '../components/BasicContainer';
import PhotoBackground from '../components/PhotoBackground';

import { useTranslation } from 'react-i18next';

const Home = ({
  languages,
  setCurrentLangCode,
  currentLangCode,
  textSize,
  setTextSize,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <PhotoBackground />
        <BasicContainer
          width='xs'
          languages={languages}
          setCurrentLangCode={setCurrentLangCode}
          currentLangCode={currentLangCode}
          textSize={textSize}
          setTextSize={setTextSize}>
          <Grid
            item
            container
            direction='column'
            alignItems='flex-start'
            justifyContent='center'>
            <Typography variant='h1' align='left' className='title'>
              Find my <span className='highlight'> best</span> city
            </Typography>
            <Grid item mt='2vh' mb='5vh'>
              <Typography variant='h5' align='left'>
                urban work index 2023
              </Typography>
            </Grid>
          </Grid>
          <Link to='/'>
            <Button variant='contained'>Take the Quiz</Button>
          </Link>
          <Link to='/'>
            <Button variant='contained'>Explore All Cities</Button>
          </Link>
        </BasicContainer>
      </div>
    </>
  );
};

export default Home;
