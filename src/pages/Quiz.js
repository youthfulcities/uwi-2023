import { Typography } from '@mui/material';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import BasicContainer from '../components/BasicContainer';
import RoundSymbolButton from '../components/RoundSymbolButton';
import topics from '../data/topics.json';

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
    {topics.map((topic) => (
      <RoundSymbolButton key={uuidv4} topic={topic.key} name={topic.name} />
    ))}
  </BasicContainer>
);

export default Quiz;
