import BalanceIcon from '@mui/icons-material/Balance';
import CheckIcon from '@mui/icons-material/Check';
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
import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';

const darkColours = ['#F2695D', '#253D88', '#D69F21', '#97BC5C', '#673934'];
const lightColours = ['#FFA8A4', '#36529B', '#FBD166', '#B8D98D', '#896F6E'];
const getRandomColour = () => Math.floor(Math.random() * 5);

const RoundSymbolButton = ({ topic, name, priorities, setPriorities, i }) => {
  const { t } = useTranslation();

  const even = i % 2;
  const included = priorities ? priorities.includes(topic) : false;

  const getIcon = (iconTopic) => {
    switch (iconTopic) {
      case 'economy':
        return (
          <TrendingUpIcon
            sx={{
              color: '#373737',
              fontSize: '130px',
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
              fontSize: '130px',
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
              fontSize: '130px',
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
              fontSize: '130px',
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
              fontSize: '130px',
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
              fontSize: '130px',
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
              fontSize: '130px',
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
              fontSize: '130px',
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
              fontSize: '130px',
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
              fontSize: '130px',
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
              fontSize: '130px',
              position: 'absolute',
              zIndex: 0,
            }}
          />
        );
    }
  };

  const handleClick = () => {
    if (included) {
      setPriorities((prev) => prev.filter((priority) => priority !== topic));
    } else {
      setPriorities((prev) => [...prev, topic]);
    }
  };

  // const variants = {
  //   active: {
  //     backgroundColor: ['#515151', '#36529B'],
  //     transition: { duration: 1 },
  //   },
  //   inactive: {
  //     backgroundColor: ['#36529B', '#515151'],
  //     transition: { duration: 1 },
  //   },
  // };

  return (
    <Button
      sx={{
        boxShadow: included
          ? 'inset 30px 43px 21px rgba(0, 0, 0, 0.01), inset 17px 24px 18px rgba(0, 0, 0, 0.05), inset 7px 11px 13px rgba(0, 0, 0, 0.09), inset 2px 3px 7px rgba(0, 0, 0, 0.1)'
          : 'inset -14px -22px 10px rgba(0, 0, 0, 0.01), inset -8px -12px 9px rgba(0, 0, 0, 0.05), inset -3px -5px 6px rgba(0, 0, 0, 0.09), inset -1px -1px 4px rgba(0, 0, 0, 0.1)',
        minWidth: 0,
        width: '50%',
        height: 'auto',
        right: even ? '-24%' : '24%',
        aspectRatio: '1/1',
        borderRadius: '100px',
        padding: '50px',
        '&:hover': {
          backgroundColor: included ? '#36529B' : '#515151',
        },
        '&:active': {
          backgroundColor: included ? '#36529B' : '#515151',
        },
        backgroundColor: included ? '#36529B' : '#515151',
      }}
      variant="contained"
      color="secondary"
      onClick={() => handleClick()}
      className="roundSymbolButton"
      component={motion.button}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}>
      {included ? (
        <CheckIcon
          sx={{
            color: '#253D88',
            fontSize: '150px',
            position: 'absolute',
            zIndex: 0,
          }}
        />
      ) : (
        getIcon(topic)
      )}
      <Typography
        variant="h3"
        sx={{
          zIndex: 10,
        }}
        align="center">
        {name}
      </Typography>
    </Button>
  );
};

export default RoundSymbolButton;
