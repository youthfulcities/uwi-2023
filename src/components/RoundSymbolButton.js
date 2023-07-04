import BalanceIcon from '@mui/icons-material/Balance';
import CheckIcon from '@mui/icons-material/Check';
import CircleIcon from '@mui/icons-material/Circle';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import HealingIcon from '@mui/icons-material/Healing';
import InfoIcon from '@mui/icons-material/Info';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import ParkIcon from '@mui/icons-material/Park';
import PaymentsIcon from '@mui/icons-material/Payments';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WifiIcon from '@mui/icons-material/Wifi';
import { Button, Tooltip, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

// import { useTranslation } from 'react-i18next';

// const darkColours = ['#F2695D', '#253D88', '#D69F21', '#97BC5C', '#673934'];
// const lightColours = ['#FFA8A4', '#36529B', '#FBD166', '#B8D98D', '#896F6E'];
// const getRandomColour = () => Math.floor(Math.random() * 5);

const RoundSymbolButton = ({
  topic,
  name,
  name_fr,
  desc,
  desc_fr,
  handleClick,
  index,
  included,
  currentLangCode,
}) => {
  // const { t } = useTranslation();

  const even = index % 2;
  // const [included, setIncluded] = useState(isIncluded);
  const [open, setOpen] = useState(false);

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

  const preHandleClick = () => {
    if (open) return;
    handleClick(index);
  };

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'), {
    noSsr: true,
  });

  const mediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'), {
    noSsr: true,
  });


  const getWidth = () => {
    if (smallScreen) {
      return '50%';
    }
    if (mediumScreen) {
      return '30%';
    }
    return '18%';
  };

  const getTranslation = () => {
    if (!smallScreen) {
      return 0;
    }
    if (even) {
      return '-24%';
    }
    return '24%';
  };

  return (
    <Button
      sx={{
        minWidth: 0,
        width: getWidth(),
        height: 'auto',
        right: getTranslation(),
        margin: smallScreen ? 0 : '10px',
        marginBottom: smallScreen ? '-75px' : 0,
        aspectRatio: '1/1',
        borderRadius: '150px',
        padding: '50px',
        '&:hover': {
          backgroundColor: included ? '#36529B' : '#515151',
        },
        '&:active': {
          backgroundColor: included ? '#36529B' : '#515151',
          boxShadow: 'none',
        },
        backgroundColor: included ? '#36529B' : '#515151',
      }}
      variant="contained"
      color="secondary"
      onClick={() => preHandleClick(index)}
      className={`roundSymbolButton ${included ? 'active' : 'inactive'}`}
      component={motion.button}
      whileHover={{
        scale: 1.025,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ delay: 0 }}>
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
      <Tooltip
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        title={
          <Typography variant="body1" p={1}>
            {currentLangCode === 'en' ? desc : desc_fr}
          </Typography>
        }
        arrow
        placement="top"
        sx={{
          position: 'absolute',
          top: '20px',
          fontSize: 24,
        }}
        componentsProps={{
          tooltip: {
            sx: {
              color: '#000',
              backgroundColor: 'rgba(250, 250, 250, 0.95)',
            },
          },
          arrow: {
            sx: {
              color: '#fafafa',
              opacity: 0.95,
            },
          },
        }}>
        <InfoIcon />
      </Tooltip>
      <Typography
        variant="h3"
        sx={{
          zIndex: 0,
        }}
        align="center">
        {currentLangCode === 'en' ? name : name_fr}
      </Typography>
    </Button>
  );
};

export default React.memo(RoundSymbolButton);
