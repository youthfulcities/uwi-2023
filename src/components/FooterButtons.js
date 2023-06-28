import { Box, Button, Container, Grid } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ShareModal from './ShareModal';
import Socials from './Socials';

const FooterButtons = ({ setPriorities, results = false }) => {
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
          {results && (
            <Grid item mx={1} my={1}>
              <ShareModal />
            </Grid>
          )}
        </Grid>
        <Socials />
      </Container>
    </Box>
  );
};

export default FooterButtons;
