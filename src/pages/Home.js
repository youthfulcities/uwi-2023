import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import BasicContainer from '../components/BasicContainer';
import Decoration from '../components/Decoration';
import PhotoBackground from '../components/PhotoBackground';

import i18next from 'i18next';
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
        <Decoration hideText />
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
            direction='row'
            alignItems='center'
            justifyContent='center'>
            <Typography color='#FFF' variant='h1' align='center' mx='2vh'>
              SettleIn
            </Typography>
          </Grid>
          <Grid item mt='2vh' mb='5vh'>
            <Typography color='#FFF' variant='h5' align='center'>
              {t('welcomeMessage')}
            </Typography>
          </Grid>

          {languages.map(({ code, language }) => (
            <Grid key={code} item mt='1vh'>
              <Link to='/intro'>
                <Button
                  color='primary'
                  variant='contained'
                  size='large'
                  onClick={() => {
                    i18next.changeLanguage(code);
                    setCurrentLangCode(code);
                  }}>
                  <Typography variant='h5'>{language}</Typography>
                </Button>
              </Link>
            </Grid>
          ))}
        </BasicContainer>
      </div>
    </>
  );
};

export default Home;
