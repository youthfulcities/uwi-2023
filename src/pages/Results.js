import { Grid, Typography } from '@mui/material';
import _, { uniqueId } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { createSearchParams, useNavigate } from 'react-router-dom';
import BarGraph from '../components/BarGraph';
import BasicContainer from '../components/BasicContainer';
import FadeInUp from '../components/FadeInUp';
import FooterButtons from '../components/FooterButtons';
import Photo from '../components/Photo';
import PhotoBackground from '../components/PhotoBackground';
import ScoreCards from '../components/ScoreCards';
import Socials from '../components/Socials';
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

  const { t } = useTranslation();
  const [height, setHeight] = useState(300);

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

  const attribute =
    currentLangCode === 'en'
      ? getBestPriorities(originalCity)[0].topic_en
      : getBestPriorities(originalCity)[0].topic_fr;

  const getPercent = (currentScore) =>
    Math.round(currentScore / priorities.length);

  // set url param equal to top city for sharing results

  const navigate = useNavigate();

  useEffect(() => {
    const params = {
      city: originalCity,
    };

    const options = {
      pathname: '/results',
      search: `?${createSearchParams(params)}`,
    };

    navigate(options, { replace: true });
  }, [originalCity]);

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
              <Trans
                i18nKey="results_title"
                values={{ city: originalCity, percent: getPercent(score) }}
                components={{ span: <span className="highlight" /> }}
              />{' '}
              {priorities.length > 1 && (
                <Trans
                  i18nKey="results_best"
                  values={{ city: originalCity, attribute }}
                  components={{ span: <span className="highlight" /> }}
                />
              )}
            </Typography>
          </Grid>
          <Typography mb={1} variant="h3">
            {t('graph_top5')}
          </Typography>
          <Typography variant="body1">{t('graph_tip')}</Typography>
          <BarGraph
            currentLangCode={currentLangCode}
            parentData={bestCities}
            max={Math.ceil(score)}
            setCurrentCity={setCurrentCity}
          />
          <Grid item sx={{ width: '100%' }}>
            <Typography variant="h5" mt={4} align="center">
              <Trans
                i18nKey="breakdown_title"
                values={{ city: currentCity }}
                components={{ span: <span className="highlight" /> }}
              />
            </Typography>
          </Grid>
        </BasicContainer>
        <BasicContainer px={0} pt={0} width="md">
          <Grid container justifyContent="space-between" my={1}>
            {sortedStats.map((topic) => (
              <ScoreCards
                currentLangCode={currentLangCode}
                topic={topic}
                height={height}
                setHeight={setHeight}
                key={uniqueId()}
              />
            ))}
          </Grid>
          <Photo currentCity={currentCity} currentLangCode={currentLangCode} />
        </BasicContainer>
        <Socials />
        <FooterButtons />
      </FadeInUp>
    </>
  );
};

export default Results;
