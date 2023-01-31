import React from 'react';
import { useTranslation } from 'react-i18next';

const Loading = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="centered">
        <h2 className="loadingText">{t('loading')}</h2>
        <img src="/assets/images/Rhombus.gif" alt="loading animation" />
      </div>
      <div className="loading" />
    </>
  );
};

export default Loading;
