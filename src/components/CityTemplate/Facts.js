import React from "react";
import { useTranslation } from "react-i18next";
import { Typography, Grid } from "@mui/material";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import PaidIcon from "@mui/icons-material/Paid";
import HelpIcon from "@mui/icons-material/Help";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import KitchenIcon from "@mui/icons-material/Kitchen";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import StoreIcon from "@mui/icons-material/Store";
import CountertopsIcon from "@mui/icons-material/Countertops";
import MosqueIcon from "@mui/icons-material/Mosque";
import PolicyIcon from "@mui/icons-material/Policy";
import HomeIcon from "@mui/icons-material/Home";

import FactCard from "../FactCard";
import Loading from "../../pages/Loading.js";

const Facts = ({
  resources,
  categories,
  subResources,
  colours,
  filteredCategories,
}) => {
  const { t } = useTranslation();

  const getIcon = (category) => {
    switch (category) {
      case "Community, Family, Wellness":
        return <FamilyRestroomIcon fontSize="large" />;
      case "Personal Banking and Financial Services":
        return <PaidIcon fontSize="large" />;
      case "Employment Services":
        return <WorkIcon fontSize="large" />;
      case "Education and Language Services":
        return <SchoolIcon fontSize="large" />;
      case "Clothing, Furniture, Food Bank and Home Services":
        return <KitchenIcon fontSize="large" />;
      case "Public Transportation":
        return <DirectionsBusIcon fontSize="large" />;
      case "Weather":
        return <ThermostatIcon fontSize="large" />;
      case "Starting a Business":
        return <StoreIcon fontSize="large" />;
      case "Home and Living":
        return <CountertopsIcon fontSize="large" />;
      case "Cost of Housing":
        return <HomeIcon fontSize="large" />;
      case "Ethnic Foods, Places of Worship, and Cultural":
        return <MosqueIcon fontSize="large" />;
      case "Legal Services":
        return <PolicyIcon fontSize="large" />;
      default:
        return <HelpIcon fontSize="large" />;
    }
  };

  return (
    <>
      {(resources.length === 0 ||
        categories.length === 0 ||
        subResources.length === 0) && <Loading />}
      {categories && categories.length === 0 ? (
        <Grid item className="accordianContainer">
          <Typography variant="body1">{t("noneFound")}</Typography>
        </Grid>
      ) : (
        <>
          <Grid container direction="row" spacing={2} alignItems="stretch">
            {categories.map(
              (category, i) =>
                filteredCategories.some((e) => e === category) &&
                subResources[category].map((resource, index) => (
                  <Grid item lg={3} md={4} sm={6} xs={12} key={"card-" + index}>
                    <FactCard colour={colours[i]}>
                      {getIcon(category)}
                      <Typography
                        sx={{ wordBreak: "break-word" }}
                        mt={2}
                        variant="h5"
                        align="center"
                      >
                        {resource.record.fields.edited_title ||
                          resource.record.fields.measurement_en}
                      </Typography>
                      {(resource.record.fields.comment ||
                        resource.record.fields.noteen ||
                        resource.record.fields.measureable_value) && (
                        <Typography
                          m={1}
                          variant="body1"
                          align="center"
                          sx={{ wordBreak: "break-word" }}
                        >
                          (
                          {resource.record.fields.comment &&
                          resource.record.fields.noteen
                            ? `${resource.record.fields.comment}, ${
                                resource.record.fields.noteen ||
                                resource.record.fields.measureable_value
                              }`
                            : `${
                                resource.record.fields.comment ||
                                resource.record.fields.noteen ||
                                resource.record.fields.measureable_value
                              }`}
                          )
                        </Typography>
                      )}
                      <Typography
                        m={2}
                        variant="h2"
                        align="center"
                        color={colours[i].text}
                      >
                        {resource.record.fields.measureable_value ===
                        "dollar value"
                          ? `$${resource.record.fields.value.toLocaleString()}`
                          : resource.record.fields.value.toLocaleString()}
                      </Typography>

                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={
                          resource.record.fields.url ||
                          `https://pivothub.youthfulcities.com/explore/dataset/resource-data/table/?q=${
                            resource.record.fields.sheet_title ||
                            resource.record.fields.indicator_en
                          }`
                        }
                      >
                        <Typography
                          variant="body2"
                          align="center"
                          sx={{
                            wordBreak: "break-word",
                            textDecoration: "underline",
                          }}
                          color={colours[i].text}
                        >
                          (More information)
                        </Typography>
                      </a>
                    </FactCard>
                  </Grid>
                ))
            )}
          </Grid>
        </>
      )}
    </>
  );
};

export default Facts;
