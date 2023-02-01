import HealingIcon from '@mui/icons-material/Healing';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';

const RoundSymbolButton = ({ topic }) => {
  const { t } = useTranslation();

  const handleClick = () => {};

  return (
    <Button
      sx={{
        minWidth: 0,
        width: '40vw',
        height: '40vw',
        borderRadius: '100px',
      }}
      variant="contained"
      color="secondary"
      onClick={handleClick}
      component={motion.div}
      layout
      className="roundSymbolButton">
      <HealingIcon sx={{ color: '#373737', fontSize: '80px' }} />
    </Button>
  );
};

export default RoundSymbolButton;
