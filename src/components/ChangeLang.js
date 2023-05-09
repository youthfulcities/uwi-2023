import TranslateIcon from '@mui/icons-material/Translate';
import {
  Box,
  Button,
  ClickAwayListener,
  Paper,
  Tooltip,
  Typography
} from '@mui/material';
import { motion } from 'framer-motion';
import i18next from 'i18next';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ChangeLang = ({ languages, setCurrentLangCode, currentLangCode }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  console.log(languages);

  return (
    <Box className="changeLang" sx={{ top: 10, right: 25 }}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box
          sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title={t('languageTooltip')}>
            <Button
              sx={{ minWidth: 0, boxShadow: 6 }}
              variant="contained"
              component={motion.button}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              color="info"
              onClick={handleClick}
              className="roundButton"
              aria-controls={open ? 'language-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}>
              <TranslateIcon fontSize="large" />
            </Button>
          </Tooltip>
          {open && (
            <Paper className="langMenu" id="language-menu" elevation={6}>
              {languages.map(({ code, language, language_fr }) => (
                <Box
                  key={code}
                  onClick={() => {
                    i18next.changeLanguage(code);
                    setCurrentLangCode(code);
                  }}
                  className={
                    currentLangCode === code
                      ? 'langMenuItemWrapperDisabled'
                      : 'langMenuItemWrapper'
                  }>
                  <Typography
                    variant="h6"
                    className={
                      currentLangCode === code
                        ? 'langMenuItemDisabled'
                        : 'langMenuItem'
                    }>
                    {currentLangCode === 'en' ? language : language_fr}
                  </Typography>
                </Box>
              ))}
            </Paper>
          )}
        </Box>
      </ClickAwayListener>
    </Box>
  );
};

export default ChangeLang;
