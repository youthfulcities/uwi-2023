import { Box, Button, Container, Grid } from '@mui/material';
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
    <Box pb={4}>
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
                {t('button_home')}
              </Button>
            </Link>
          </Grid>
          <Grid item mx={1} mb={1}>
            <Link to="/">
              <Button
                variant="contained"
                color="info"
                onClick={() => setPriorities([])}>
                {t('button_apply')}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterButtons;
