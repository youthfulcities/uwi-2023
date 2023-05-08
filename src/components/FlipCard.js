import { Grid, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useEffect, useRef, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const FlipCard = ({ children, height, setHeight }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [heightBack, setHeightBack] = useState(0);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const ref = useRef(null);
  const refBack = useRef(null);

  useEffect(() => {
    if (!children) return;
    if (ref.current.clientHeight > height) {
      setHeight(ref.current.clientHeight);
    }
  }, [ref]);

  useEffect(() => {
    if (!children) return;
    setHeightBack(refBack.current.scrollHeight);
  }, [refBack]);

  const theme = useTheme();
  const bigScreen = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });

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
        ref={refBack}
        onClick={handleClick}
        elevation={3}
        sx={{
          height: { height },
          borderRadius: '15px',
          overflowY: 'scroll',
        }}>
        <Grid
          container
          px={bigScreen ? 3 : 1}
          my={heightBack > height ? 3 : 0}
          sx={{ height: '100%', display: 'inline-block' }}>
          {children[1]}
        </Grid>
      </Paper>
    </ReactCardFlip>
  );
};

export default FlipCard;
