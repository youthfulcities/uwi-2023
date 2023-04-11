import { ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChangeLang from './components/ChangeLang';
import FadeInUp from './components/FadeInUp';
import Footer from './components/Footer';
import ScrollToTop from './helpers/ScrollToTop';
import muiTheme from './muiTheme';
import Home from './pages/Home';
import Map from './pages/Map';
import Quiz from './pages/Quiz';
import Results from './pages/Results';

const App = () => {
  const [currentLangCode, setCurrentLangCode] = useState(
    window.localStorage.i18nextLng || 'en'
  );

  const theme = muiTheme();

  const [priorities, setPriorities] = useState([]);
  console.log(priorities);

  const languages = [
    {
      code: 'en',
      language: 'English',
      dir: 'ltr',
    },
    {
      code: 'fr',
      language: 'French',
      dir: 'ltr',
    },
  ];

  const currentLanguage = languages.find((l) => l.code === currentLangCode);

  // sets language direction in html
  useEffect(() => {
    document
      .getElementsByTagName('html')[0]
      .setAttribute('dir', currentLanguage.dir);
  }, [currentLanguage]);

  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      {/* <Header /> */}
      <FadeInUp>
        <ChangeLang
          languages={languages}
          setCurrentLangCode={setCurrentLangCode}
          currentLangCode={currentLangCode}
        />
      </FadeInUp>
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
            <Route path="/map/:cityname" element={<Map />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
