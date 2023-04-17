import { Grid, Typography } from '@mui/material';
import _, { uniqueId } from 'lodash';
import React, { useEffect, useState } from 'react';
import BarGraph from '../components/BarGraph';
import BasicContainer from '../components/BasicContainer';
import FadeInUp from '../components/FadeInUp';
import FooterButtons from '../components/FooterButtons';
import PhotoBackground from '../components/PhotoBackground';
import ScoreCards from '../components/ScoreCards';
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

  const [height, setHeight] = useState(0);

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
          currentLangCode={currentLangCode}
          pb={0}>
          <Grid item>
            <Typography variant="h5" mb={4}>
              Your best city is{' '}
              <span className="highlight">{originalCity}</span> with a{' '}
              <span className="highlight">{getPercent(score)}% match.</span>{' '}
              {priorities.length > 1 && (
                <>
                  {originalCity}&apos;s best attribute is{' '}
                  <span className="highlight">
                    {getBestPriorities(originalCity)[0].topic_en}
                  </span>
                  .
                </>
              )}
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
          <Grid item sx={{ width: '100%' }}>
            <Typography variant="h5" mt={4} align="center">
              Score breakdown for{' '}
              <span className="highlight">{currentCity}</span>
            </Typography>
          </Grid>
        </BasicContainer>
        <BasicContainer px={0} pt={0} width="md">
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
        </BasicContainer>
        <FooterButtons setPriorities={setPriorities} />
      </FadeInUp>
    </>
  );
};

export default Results;
