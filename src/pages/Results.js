import { Box, Button, Container, Grid, Typography } from '@mui/material';
import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import BasicContainer from '../components/BasicContainer';
import { getCitiesObject, getTotalScores } from '../helpers/getCity';

const Results = ({
  languages,
  setCurrentLangCode,
  currentLangCode,
  priorities,
}) => {
  const bestCities = getTotalScores(priorities).slice(0, 5);
  const bestCity = bestCities[0];
  const { city, score } = bestCity;

  const citiesObject = getCitiesObject(priorities);

  const getBestPriority = (currentCity) => {
    const topCityStats = citiesObject[currentCity];
    const sortedTopCityStats = _.sortBy(topCityStats, ['score']);
    const highestToLowest = _.reverse(sortedTopCityStats);
    return highestToLowest[0].topic_en;
  };

  const getPercent = (currentScore) =>
    Math.round((currentScore * 100) / priorities.length);

  return (
    <>
      <BasicContainer
        languages={languages}
        setCurrentLangCode={setCurrentLangCode}
        currentLangCode={currentLangCode}>
        <Typography variant="h5" mb={4}>
          Your best city is <span className="highlight">{city}</span> with a{' '}
          <span className="highlight">{getPercent(score)}% match.</span> {city}
          &apos;s best attribute is{' '}
          <span className="highlight">{getBestPriority(city)}</span>.
        </Typography>
      </BasicContainer>
      <Box
        sx={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
          position: 'sticky',
          bottom: 0,
          width: '100vw',
        }}
        py={2}>
        <Container maxWidth="lg">
          <Grid
            sx={{ minHeight: '10vh', maxHeight: '10vh' }}
            container
            direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid item mx={1}>
              <Link to="/">
                <Button variant="contained" color="primary">
                  Home
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Results;
