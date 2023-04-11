import { Box, Button, Container, Grid, Typography } from '@mui/material';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import BasicContainer from '../components/BasicContainer';
import DonutGraph from '../components/DonutGraph';
import FadeInUp from '../components/FadeInUp';
import HorizontalGraph from '../components/HorizontalGraph';
import PhotoBackground from '../components/PhotoBackground';
import { getCitiesObject, getTotalScores } from '../helpers/getCity';

const Results = ({
  languages,
  setCurrentLangCode,
  currentLangCode,
  setPriorities,
}) => {
  useEffect(() => {
    document.querySelector('body').scrollTo(0, 0);
  }, []);

  const cities = getTotalScores();
  const bestCity = cities[0];
  const { city: originalCity, score } = bestCity;

  const [currentCity, setCurrentCity] = useState(originalCity);

  const groupedCities = getCitiesObject();
  const getTopCityStats = (city = currentCity) => groupedCities[city];

  const getBestPriorities = (city = currentCity) => {
    const topCityStats = getTopCityStats(city);
    const sortedTopCityStats = _.sortBy(topCityStats, ['score']);
    const highestToLowest = _.reverse(sortedTopCityStats);
    return highestToLowest;
  };

  const sortedStats = getBestPriorities();

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
              <span className="highlight">Click on the bar graph</span> to
              explore the score breakdown of each city.
            </Typography>
          </Grid>
          <Typography mb={1} variant="h3">
            All Cities
          </Typography>
          <HorizontalGraph
            parentData={cities}
            max={Math.ceil(score)}
            setCurrentCity={setCurrentCity}
          />
          <Typography variant="h5" mt={4} align="center">
            Score breakdown for <span className="highlight">{currentCity}</span>
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
