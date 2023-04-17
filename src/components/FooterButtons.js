import { Box, Button, Container, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const FooterButtons = ({ setPriorities }) => {
  const handleHome = () => {
    setPriorities([]);
    sessionStorage.removeItem('priorities');
  };

  return (
    <Box pb={2}>
      <Container maxWidth="lg">
        <Grid
          sx={{ minHeight: '10vh', maxHeight: '10vh' }}
          container
          direction="row"
          justifyContent="center"
          alignItems="center">
          <Grid item mx={1} mb={1}>
            <Link to="/">
              <Button variant="contained" color="primary" onClick={handleHome}>
                Home
              </Button>
            </Link>
          </Grid>
          <Grid item mx={1} mb={1}>
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
      </Container>
    </Box>
  );
};

export default FooterButtons;
