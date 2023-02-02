import BalanceIcon from '@mui/icons-material/Balance';
import CircleIcon from '@mui/icons-material/Circle';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import HealingIcon from '@mui/icons-material/Healing';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import ParkIcon from '@mui/icons-material/Park';
import PaymentsIcon from '@mui/icons-material/Payments';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WifiIcon from '@mui/icons-material/Wifi';
import { Button, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const RoundSymbolButton = ({ topic, name }) => {
  const { t } = useTranslation();

  const getIcon = (iconTopic) => {
    switch (iconTopic) {
      case 'economy':
        return (
          <TrendingUpIcon
            sx={{
              color: '#373737',
              fontSize: '100px',
              position: 'absolute',
              zIndex: 0,
            }}
          />
        );
      case 'cost':
        return (
          <LunchDiningIcon
            sx={{
              color: '#373737',
              fontSize: '100px',
              position: 'absolute',
              zIndex: 0,
            }}
          />
        );
      case 'digital':
        return (
          <WifiIcon
            sx={{
              color: '#373737',
              fontSize: '100px',
              position: 'absolute',
              zIndex: 0,
            }}
          />
        );
      case 'diversity':
        return (
          <BalanceIcon
            sx={{
              color: '#373737',
              fontSize: '100px',
              position: 'absolute',
              zIndex: 0,
            }}
          />
        );
      case 'education':
        return (
          <SchoolIcon
            sx={{
              color: '#373737',
              fontSize: '100px',
              position: 'absolute',
              zIndex: 0,
            }}
          />
        );
      case 'business':
        return (
          <LightbulbIcon
            sx={{
              color: '#373737',
              fontSize: '100px',
              position: 'absolute',
              zIndex: 0,
            }}
          />
        );
      case 'jobs':
        return (
          <PaymentsIcon
            sx={{
              color: '#373737',
              fontSize: '100px',
              position: 'absolute',
              zIndex: 0,
            }}
          />
        );
      case 'health':
        return (
          <HealingIcon
            sx={{
              color: '#373737',
              fontSize: '100px',
              position: 'absolute',
              zIndex: 0,
            }}
          />
        );
      case 'sustainability':
        return (
          <ParkIcon
            sx={{
              color: '#373737',
              fontSize: '100px',
              position: 'absolute',
              zIndex: 0,
            }}
          />
        );
      case 'transport':
        return (
          <DirectionsBusIcon
            sx={{
              color: '#373737',
              fontSize: '100px',
              position: 'absolute',
              zIndex: 0,
            }}
          />
        );
      default:
        return (
          <CircleIcon
            sx={{
              color: '#373737',
              fontSize: '100px',
              position: 'absolute',
              zIndex: 0,
            }}
          />
        );
    }
  };

  const handleClick = () => {};

  return (
    <Button
      sx={{
        minWidth: 0,
        width: '50%',
        height: 'auto',
        aspectRatio: '1/1',
        borderRadius: '100px',
        padding: '50px',
      }}
      variant="contained"
      color="secondary"
      onClick={handleClick}
      className="roundSymbolButton">
      {getIcon(topic)}
      <Typography variant="h3" sx={{ zIndex: 10 }} align="center">
        {name}
      </Typography>
    </Button>
  );
};

export default RoundSymbolButton;
