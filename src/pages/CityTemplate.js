import React, { useState, useEffect } from "react";
import Decoration from "../components/Decoration";
import { useParams } from "react-router-dom";
import {
  Container,
  Card,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";

import getData from "../helpers/odsClientV2.js";

import PhotoHeader from "../components/PhotoHeader";
import Back from "../components/Back";

const CityTemplate = () => {
  let { cityname } = useParams();
  const [city, setCity] = useState(undefined);
  const [searchString, setSearchString] = useState("");
  const [searchStringQuery, setSearchStringQuery] = useState("");
  const [resources, setResources] = useState([]);

  const cityQuery = `/records?refine=city_name:${cityname}`;

  useEffect(() => {
    const retrievedInfo = getData("cities", cityQuery).then(
      (res) => res.records[0]
    );

    const setCities = async () => {
      setCity(await retrievedInfo);
    };

    setCities();
  }, [cityQuery]);

  //for removing unnescessary words from search
  const cleanSearch = (s) => {
    var words = ["of", "the", "in", "on", "at", "to", "a", "is", "for"];
    var re = new RegExp("\\b(" + words.join("|") + ")\\b", "g");
    return (s || "").replace(re, "").replace(/[ ]{2,}/, " ");
  };

  console.log(cleanSearch("This is a string for you"));
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
              py="14vh"
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
                    <div className="accordianContainer">
                      <Typography variant="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                      <Card sx={{ marginTop: "20px" }}>
                        <img
                          src={city.record.fields.main_img}
                          alt={city.record.fields.main_img_alt}
                          width="100%"
                        />
                      </Card>
                    </div>
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
                    <div className="accordianContainer">
                      <TextField
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon fontSize="large" />
                            </InputAdornment>
                          ),
                        }}
                        variant="outlined"
                        fullWidth="true"
                        onChange={(e) => setSearchString(e.target.value)}
                        label="Search"
                      ></TextField>
                    </div>
                    <div>
                      <Accordion square={true} disableGutters={true}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography variant="h5">Category 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div className="accordianContainer">
                            <Typography variant="p">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Suspendisse malesuada lacus ex, sit amet
                              blandit leo lobortis eget.
                            </Typography>
                          </div>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion disableGutters={true}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2a-content"
                          id="panel2a-header"
                        >
                          <Typography variant="h5">Category 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div className="accordianContainer">
                            <Typography variant="p">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Suspendisse malesuada lacus ex, sit amet
                              blandit leo lobortis eget.
                            </Typography>
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
            <Back />
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
