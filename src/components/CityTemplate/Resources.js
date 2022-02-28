import React from "react";

import { useTranslation } from "react-i18next";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Search from "./Search";
import FactCard from "../FactCard";
import ResourceCard from "./ResourceCard";

const Resources = ({
  setSearchString,
  searchString,
  createStringQuery,
  setSearchStringQuery,
  subResources,
  resources,
}) => {
  const { t } = useTranslation();
  return (
    <Accordion
      sx={{
        "&.Mui-expanded": {
          background: "#FBD166",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon fontSize="large" />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography variant="h3">{t("resources")}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Search
          setSearchString={setSearchString}
          searchString={searchString}
          createStringQuery={createStringQuery}
          setSearchStringQuery={setSearchStringQuery}
        />
        {subResources && subResources.flat().length === 1 ? (
          <div className="accordianContainer">
            <Typography variant="body1">{t("noneFound")}</Typography>
          </div>
        ) : (
          <div>
            {resources !== undefined &&
              resources.map((resource, i) => {
                return (
                  <>
                    {subResources &&
                    subResources[i] !== undefined &&
                    subResources[i].length > 0 ? (
                      <Accordion
                        sx={{
                          "&:last-of-type": {
                            borderRadius: 0,
                          },
                          background: "#E8E8E8",
                          "&.Mui-expanded": {
                            background: "#4F66AF",
                            color: "#fff",
                          },
                        }}
                        square={i === resources.length - 1 ? false : true}
                        disableGutters={true}
                        key={`panel-resources-${i}a`}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon fontSize="large" />}
                          aria-controls={`panel-resources-${i}a-content`}
                          id={`panel-resources-${i}a-header`}
                        >
                          <Typography variant="h5">
                            {resource.record.fields.measurement}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {subResources &&
                            subResources[i].map((subResource, index) => (
                              <div className="accordianContainer">
                                <Grid container spacing={2} direction="column">
                                  <Grid item>
                                    <ResourceCard
                                      phone={subResource.record.fields.phone}
                                      address={
                                        subResource.record.fields.address
                                      }
                                      name={subResource.record.fields.name}
                                      email={subResource.record.fields.email}
                                      url={subResource.record.fields.url}
                                    />
                                  </Grid>
                                </Grid>
                              </div>
                            ))}
                        </AccordionDetails>
                      </Accordion>
                    ) : null}
                  </>
                );
              })}
          </div>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

//nested accordian
{
  /* <Accordion
sx={{
  background: "#DCDCDC",
  "&.Mui-expanded": {
    background: "#B8D98D",
  },
}}
square={
  index === resources.length - 1 ? false : true
}
disableGutters={true}
key={`panel-resources-${index}b`}
>
<AccordionSummary
  sx={{
    marginLeft: 5,
  }}
  expandIcon={
    <ExpandMoreIcon fontSize="large" />
  }
  aria-controls={`panel-resources-${index}b-content`}
  id={`panel-resources-${index}b-header`}
>
  <Typography variant="h5">
    {subResource.record.fields.measurement_en}
  </Typography>
</AccordionSummary>
<AccordionDetails>
  {
    <div className="accordianContainer">
      <Grid
        container
        spacing={2}
        direction="column"
      >
        <Grid item>
          <FactCard>
            {subResource.record.fields.value}
          </FactCard>
        </Grid>
        <Grid item>
          <ResourceCard />
        </Grid>
      </Grid>
    </div>
  }
</AccordionDetails>
</Accordion> */
}

export default Resources;
