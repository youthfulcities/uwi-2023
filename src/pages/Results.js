import { Box, Button, Container, Grid, Typography } from '@mui/material';
import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import BarGraph from '../components/BarGraph';
import BasicContainer from '../components/BasicContainer';
import DonutGraph from '../components/DonutGraph';
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

  const topCityStats = citiesObject[city];

  const getBestPriority = () => {
    const sortedTopCityStats = _.sortBy(topCityStats, ['score']);
    const highestToLowest = _.reverse(sortedTopCityStats);
    return highestToLowest[0].topic_en;
  };

  const getPercent = (currentScore) =>
    Math.round((currentScore * 100) / priorities.length);

  console.log(topCityStats);

  return (
    <>
      <BasicContainer
        width="md"
        languages={languages}
        setCurrentLangCode={setCurrentLangCode}
        currentLangCode={currentLangCode}>
        <Grid item>
          <Typography variant="h5" mb={4}>
            Your best city is <span className="highlight">{city}</span> with a{' '}
            <span className="highlight">{getPercent(score)}% match.</span>{' '}
            {city}
            &apos;s best attribute is{' '}
            <span className="highlight">{getBestPriority(city)}</span>.
          </Typography>
        </Grid>
        <Typography variant="h3">Top 5 Cities</Typography>
        <BarGraph parentData={bestCities} max={priorities.length} />
        <Grid container justifyContent="space-between">
          {topCityStats.map((topic) => (
            <Grid key={uuidv4()} sx={{ minWith: '50%', width: '50%' }}>
              <Typography variant="h3" align="center" px={1}>
                {topic.topic_en}
              </Typography>
              <DonutGraph parentData={topic} max={priorities.length} />
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
