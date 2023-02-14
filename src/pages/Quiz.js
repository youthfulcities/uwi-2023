import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import BasicContainer from '../components/BasicContainer';
import RoundSymbolButton from '../components/RoundSymbolButton';
import topics from '../data/topics.json';

const Quiz = ({
  languages,
  setCurrentLangCode,
  currentLangCode,
  priorities,
  setPriorities,
}) => {
  console.log('quiz rerender');
  return (
    <>
      <BasicContainer
        languages={languages}
        setCurrentLangCode={setCurrentLangCode}
        currentLangCode={currentLangCode}>
        <Typography variant="h5" mb={4}>
          Select the aspects of a city that are{' '}
          <span className="highlight">important to you.</span> Tap again to
          deselect.
        </Typography>
        {topics.map((topic, i) => (
          <RoundSymbolButton
            i={i}
            key={uuidv4()}
            topic={topic.key}
            priorities={priorities}
            setPriorities={setPriorities}
            name={topic.name}
          />
        ))}
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
              <Link to="/results">
                <Button
                  variant="contained"
                  color="info"
                  disabled={priorities.length === 0}>
                  Show me my results
                </Button>
              </Link>
            </Grid>
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

export default Quiz;
