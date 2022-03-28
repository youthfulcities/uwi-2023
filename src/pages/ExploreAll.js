import React from "react";
import "../ODS.css";

import Profiles from "./Profiles";

const ExploreAll = ({
  currentLangCode,
  languages,
  setCurrentLangCode,
  textSize,
  setTextSize,
}) => {
  return (
    <>
      <Profiles
        languages={languages}
        setCurrentLangCode={setCurrentLangCode}
        currentLangCode={currentLangCode}
        textSize={textSize}
        setTextSize={setTextSize}
      />
    </>
  );
};

export default ExploreAll;
