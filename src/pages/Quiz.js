import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useCallback, useState } from 'react';
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
            Select the aspects of a city that are{' '}
            <span className="highlight">important to you.</span> Tap again to
            deselect.
          </Typography>
          <Typography variant="body1" mb={4}>
            Tap and hold on mobile to open the tooltip and learn more about each
            topic.
          </Typography>
          {items.map((item) => (
            <RoundSymbolButton
              index={item.id}
              key={item.key}
              topic={item.key}
              desc={item.desc}
              included={item.included}
              name={item.name}
              handleClick={handleClick}
            />
          ))}
        </BasicContainer>
        <Box
          sx={{
            // background:
            //   'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
            // position: 'sticky',
            bottom: 0,
          }}
          pb={2}>
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
                    Home
                  </Button>
                </Link>
              </Grid>
              <Grid item mx={1} mb={1}>
                {items.some((e) => e.included === true) ? (
                  <Button
                    variant="contained"
                    color="info"
                    onClick={(e) => handleSubmit(e)}>
                    Show me my results
                  </Button>
                ) : (
                  <Button variant="contained" color="info" disabled>
                    Show me my results
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
