import { ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Route,
  Routes
} from 'react-router-dom';
import './App.css';
import ChangeLang from './components/ChangeLang';
import FadeInUp from './components/FadeInUp';
import Footer from './components/Footer';
import muiTheme from './muiTheme';
import CityTemplate from './pages/CityTemplate';
import CreateProfile from './pages/CreateProfile';
import ExploreAll from './pages/ExploreAll';
import Home from './pages/Home';
import Map from './pages/Map';
import Quiz from './pages/Quiz';

const App = () => {
  const [currentLangCode, setCurrentLangCode] = useState(
    window.localStorage.i18nextLng || 'en'
  );

  const theme = muiTheme();

  const [priorities, setPriorities] = useState([]);

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
      <Router>
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
                path="/explore-all"
                element={
                  <ExploreAll
                    priorities={priorities}
                    setPriorities={setPriorities}
                    languages={languages}
                    setCurrentLangCode={setCurrentLangCode}
                    currentLangCode={currentLangCode}
                  />
                }
              />
              <Route
                path="create-profile"
                element={
                  <CreateProfile
                    languages={languages}
                    setCurrentLangCode={setCurrentLangCode}
                    currentLangCode={currentLangCode}
                    priorities={priorities}
                    setPriorities={setPriorities}
                  />
                }
              />
              <Route
                path="/about/:cityname"
                element={
                  <CityTemplate
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
      </Router>
    </ThemeProvider>
  );
};

export default App;
