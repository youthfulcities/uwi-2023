import { Grid, Typography } from '@mui/material';
import _, { uniqueId } from 'lodash';
import React, { useEffect, useState } from 'react';
import BasicContainer from '../components/BasicContainer';
import FadeInUp from '../components/FadeInUp';
import FooterButtons from '../components/FooterButtons';
import HorizontalGraph from '../components/HorizontalGraph';
import PhotoBackground from '../components/PhotoBackground';
import ScoreCards from '../components/ScoreCards';
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

  const [height, setHeight] = useState(0);

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
            <Typography variant="h5" mb={2} mx={1}>
              <span className="highlight">Click on the bar graph</span> to
              explore the score breakdown of each city.
            </Typography>
          </Grid>
          {/* <Typography mb={1} variant="h3">
            All Cities
          </Typography> */}
          <HorizontalGraph
            parentData={cities}
            max={Math.ceil(score)}
            setCurrentCity={setCurrentCity}
          />
          <Grid item sx={{ width: '100%' }}>
            <Typography variant="h5" mt={4} mx={1} align="left">
              Score breakdown for{' '}
              <span className="highlight">{currentCity}</span>
            </Typography>
          </Grid>
          <Grid container justifyContent="space-between" my={1}>
            {sortedStats.map((topic) => (
              <ScoreCards
                topic={topic}
                height={height}
                setHeight={setHeight}
                key={uniqueId()}
              />
            ))}
          </Grid>
          {getPhoto()}
        </BasicContainer>
        <FooterButtons setPriorities={setPriorities} />
      </FadeInUp>
    </>
  );
};

export default Results;
