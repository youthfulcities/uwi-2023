import React from "react";
import { useTranslation } from "react-i18next";

import {
  Card,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CityInfo = ({ alt, src }) => {
  const { t } = useTranslation();
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h3">{t("info")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordianContainer">
            <Typography variant="body1">
              The provincial capital of British Columbia, The City of Victoria
              is located on the southern end of Vancouver Island. With lakes,
              hiking trails, and beaches Victoria is known for its outdoor
              activities and mild and modest weather all year round.
              <br />
              <br />
              The main spoken language in Victoria in English and the city has a
              diverse population. Over 65,000 of the approximately 400,000
              residents (16.25%) represent as immigrants from various
              ethnicities.
              <br />
              <br />
              In regards to employment, jobs in Victoria are spread across
              various industries including education, marine, construction,
              health, retail, and agriculture. To learn more about Victoria
              click on the “FACTS” tab below.
            </Typography>
            <Card sx={{ marginTop: "20px" }}>
              <img src={src} alt={alt} width="100%" />
            </Card>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default CityInfo;
