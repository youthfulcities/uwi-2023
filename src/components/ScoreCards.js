import { Box, Button, Typography } from '@mui/material';
import { uniqueId } from 'lodash';
import React from 'react';
import DonutGraph from './DonutGraph';
import FlipCard from './FlipCard';

const ScoreCards = ({ height, setHeight, topic }) => (
  <FlipCard height={height} setHeight={setHeight} key={uniqueId()}>
    <>
      <Typography variant="h3" align="center" px={1} mb={3}>
        {topic.topic_en}
      </Typography>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
        }}>
        <DonutGraph parentData={topic} />
        <Typography variant="h3" className="centered">
          {topic.score}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        mt={3}
        align="center"
        color="primary"
        className="pointer">
        Tap for resources →
      </Typography>
    </>
    <>
      <img
        src="https://www.futurpreneur.ca/wp-content/uploads/2021/02/futurpreneur_main_logo_web_color@2x.png"
        alt="Futurpreneur logo"
        width="100%"
      />
      <Typography variant="body2" my={2}>
        Futurpreneur provides national ﬁnancing, mentoring and support tools to
        aspiring business owners aged 18-39.
      </Typography>
      <a
        href="https://www.futurpreneur.ca/en/"
        target="_blank"
        rel="noreferrer">
        <Button variant="contained" sx={{ minWidth: 0 }}>
          Go to Website
        </Button>
      </a>
      <Typography
        variant="body2"
        mt={3}
        align="center"
        color="primary"
        className="pointer">
        ← Go back
      </Typography>
    </>
  </FlipCard>
);

export default ScoreCards;
