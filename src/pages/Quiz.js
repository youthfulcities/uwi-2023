import { Typography } from '@mui/material';
import React from 'react';
import BasicContainer from '../components/BasicContainer';
import RoundSymbolButton from '../components/RoundSymbolButton';

const Quiz = ({ languages, setCurrentLangCode, currentLangCode }) => (
  <BasicContainer
    languages={languages}
    setCurrentLangCode={setCurrentLangCode}
    currentLangCode={currentLangCode}>
    <Typography variant="h5">
      Select the aspects of a city that are{' '}
      <span className="highlight">important to you.</span> Tap again to
      deselect.
    </Typography>
    <RoundSymbolButton />
  </BasicContainer>
);

export default Quiz;
