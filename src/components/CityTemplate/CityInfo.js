import React from "react";
import { useTranslation } from "react-i18next";

import { Card, CardMedia, Typography, Grid } from "@mui/material";

const CityInfo = ({ alt, src }) => {
  const { t } = useTranslation();
  return (
    <>
      <Card sx={{ marginTop: "20px", position: "relative" }}>
        <div className="accordianContainer">
          <Typography variant="h3">{t("info")}</Typography>
          <Typography variant="body1">
            The provincial capital of British Columbia, The City of Victoria is
            located on the southern end of Vancouver Island. With lakes, hiking
            trails, and beaches Victoria is known for its outdoor activities and
            mild and modest weather all year round.
            <br />
            <br />
            The main spoken language in Victoria in English and the city has a
            diverse population. Over 65,000 of the approximately 400,000
            residents (16.25%) represent as immigrants from various ethnicities.
            <br />
            <br />
            In regards to employment, jobs in Victoria are spread across various
            industries including education, marine, construction, health,
            retail, and agriculture. To learn more about Victoria click on the
            “FACTS” tab below.
          </Typography>
        </div>
      </Card>
    </>
  );
};

export default CityInfo;
