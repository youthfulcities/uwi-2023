import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const FooterButtons = ({ setPriorities }) => {
  const handleHome = () => {
    setPriorities([]);
    sessionStorage.removeItem('priorities');
  };

  return (
    <Box
      sx={{
        // background:
        //   'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
        // position: 'sticky',
        bottom: 0,
      }}
      pb={4}>
      <Grid
        sx={{ minHeight: '10vh', maxHeight: '10vh', minWidth: '100vw' }}
        container
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item mx={1}>
          <Link to="/">
            <Button variant="contained" color="primary" onClick={handleHome}>
              Home
            </Button>
          </Link>
        </Grid>
        <Grid item mx={1}>
          <Link to="/">
            <Button
              variant="contained"
              color="info"
              onClick={() => setPriorities([])}>
              Apply for the Urban Work Summit Fall 2023
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterButtons;
