import { Typography } from '@mui/material';
import React from 'react';
import images from '../data/images.json';

const Photo = ({ currentCity }) => {
  if (images[currentCity]) {
    const random = Math.floor(Math.random() * images[currentCity].length);
    const current = images[currentCity][random];

    return (
      <div className="item">
        <div className="polaroid">
          <img
            src={`./assets/images/${current.img}`}
            alt={current.city}
            width="100%"
          />
          <div className="caption">
            <Typography variant="h6">“{current.quote}”</Typography>
            <Typography mt={1} variant="body2" sx={{ fontStyle: 'italic' }}>
              — {current.author.length > 0 ? current.author : 'Anonymous'}
            </Typography>
          </div>
        </div>
      </div>
    );
  }
};

export default Photo;
