import { Card, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const PhotoButton = ({
  city,
  src,
  alt,
  factoid,
  province,
  currentLangCode,
  score,
  outOf,
  children,
}) => {
  const { t } = useTranslation();

  const formattedNumber = (number) => {
    if (currentLangCode === 'fa') {
      const newNum = Number(number).toLocaleString('fa-AF');
      return newNum;
    }
    return Number(number).toLocaleString();
  };

  return (
    <>
      <Link to={`/about/${city}`}>
        <Card
          sx={{
            position: 'relative',
            width: '100%',
            '&:hover': {
              cursor: 'pointer',
            },
          }}>
          <Grid
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            flexWrap='none'>
            <Grid item sx={{ zIndex: 100 }} p={2}>
              <Typography
                p={3}
                pb={1}
                color='#FFF'
                className='photoButtonText'
                variant='h2'>
                {children}
              </Typography>
              <Typography
                p={3}
                pt={0}
                color='#FFF'
                className='photoButtonText'
                variant='h4'>
                {province}
              </Typography>
            </Grid>
            {score && (
              <Grid item p={2}>
                <Typography
                  px={3}
                  py={0}
                  color='#FFF'
                  className='photoButtonText'
                  variant='h3'>
                  {`${t('score')}: ${Math.round(score * 10) / 10}/${outOf}`}
                </Typography>
              </Grid>
            )}
            <Grid item p={2}>
              <Typography
                p={3}
                align='right'
                color='#FFF'
                className='smallPhotoButtonText'
                variant='body1'>
                {t('population')}: {formattedNumber(factoid)}
              </Typography>
            </Grid>
            <CardMedia
              sx={{ zIndex: '1', position: 'absolute' }}
              component='img'
              height='100%'
              src={src}
              alt={alt}
            />
          </Grid>
          <div className='cardOverlay'></div>
        </Card>
      </Link>
    </>
  );
};

export default PhotoButton;
