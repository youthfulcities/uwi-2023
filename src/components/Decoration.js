import { Typography } from '@mui/material';
import React from 'react';

const Decoration = ({ absolute, hideText = false }) => {
  return (
    <>
      <div className={absolute ? 'backgroundAbsolute' : 'background'}>
        {!hideText && (
          <a rel href='/' className='backgroundText'>
            <Typography
              variant='h2'
              sx={{
                fontSize: 40,
                backgroundColor: 'var(--green)',
                width: '15%',
              }}>
              SettleIn
            </Typography>
          </a>
        )}
      </div>
    </>
  );
};

export default Decoration;
