import { Box, Button, Grid, Typography } from '@mui/material';
import _, { uniqueId } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BasicContainer from '../components/BasicContainer';
import DonutGraph from '../components/DonutGraph';
import FadeInUp from '../components/FadeInUp';
import FlipCard from '../components/FlipCard';
import HorizontalGraph from '../components/HorizontalGraph';
import PhotoBackground from '../components/PhotoBackground';
import images from '../data/images.json';
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

  const getPhoto = () => {
    if (images[currentCity]) {
      const random = Math.floor(Math.random() * images[currentCity].length);
      const current = images[currentCity][random];

      return (
        <div className="item">
          <div className="polaroid">
            <img
              src={`./assets/images/${current.img}`}
              alt={current.city}
              width="100%"
            />
            <div className="caption">
              <Typography variant="h6">“{current.quote}”</Typography>
              <Typography mt={1} variant="body2" sx={{ fontStyle: 'italic' }}>
                — {current.author.length > 0 ? current.author : 'Anonymous'}
              </Typography>
            </div>
          </div>
        </div>
      );
    }
  };

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
          <Grid container justifyContent="space-between" my={4}>
            {sortedStats.map((topic) => (
              <FlipCard key={uniqueId()}>
                <>
                  <Typography variant="h3" align="center" px={1} mb={3}>
                    {topic.topic_en}
                  </Typography>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                    }}>
                    <DonutGraph parentData={topic} />
                    <Typography variant="h3" className="centered">
                      {topic.score}
                    </Typography>
                  </Box>
                  <Typography variant="body2" mt={3} align="center">
                    Click for resources →
                  </Typography>
                </>
                <>
                  <img
                    src="https://www.futurpreneur.ca/wp-content/uploads/2021/02/futurpreneur_main_logo_web_color@2x.png"
                    alt="futurpreneur logo"
                    width="100%"
                  />
                  <Typography variant="body2" my={2}>
                    Futurpreneur provides national ﬁnancing, mentoring and
                    support tools to aspiring business owners aged 18-39.
                  </Typography>
                  <a
                    href="https://www.futurpreneur.ca/en/"
                    target="_blank"
                    rel="noreferrer">
                    <Button variant="contained" sx={{ minWidth: 0 }}>
                      Go to Website
                    </Button>
                  </a>
                </>
              </FlipCard>
            ))}
          </Grid>
          {getPhoto()}
        </BasicContainer>
        <Box
          sx={{
            background:
              'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
            position: 'sticky',
            bottom: 0,
          }}
          py={2}>
          <Grid
            sx={{ minHeight: '10vh', maxHeight: '10vh', minWidth: '100vw' }}
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
        </Box>
      </FadeInUp>
    </>
  );
};

export default Results;
