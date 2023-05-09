import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import images from '../data/images.json';
import quotes from '../data/quotes.json';

const Photo = ({ currentCity, currentLangCode }) => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(undefined);

  useEffect(() => {
    if (images[currentCity]) {
      const random = Math.floor(Math.random() * images[currentCity].length);
      setCurrent(images[currentCity][random]);
    } else {
      setCurrent(undefined);
    }
  }, [currentCity]);

  const getRandomQuote = (lang = 'en') => {
    const random = Math.floor(Math.random() * quotes.length);
    return lang === 'en'
      ? `"${quotes[random].quote}"`
      : `«${quotes[random].quote_fr}»`;
  };

  const getCurrentQuote = (lang = 'en') =>
    lang === 'en' ? `"${current.quote}"` : `«${current.quote_fr}»`;

  return (
    current && (
      <div className="item">
        <div className="polaroid">
          <img
            src={`./assets/images/${current.img}`}
            alt={current.city}
            width="100%"
          />
          <div className="caption">
            <Typography variant="h6">
              {current.quote
                ? getCurrentQuote(currentLangCode)
                : getRandomQuote(currentLangCode)}
            </Typography>
            <Typography mt={1} variant="body2" sx={{ fontStyle: 'italic' }}>
              — {current.author.length > 0 ? current.author : t('anon')}
            </Typography>
          </div>
        </div>
      </div>
    )
  );
};

export default Photo;
