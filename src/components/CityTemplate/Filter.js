import React from "react";
import { Chip } from "@mui/material";
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

const Filter = ({
  categories,
  filteredCategories,
  setFilteredCategories,
  colours,
}) => {
  const handleChange = (category) => {
    if (filteredCategories.indexOf(category) === -1) {
      //add category
      setFilteredCategories([...filteredCategories, category]);
    } else {
      //find and remove category
      const oldCategories = filteredCategories;
      const newCategories = oldCategories.filter((cat) => cat !== category);
      setFilteredCategories(newCategories);
    }
  };

  console.log(filteredCategories);

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
      <div>Filter</div>
      <div>
        {categories.map((category, i) => (
          <Chip
            sx={{
              fontSize: "1.5rem",
              marginLeft: 1,
              marginBottom: 1,
              backgroundColor:
                filteredCategories.indexOf(category) !== -1
                  ? colours[i].background
                  : "grey",
              color:
                filteredCategories.indexOf(category) !== -1
                  ? colours[i].text
                  : "#000",
              "&:hover": {
                backgroundColor:
                  filteredCategories.indexOf(category) !== -1
                    ? colours[i].background
                    : "grey",
              },
            }}
            onClick={(e) => handleChange(e.target.innerText)}
            component="button"
            label={category}
            icon={getIcon(category)}
          />
        ))}
      </div>
    </>
  );
};

export default Filter;
