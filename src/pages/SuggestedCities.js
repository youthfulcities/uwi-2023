import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import BasicContainer from '../components/BasicContainer';
import Decoration from '../components/Decoration';
import FactCard from '../components/FactCard';
import PhotoCard from '../components/PhotoCard';
import cities from '../data/cities.json';
import { calcCity, topMeasurements } from '../helpers/calcCity';
import Loading from '../pages/Loading';

const SuggestedCities = ({
  form,
  setForm,
  currentLangCode,
  languages,
  setCurrentLangCode,
  textSize,
  setTextSize,
}) => {
  const { t } = useTranslation();
  const { priorities } = form;
  const measure = `measurement_${currentLangCode}`;

  //only take top 3 cities
  const topCities = calcCity(priorities).slice(0, 3);

  //separate out just the city names
  const [cityNames] = useState(topCities.map((e) => e.city));

  //separate out just the city scores
  const [cityScores] = useState(topCities.map((e) => e.score));

  const outOf = priorities.length;

  //since the top cities calculation combines all the scores we need to go back and get the separate scores for each measurement for just the top 3 cities
  const resources = topMeasurements(priorities, cityNames, 3);

  const [cityData, setCityData] = useState(undefined);

  useEffect(() => {
    //get the city data objects from cities.json for the matching top 3 cities
    const data = cityNames.flatMap((city) =>
      cities.filter((e) => e.city_name === city)
    );
    setCityData(data);
  }, [cityNames]);

  //this manually formats the number if current language is Dari, although if the user has their browser UI language set to Dari/Farsi then this should happen automatically so this isn't technically needed
  const formattedNumber = (number) => {
    if (currentLangCode === 'fa') {
      const newNum = Number(number).toLocaleString('fa-AF');
      return newNum;
    }
    return Number(number).toLocaleString();
  };

  return (
    <>
      <Decoration />
      <BasicContainer
        width='lg'
        languages={languages}
        setCurrentLangCode={setCurrentLangCode}
        currentLangCode={currentLangCode}
        textSize={textSize}
        setTextSize={setTextSize}>
        {cityData !== undefined ? (
          <>
            <Grid container spacing={2} justifyContent='center'>
              <Grid item>
                <Link to='/create-profile'>
                  <Button
                    variant='contained'
                    onClick={() => setForm({ ...form, step: 1 })}>
                    Start Again
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link to='/explore-all'>
                  <Button variant='contained'>Explore All Cities</Button>
                </Link>
              </Grid>
            </Grid>
            <Grid mt={3} item>
              <Typography align='center' variant='h1'>
                {t('suggestedCitiesHeading')}
              </Typography>
            </Grid>

            <Grid container justifyContent='space-between' spacing={2}>
              {cityData.map((city, i) => (
                <Grid
                  container
                  item
                  lg={4}
                  sm={12}
                  direction='column'
                  key={uuidv4()}>
                  <Grid mt={6} item>
                    <PhotoCard
                      score={cityScores[i]}
                      outOf={outOf}
                      city={city.city_name}
                      alt={city.main_img_alt}
                      src={city.main_img}
                      province={city.province}
                      currentLangCode={currentLangCode}
                      factoid={city.population}>
                      {`#${i + 1} ${city.city_name}`}
                    </PhotoCard>
                  </Grid>
                  <Grid mt={1} item>
                    <Accordion
                      sx={{
                        width: '100%',
                        borderRadius: '35px',
                        '&.Mui-expanded': {
                          background: '#FBD166',
                        },
                      }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon fontSize='large' />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'>
                        <Typography variant='h3'>{t('facts')}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className='accordianContainer'>
                          <Typography variant='body1'>
                            {t('highestScoring')}
                          </Typography>
                        </div>
                        {resources &&
                          resources[i].map((resource, i) => (
                            <Grid
                              key={uuidv4()}
                              item
                              sx={{ width: '100%' }}
                              flexGrow='5'>
                              <div className='accordianContainer'>
                                <FactCard>
                                  <Typography
                                    variant='h5'
                                    color='#000'
                                    align='center'>
                                    {
                                      priorities.find(
                                        (priority) =>
                                          priority.name === resource.JSONNames
                                      )[measure]
                                    }
                                  </Typography>
                                  <Typography
                                    mt={2}
                                    variant='h2'
                                    align='center'
                                    color='#F2695D'>
                                    {resource.measureableValue ===
                                    'dollar value'
                                      ? `$${formattedNumber(resource.Value)}`
                                      : formattedNumber(resource.Value)}
                                  </Typography>
                                  <Typography variant='body1' mt={2}>
                                    {`${t('score')}: ${
                                      Math.round(resource.score * 100) / 100
                                    }/1`}
                                  </Typography>
                                </FactCard>
                              </div>
                            </Grid>
                          ))}
                        <div className='accordianContainer'>
                          <Link to={`/about/${city.city_name}`}>
                            <Grid mt={1} item flexGrow='1'>
                              <Button
                                variant='contained'
                                size='large'
                                fullWidth={true}>
                                <Typography variant='h5'>
                                  {t('more')}
                                </Typography>
                              </Button>
                            </Grid>
                          </Link>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          <Loading />
        )}
      </BasicContainer>
    </>
  );
};

export default SuggestedCities;
