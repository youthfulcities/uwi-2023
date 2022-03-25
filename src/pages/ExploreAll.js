import React, { useState } from "react";
import "../ODS.css";
import { Grid, Tabs, Tab } from "@mui/material";
import BasicContainer from "../components/BasicContainer";
import Profiles from "./Profiles";

const ExploreAll = ({
  currentLangCode,
  languages,
  setCurrentLangCode,
  textSize,
  setTextSize,
}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container mt={2} justifyContent="center">
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab
            sx={{ fontSize: "2rem" }}
            label="Dashboard"
            id="tab-1"
            aria-controls="tab-1"
          />
          <Tab
            sx={{ fontSize: "2rem" }}
            label="City Profiles"
            id="tab-2"
            aria-controls="tab-2"
          />
        </Tabs>
      </Grid>
      <div
        role="tabpanel"
        hidden={value !== 0}
        id="tabpanel-1"
        aria-labelledby="tab-1"
      >
        <BasicContainer
          width="md"
          languages={languages}
          setCurrentLangCode={setCurrentLangCode}
          currentLangCode={currentLangCode}
          textSize={textSize}
          setTextSize={setTextSize}
        >
          <h1>Dashboard</h1>
          <ods-dataset-context
            context="refugeedata"
            refugeedata-domain="https://pivothub.youthfulcities.com/"
            refugeedata-dataset="refugee-data"
            refugeedata-parameters="{'refine.measurement_en':'# of libraries'}"
          >
            <ods-chart align-month="true">
              <ods-chart-query
                context="refugeedata"
                field-x="city"
                maxpoints="0"
                series-breakdown="measurement_en"
              >
                <ods-chart-serie
                  expression-y="value"
                  chart-type="column"
                  function-y="AVG"
                  scientific-display="true"
                ></ods-chart-serie>
              </ods-chart-query>
            </ods-chart>
          </ods-dataset-context>
        </BasicContainer>
      </div>
      <div
        role="tabpanel"
        hidden={value !== 1}
        id="tabpanel-2"
        aria-labelledby="tab-2"
      >
        <Profiles
          languages={languages}
          setCurrentLangCode={setCurrentLangCode}
          currentLangCode={currentLangCode}
          textSize={textSize}
          setTextSize={setTextSize}
        />
      </div>
    </>
  );
};

export default ExploreAll;
