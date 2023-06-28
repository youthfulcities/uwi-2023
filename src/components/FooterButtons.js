import { Box, Button, Container, Grid } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Socials from './Socials';

const FooterButtons = ({ setPriorities }) => {
  const { t } = useTranslation();
  const handleHome = () => {
    setPriorities([]);
    sessionStorage.removeItem('priorities');
  };

  return (
    <Box py={4} px={2}>
      <Container maxWidth="sm" mx={1}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb={1}>
          <Grid item mx={1} my={1}>
            <Link to="/">
              <Button variant="contained" color="primary" onClick={handleHome}>
                {t('button_home')}
              </Button>
            </Link>
          </Grid>
          <Grid item mx={1} my={1}>
            <Button variant="contained" color="info" onClick={handleHome}>
              Share my results
            </Button>
          </Grid>
        </Grid>
        <Socials />
      </Container>
    </Box>
  );
};

export default FooterButtons;
