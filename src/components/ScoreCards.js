import {
  Box,
  Grid,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { uniqueId } from 'lodash';
import React from 'react';
import resources from '../data/resources.json';
import DonutGraph from './DonutGraph';
import FlipCard from './FlipCard';

const ScoreCards = ({ height, setHeight, topic }) => {
  const resourceList = resources[topic.topic_key];
  return resourceList ? (
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
        {resourceList.map((resource) => (
          <ListItem
            button
            divider
            component="a"
            href={resource.link}
            target="_blank"
            m={0}
            p={0}
            key={uniqueId()}>
            <ListItemText primary={resource.name} />
          </ListItem>
        ))}
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
  ) : (
    <Box
      sx={{
        minWith: 'calc(50% - 10px)',
        width: 'calc(50% - 10px)',
        height: 'auto',
        minHeight: `${height}px`,
        margin: '5px',
      }}>
      <Paper
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
          {/* hidden to maintain spacing */}
          <Typography
            variant="body2"
            mt={3}
            align="center"
            color="primary"
            className="pointer"
            sx={{ visibility: 'hidden' }}>
            ← Go back
          </Typography>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ScoreCards;
