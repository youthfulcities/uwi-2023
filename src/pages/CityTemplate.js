import React, { useState, useEffect } from "react";
import Decoration from "../components/Decoration";
import BasicContainer from "../components/BasicContainer";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import getData from "../helpers/odsClientV2.js";

import PhotoHeader from "../components/PhotoHeader";

const CityTemplate = () => {
  let { cityname } = useParams();
  const [city, setCity] = useState(undefined);
  const query = `/records?refine=city_name:${cityname}`;

  useEffect(() => {
    const retrievedInfo = getData("cities", query).then(
      (res) => res.records[0]
    );

    const setCities = async () => {
      setCity(await retrievedInfo);
    };

    setCities();
  }, [query]);

  return (
    <>
      {city !== undefined ? (
        <>
          <PhotoHeader
            src={city.record.fields.main_img}
            alt={city.record.fields.main_img_alt}
          >
            {cityname}
          </PhotoHeader>
          <Container maxWidth="md">
            <Grid
              sx={{ minHeight: "55vh" }}
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              py="1vh"
              spacing={0}
            >
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="h3">Info</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography variant="h3">Resources</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                    <div>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography variant="h3">Info</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography variant="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2a-content"
                          id="panel2a-header"
                        >
                          <Typography variant="h3">Resources</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography variant="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
          </Container>
          <Decoration />
        </>
      ) : (
        <p>"Loading..."</p>
      )}
    </>
  );
};

export default CityTemplate;
