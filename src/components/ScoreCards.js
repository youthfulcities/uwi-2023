import LinkIcon from '@mui/icons-material/Link';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { uniqueId } from 'lodash';
import React, { useState } from 'react';
import resources from '../data/resources.json';
import DonutGraph from './DonutGraph';

const darkColours = ['#F2695D', '#253D88', '#FBD166', '#B8D98D', '#673934'];

const ScoreCards = ({ topic }) => {
  const [expanded, setExpanded] = useState(false);

  const theme = useTheme();
  const bigScreen = useMediaQuery(theme.breakpoints.up('sm'), {
    noSsr: true,
  });
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getRandomColour = () => darkColours[Math.floor(Math.random() * 5)];
  const [color, setColor] = useState(getRandomColour());

  const resourceList = resources[topic.topic_key];
  return (
    <Card
      sx={{
        alignSelf: 'flex-start',
        minWith: bigScreen ? 'calc(50% - 10px)' : '100%',
        width: bigScreen ? 'calc(50% - 10px)' : '100%',
        margin: '5px',
        borderRadius: '12px',
      }}>
      <CardContent sx={{ margin: '30px' }}>
        <Typography variant="h3" align="center" px={1} mb={3}>
          {topic.topic_en}
        </Typography>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
          }}>
          <DonutGraph parentData={topic} color={color} />
          <Typography variant="h3" className="centered">
            {topic.score}
          </Typography>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          margin: '10px 10px 0 10px',
          visibility: resourceList ? 'visible' : 'hidden',
        }}>
        <Button
          onClick={handleExpandClick}
          disabled={!resourceList}
          sx={{ minWidth: 0 }}>
          {expanded ? 'Collapse' : 'Expand'} Resources
        </Button>
      </CardActions>
      {resourceList && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {resourceList.map((resource, i) => (
              <ListItem
                button
                divider={!(i >= resourceList.length - 1)}
                component="a"
                href={resource.link}
                target="_blank"
                m={0}
                p={0}
                key={uniqueId()}>
                <ListItemIcon>
                  <LinkIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText
                  primary={resource.name}
                  secondary={resource.desc}
                />
              </ListItem>
            ))}
          </CardContent>
        </Collapse>
      )}
    </Card>
  );
};

export default ScoreCards;
