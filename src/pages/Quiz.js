import InfoIcon from '@mui/icons-material/Info';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useCallback, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import BasicContainer from '../components/BasicContainer';
import PhotoBackground from '../components/PhotoBackground';
import RoundSymbolButton from '../components/RoundSymbolButton';
import topics from '../data/topics.json';

const topicsToButtons = () =>
  topics.map((topic, i) => ({ ...topic, id: i, included: false }));

const Quiz = ({
  languages,
  setCurrentLangCode,
  currentLangCode,
  setPriorities,
}) => {
  const [items, setItems] = useState(topicsToButtons);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = useCallback((index) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        index !== item.id ? item : { ...item, included: !item.included }
      )
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPriorities = items
      .map((item) => (item.included ? item.key : undefined))
      .filter((current) => current !== undefined);
    setPriorities(newPriorities);
    const stringifiedPriorities = JSON.stringify(newPriorities);
    sessionStorage.setItem('priorities', stringifiedPriorities);
    navigate('/results');
  };

  return (
    <>
      <PhotoBackground />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}>
        <BasicContainer
          languages={languages}
          setCurrentLangCode={setCurrentLangCode}
          currentLangCode={currentLangCode}>
          <Typography variant="h5" mb={2}>
            <Trans
              i18nKey="quiz_title"
              components={{ span: <span className="highlight" /> }}
            />
          </Typography>
          <Typography variant="body1" mb={4} sx={{ width: '100%' }}>
            {t('quiz_subtitle1')}
            <InfoIcon />
            {t('quiz_subtitle2')}
          </Typography>
          {items.map((item) => (
            <RoundSymbolButton
              currentLangCode={currentLangCode}
              index={item.id}
              key={item.key}
              topic={item.key}
              desc={item.desc}
              desc_fr={item.desc_fr}
              included={item.included}
              name={item.name}
              name_fr={item.name_fr}
              handleClick={handleClick}
            />
          ))}
        </BasicContainer>
        <Box
          sx={{
            bottom: 0,
          }}
          pb={4}>
          <Container maxWidth="lg">
            <Grid
              sx={{ minHeight: '10vh', maxHeight: '10vh' }}
              container
              direction="row"
              justifyContent="center"
              alignItems="center">
              <Grid item mx={1} mb={1}>
                <Link to="/">
                  <Button variant="contained" color="primary">
                    {t('button_home')}
                  </Button>
                </Link>
              </Grid>
              <Grid item mx={1} mb={1}>
                {items.some((e) => e.included === true) ? (
                  <Button
                    variant="contained"
                    color="info"
                    onClick={(e) => handleSubmit(e)}>
                    {t('button_results')}
                  </Button>
                ) : (
                  <Button variant="contained" color="info" disabled>
                    {t('button_results')}
                  </Button>
                )}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.div>
    </>
  );
};

export default Quiz;
