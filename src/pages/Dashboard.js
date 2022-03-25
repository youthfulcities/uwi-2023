import React, { useState } from "react";
import "../ODS.css";
import { Grid, Tabs, Tab } from "@mui/material";
import BasicContainer from "../components/BasicContainer";
import Profiles from "./Profiles";

const Dashboard = ({
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
    </>
  );
};

export default Dashboard;
