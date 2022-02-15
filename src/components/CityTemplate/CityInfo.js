import React from "react";

import {
  Card,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CityInfo = ({ alt, src }) => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h3">Info</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordianContainer">
            <Typography variant="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
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
