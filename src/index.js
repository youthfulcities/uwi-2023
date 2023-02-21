import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { initReactI18next } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'fr'],
    fallbackLng: 'en',
    detection: {
      // order and from where user language should be detected
      order: [
        'localStorage',
        'sessionStorage',
        'querystring',
        'navigator',
        'path',
        'subdomain',
        'cookie',
        'htmlTag',
      ],

      // keys or params to lookup language from
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,

      // cache user language on
      caches: ['localStorage', 'sessionStorage'],
    },

    backend: { loadPath: '/assets/locales/{{lng}}/translation.json' },
    interpolation: {
      escapeValue: false,
    },
  });

// const LoadingMarkup = () => (
//   <div className="centered">
//     <h2 className="loadingText">Loading...</h2>
//     <img src="/assets/images/Rhombus.gif" alt="loading animation" />
//   </div>
// );

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <Router>
    <App tab="home" />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
