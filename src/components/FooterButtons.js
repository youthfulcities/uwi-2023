import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const FooterButtons = ({ setPriorities }) => {
  const { t } = useTranslation();
  const handleHome = () => {
    setPriorities([]);
    sessionStorage.removeItem('priorities');
  };

  return (
    <Box py={4}>
      <Container maxWidth="sm" mx={1}>
        <Typography variant="h3" textAlign="left" mb={2}>
          {t('upcoming')}
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center">
          <Grid item mx={1} my={1}>
            <Link to="/">
              <Button
                variant="contained"
                color="info"
                onClick={() => setPriorities([])}>
                {t('subscribe')}
              </Button>
            </Link>
          </Grid>
          <Grid item mx={1} my={1}>
            <Link to="/">
              <Button variant="contained" color="primary" onClick={handleHome}>
                {t('button_home')}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterButtons;
