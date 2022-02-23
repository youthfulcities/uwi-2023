import React from "react";

import { useTranslation } from "react-i18next";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
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
            <Typography variant="p">{t("noneFound")}</Typography>
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
                            {resource.record.fields.indicator_en}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {subResources &&
                            subResources[i].map((subResource, index) => (
                              <Accordion
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
                                      <FactCard>
                                        {subResource.record.fields.value}
                                      </FactCard>
                                      <ResourceCard />
                                    </div>
                                  }
                                </AccordionDetails>
                              </Accordion>
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

export default Resources;
