import { Grid, Paper } from '@mui/material';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const FlipCard = ({ children, minSize = '100%' }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Grid sx={{ minWith: '50%', width: '50%' }} p={1}>
      <ReactCardFlip isFlipped={isFlipped}>
        <Paper
          onClick={handleClick}
          elevation={3}
          sx={{ minHeight: '100%', height: '100%', borderRadius: '15px' }}>
          <Grid
            container
            p={2}
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            sx={{ minHeight: '100%', height: '100%' }}>
            {children[0]}
          </Grid>
        </Paper>
        <Paper
          onClick={handleClick}
          elevation={3}
          sx={{ minHeight: '100%', height: '100%', borderRadius: '15px' }}>
          <Grid
            container
            p={2}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: '100%', height: '100%' }}>
            {children[1]}
          </Grid>
        </Paper>
      </ReactCardFlip>
    </Grid>
  );
};

export default FlipCard;
