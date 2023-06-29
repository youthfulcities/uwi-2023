import { ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChangeLang from './components/ChangeLang';
import Footer from './components/Footer';
import ScrollToTop from './helpers/ScrollToTop';
import muiTheme from './muiTheme';
import AllCities from './pages/AllCities';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';

const App = () => {
  const { t } = useTranslation();
  const [currentLangCode, setCurrentLangCode] = useState(
    window.localStorage.i18nextLng || 'en'
  );

  const theme = muiTheme();

  const [priorities, setPriorities] = useState(
    JSON.parse(sessionStorage.getItem('priorities')) || []
  );

  const languages = [
    {
      code: 'en',
      language: 'English',
      language_fr: 'Anglais',
      dir: 'ltr',
    },
    {
      code: 'fr',
      language: 'French',
      language_fr: 'Français',
      dir: 'ltr',
    },
  ];

  const currentLanguage = languages.find((l) => l.code === currentLangCode);

  // sets language direction in html
  useEffect(() => {
    document
      .getElementsByTagName('html')[0]
      .setAttribute('dir', currentLanguage.dir);
    document.title = t('webtitle');
  }, [currentLanguage]);

  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <ChangeLang
        languages={languages}
        setCurrentLangCode={setCurrentLangCode}
        currentLangCode={currentLangCode}
      />
      <div className="flexWrapper">
        <div className="flexGrow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  languages={languages}
                  setCurrentLangCode={setCurrentLangCode}
                  currentLangCode={currentLangCode}
                />
              }
            />
            <Route
              path="/quiz"
              element={
                <Quiz
                  priorities={priorities}
                  setPriorities={setPriorities}
                  languages={languages}
                  setCurrentLangCode={setCurrentLangCode}
                  currentLangCode={currentLangCode}
                />
              }
            />
            <Route
              path="/results"
              element={
                <Results
                  priorities={priorities}
                  setPriorities={setPriorities}
                  languages={languages}
                  setCurrentLangCode={setCurrentLangCode}
                  currentLangCode={currentLangCode}
                />
              }
            />
            <Route
              path="/all"
              element={
                <AllCities
                  languages={languages}
                  setCurrentLangCode={setCurrentLangCode}
                  currentLangCode={currentLangCode}
                  setPriorities={setPriorities}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
