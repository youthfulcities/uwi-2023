import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Facts from './Facts';
import Filter from './Filter';
import Search from './Search';

const FactsSection = ({
  setSearchStringQuery,
  resources,
  subResources,
  filteredCategories,
  categories,
  setFilteredCategories,
  colours,
  currentLangCode,
  cityname,
}) => {
  const { t } = useTranslation();

  return (
    <Accordion
      sx={{
        '&.Mui-expanded': {
          background: '#F2695D',
        },
        '&:first-of-type': {
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        },
      }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon fontSize='large' />}
        aria-controls='panel1a-content'
        id='panel1a-header'>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          flexWrap='nowrap'>
          <Grid item>
            <Typography variant='h3'>{t('facts')}</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <div className='accordianContainer'>
          <Grid item mb={1} mt={3} width='100%'>
            <Search setSearchStringQuery={setSearchStringQuery} />
          </Grid>
          {resources.length > 0 ? (
            <>
              <Grid item width='100%' mb={2}>
                <Filter
                  subResources={subResources}
                  categories={categories}
                  filteredCategories={filteredCategories}
                  setFilteredCategories={setFilteredCategories}
                  colours={colours}
                  currentLangCode={currentLangCode}
                />
              </Grid>
              <Facts
                cityname={cityname}
                currentLangCode={currentLangCode}
                colours={colours}
                subResources={subResources}
                resources={resources}
                categories={categories}
                filteredCategories={filteredCategories}
              />
            </>
          ) : (
            <Grid item className='accordianContainer'>
              <Typography variant='body1'>{t('noneFound')}</Typography>
            </Grid>
          )}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default FactsSection;
