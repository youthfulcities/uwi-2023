import { Button, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Feedback = () => {
  const { t } = useTranslation();
  return (
    <a href="https://form.jotform.com/220956393795269">
      <Button variant="contained" color="primary" size="large" fullWidth>
        <Typography variant="h5">{t('feedback')}</Typography>
      </Button>
    </a>
  );
};

export default Feedback;
