import React from "react";
import { useTranslation } from "react-i18next";

import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Stories = () => {
  const { t } = useTranslation();
  return (
    <>
      <Accordion
        sx={{
          "&.Mui-expanded": {
            background: "#884c41",
          },
        }}
      >
        <AccordionSummary
          sx={{
            "&.Mui-expanded": {
              color: "#fff",
            },
          }}
          expandIcon={<ExpandMoreIcon fontSize="large" />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h3">{t("stories")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordianContainer">
            <Typography variant="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Stories;
