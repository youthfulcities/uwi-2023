import { Grid, Paper } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const FlipCard = ({ children, height, setHeight }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const ref = useRef(null);

  useEffect(() => {
    if (!children) return;
    if (ref.current.clientHeight > height) {
      setHeight(ref.current.clientHeight);
    }
  }, [ref]);

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      containerStyle={{
        minWith: 'calc(50% - 10px)',
        width: 'calc(50% - 10px)',
        height: 'auto',
        minHeight: `${height}px`,
        margin: '5px',
      }}>
      <Paper
        ref={ref}
        onClick={handleClick}
        elevation={3}
        sx={{
          height: '100%',
          borderRadius: '15px',
        }}>
        <Grid
          container
          p={3}
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
          flexWrap="nowrap"
          sx={{ height: '100%' }}>
          {children[0]}
        </Grid>
      </Paper>
      <Paper
        onClick={handleClick}
        elevation={3}
        sx={{
          height: '100%',
          borderRadius: '15px',
        }}>
        <Grid
          container
          p={3}
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
          flexWrap="nowrap"
          sx={{ height: '100%' }}>
          {children[1]}
        </Grid>
      </Paper>
    </ReactCardFlip>
  );
};

export default FlipCard;
