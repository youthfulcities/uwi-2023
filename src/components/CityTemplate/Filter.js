import CountertopsIcon from '@mui/icons-material/Countertops';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import HelpIcon from '@mui/icons-material/Help';
import HomeIcon from '@mui/icons-material/Home';
import KitchenIcon from '@mui/icons-material/Kitchen';
import MosqueIcon from '@mui/icons-material/Mosque';
import PaidIcon from '@mui/icons-material/Paid';
import PolicyIcon from '@mui/icons-material/Policy';
import SchoolIcon from '@mui/icons-material/School';
import StoreIcon from '@mui/icons-material/Store';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WorkIcon from '@mui/icons-material/Work';
import { Chip, Grid, Typography } from '@mui/material';
import React from 'react';

const Filter = ({
  categories,
  filteredCategories,
  setFilteredCategories,
  colours,
}) => {
  const handleChange = (category) => {
    if (filteredCategories.indexOf(category) === -1) {
      //add category
      setFilteredCategories([...filteredCategories, category]);
    } else {
      //find and remove category
      const oldCategories = filteredCategories;
      const newCategories = oldCategories.filter((cat) => cat !== category);
      setFilteredCategories(newCategories);
    }
  };

  const handleClearAll = () => {
    setFilteredCategories([]);
  };

  const handleSelectAll = () => {
    setFilteredCategories(categories);
  };

  const getIcon = (category) => {
    switch (category) {
      case 'Community, Family, Wellness':
        return <FamilyRestroomIcon fontSize='large' />;
      case 'Personal Banking and Financial Services':
        return <PaidIcon fontSize='large' />;
      case 'Employment Services':
        return <WorkIcon fontSize='large' />;
      case 'Education and Language Services':
        return <SchoolIcon fontSize='large' />;
      case 'Clothing, Furniture, Food Bank and Home Services':
        return <KitchenIcon fontSize='large' />;
      case 'Public Transportation':
        return <DirectionsBusIcon fontSize='large' />;
      case 'Weather':
        return <ThermostatIcon fontSize='large' />;
      case 'Starting a Business':
        return <StoreIcon fontSize='large' />;
      case 'Home and Living':
        return <CountertopsIcon fontSize='large' />;
      case 'Cost of Housing':
        return <HomeIcon fontSize='large' />;
      case 'Ethnic Foods, Places of Worship, and Cultural':
        return <MosqueIcon fontSize='large' />;
      case 'Legal Services':
        return <PolicyIcon fontSize='large' />;
      default:
        return <HelpIcon fontSize='large' />;
    }
  };

  return (
    <>
      <Grid item>
        <Typography variant='h4' mt={4} mb={1} mx={2}>
          Click the categories to filter the fact cards
        </Typography>
        <Chip
          onClick={() => handleClearAll()}
          label='Clear all'
          sx={{
            fontSize: '1.5rem',
            marginLeft: 1,
            marginBottom: 1,
          }}
          disabled={filteredCategories.length === 0}
        />
        <Chip
          label='Select all'
          onClick={() => handleSelectAll()}
          sx={{
            fontSize: '1.5rem',
            marginLeft: 1,
            marginBottom: 1,
          }}
          disabled={filteredCategories.length === categories.length}
        />
      </Grid>
      <div>
        {categories.map((category, i) => (
          <Chip
            key={i}
            sx={{
              fontSize: '1.5rem',
              marginLeft: 1,
              marginBottom: 1,
              backgroundColor:
                filteredCategories.indexOf(category) !== -1
                  ? colours[i].background
                  : 'grey',
              color:
                filteredCategories.indexOf(category) !== -1
                  ? colours[i].text
                  : '#000',
              '&:hover': {
                backgroundColor:
                  filteredCategories.indexOf(category) !== -1
                    ? colours[i].background
                    : 'grey',
              },
            }}
            onClick={(e) => handleChange(e.target.innerText)}
            component='button'
            label={category}
            icon={getIcon(category)}
          />
        ))}
      </div>
    </>
  );
};

export default Filter;
