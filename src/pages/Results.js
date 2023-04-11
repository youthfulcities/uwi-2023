import { Box, Button, Container, Grid, Typography } from '@mui/material';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import BarGraph from '../components/BarGraph';
import BasicContainer from '../components/BasicContainer';
import DonutGraph from '../components/DonutGraph';
import FadeInUp from '../components/FadeInUp';
import PhotoBackground from '../components/PhotoBackground';
import { getCitiesObject, getTotalScores } from '../helpers/getCity';

const Results = ({
  languages,
  setCurrentLangCode,
  currentLangCode,
  priorities,
  setPriorities,
}) => {
  useEffect(() => {
    document.querySelector('body').scrollTo(0, 0);
  }, []);

  const bestCities = getTotalScores(priorities).slice(0, 5);
  const bestCity = bestCities[0];
  const { city: originalCity, score } = bestCity;
  const [currentCity, setCurrentCity] = useState(originalCity);

  const citiesObject = getCitiesObject(priorities);

  const getTopCityStats = (city = currentCity) => citiesObject[city];

  const getBestPriorities = (city = currentCity) => {
    const topCityStats = getTopCityStats(city);
    const sortedTopCityStats = _.sortBy(topCityStats, ['score']);
    const highestToLowest = _.reverse(sortedTopCityStats);
    return highestToLowest;
  };

  const sortedStats = getBestPriorities();

  const getPercent = (currentScore) =>
    Math.round(currentScore / priorities.length);

  return (
    <>
      <PhotoBackground />
      <FadeInUp>
        <BasicContainer
          width="md"
          languages={languages}
          setCurrentLangCode={setCurrentLangCode}
          currentLangCode={currentLangCode}>
          <Grid item>
            <Typography variant="h5" mb={4}>
              Your best city is{' '}
              <span className="highlight">{originalCity}</span> with a{' '}
              <span className="highlight">{getPercent(score)}% match.</span>{' '}
              {originalCity}
              &apos;s best attribute is{' '}
              <span className="highlight">
                {getBestPriorities(originalCity)[0].topic_en}
              </span>
              .
            </Typography>
          </Grid>
          <Typography mb={1} variant="h3">
            Your Top 5 Cities
          </Typography>
          <Typography variant="body1">
            Click on the bars to see the score breakdown
          </Typography>
          <BarGraph
            parentData={bestCities}
            max={Math.ceil(score)}
            setCurrentCity={setCurrentCity}
          />
          <Typography variant="h5" mt={4} align="center">
            Score breakdown for {currentCity}
          </Typography>
          <Grid container justifyContent="space-between" my={1}>
            {sortedStats.map((topic) => (
              <Grid key={uuidv4()} sx={{ minWith: '50%', width: '50%' }} my={4}>
                <Typography variant="h3" align="center" px={1}>
                  {topic.topic_en}
                </Typography>
                <Box sx={{ position: 'relative' }}>
                  <DonutGraph parentData={topic} />
                  <Typography variant="h3" className="centered">
                    {topic.score}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
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
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setPriorities([])}>
                    Home
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </FadeInUp>
    </>
  );
};

export default Results;
