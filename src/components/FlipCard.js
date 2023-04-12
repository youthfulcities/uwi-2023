import { Grid, Paper } from '@mui/material';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const FlipCard = ({ children }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <Paper onClick={handleClick} elevation={3}>
        <Grid container p={4} justifyContent="center">
          {children}
        </Grid>
      </Paper>
      <Paper onClick={handleClick} elevation={3}>
        <Grid container p={4} justifyContent="center">
          {children}
        </Grid>
      </Paper>
    </ReactCardFlip>
  );
};

export default FlipCard;
