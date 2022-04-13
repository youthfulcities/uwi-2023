import CountertopsIcon from "@mui/icons-material/Countertops";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import HelpIcon from "@mui/icons-material/Help";
import HomeIcon from "@mui/icons-material/Home";
import KitchenIcon from "@mui/icons-material/Kitchen";
import MosqueIcon from "@mui/icons-material/Mosque";
import PaidIcon from "@mui/icons-material/Paid";
import PolicyIcon from "@mui/icons-material/Policy";
import SchoolIcon from "@mui/icons-material/School";
import StoreIcon from "@mui/icons-material/Store";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WorkIcon from "@mui/icons-material/Work";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Loading from "../../pages/Loading.js";
import FactCard from "../FactCard";

const Facts = ({
  resources,
  categories,
  subResources,
  currentLangCode,
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

  //this manually formats the number if current language is Dari, although if the user has their browser UI language set to Dari/Farsi then this should happen automatically so this isn't technically needed
  const formattedNumber = (number) => {
    if (currentLangCode === "fa") {
      const newNum = Number(number).toLocaleString("fa-AF");
      return newNum;
    }
    return Number(number).toLocaleString();
  };

  return (
    <>
      {(resources.length === 0 || categories.length === 0) && <Loading />}
      {
        <>
          <Grid container direction="row" spacing={2} alignItems="stretch">
            {categories.map(
              (category, i) =>
                filteredCategories.some((e) => e === category) &&
                subResources[category].map((resource, index) => (
                  <Grid
                    item
                    lg={3}
                    md={4}
                    sm={6}
                    xs={12}
                    sx={{
                      display:
                        resource.record.fields.value === 0 ? "none" : "block",
                    }}
                    key={"card-" + index}
                  >
                    <FactCard colour={colours[i]}>
                      {getIcon(category)}
                      <Typography
                        sx={{ wordBreak: "break-word" }}
                        mt={2}
                        variant="h5"
                        align="center"
                      >
                        {(currentLangCode === "fa"
                          ? resource.record.fields.edited_title_fa
                          : resource.record.fields.edited_title) ||
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
                          ? `$${formattedNumber(resource.record.fields.value)}`
                          : formattedNumber(resource.record.fields.value)}
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
                          ({t("moreInfo")})
                        </Typography>
                      </a>
                    </FactCard>
                  </Grid>
                ))
            )}
          </Grid>
        </>
      }
    </>
  );
};

export default Facts;
