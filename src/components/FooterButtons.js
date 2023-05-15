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
      <Container
        maxWidth="md"
        mx={1}
        sx={{ minHeight: '10vh', maxHeight: '10vh' }}>
        <Typography variant="body1" textAlign="center">
          Did you know Youthful Cities is holding an Urban Work Summit in 2023?
          Subscribe to our newsletter for updates.
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
                {t('button_apply')}
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
