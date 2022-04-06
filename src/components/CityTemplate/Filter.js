import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CountertopsIcon from "@mui/icons-material/Countertops";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import HelpIcon from "@mui/icons-material/Help";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import HomeIcon from "@mui/icons-material/Home";
import KitchenIcon from "@mui/icons-material/Kitchen";
import MosqueIcon from "@mui/icons-material/Mosque";
import PaidIcon from "@mui/icons-material/Paid";
import PolicyIcon from "@mui/icons-material/Policy";
import SchoolIcon from "@mui/icons-material/School";
import StoreIcon from "@mui/icons-material/Store";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WorkIcon from "@mui/icons-material/Work";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Filter = ({
  categories,
  filteredCategories,
  setFilteredCategories,
  colours,
}) => {
  const [expanded, setExpanded] = useState(false);
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

  const handleClearAll = () => {
    setFilteredCategories([]);
  };

  const handleSelectAll = () => {
    setFilteredCategories(categories);
  };

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const getIcon = (category, suppliedColor) => {
    const color = suppliedColor || "#000";
    switch (category) {
      case "Community, Family, Wellness":
        return <FamilyRestroomIcon fontSize="large" sx={{ color: color }} />;
      case "Personal Banking and Financial Services":
        return <PaidIcon fontSize="large" sx={{ color: color }} />;
      case "Employment Services":
        return <WorkIcon fontSize="large" sx={{ color: color }} />;
      case "Education and Language Services":
        return <SchoolIcon fontSize="large" sx={{ color: color }} />;
      case "Clothing, Furniture, Food Bank and Home Services":
        return <KitchenIcon fontSize="large" sx={{ color: color }} />;
      case "Public Transportation":
        return <DirectionsBusIcon fontSize="large" sx={{ color: color }} />;
      case "Weather":
        return <ThermostatIcon fontSize="large" sx={{ color: color }} />;
      case "Starting a Business":
        return <StoreIcon fontSize="large" sx={{ color: color }} />;
      case "Home and Living":
        return <CountertopsIcon fontSize="large" sx={{ color: color }} />;
      case "Cost of Housing":
        return <HomeIcon fontSize="large" sx={{ color: color }} />;
      case "Ethnic Foods, Places of Worship, and Cultural":
        return <MosqueIcon fontSize="large" sx={{ color: color }} />;
      case "Legal Services":
        return <PolicyIcon fontSize="large" sx={{ color: color }} />;
      default:
        return <HelpIcon fontSize="large" />;
    }
  };

  return (
    <>
      <Accordion expanded={expanded} onChange={() => handleExpand()}>
        <AccordionSummary
          sx={{
            minHeight: 0,
            maxHeight: "35px",
            "&.Mui-expanded": {
              minHeight: 0,
            },
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4">Categories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid item>
            <Typography variant="h5" mt={2} mb={1} mx={2}>
              Click the categories to filter the fact cards
            </Typography>
            <Grid container mx={1} mb={1} spacing={1}>
              <Grid item>
                <Chip
                  onClick={() => handleClearAll()}
                  label="Clear all"
                  sx={{
                    fontSize: "1.5rem",
                  }}
                  disabled={filteredCategories.length === 0}
                  icon={<HighlightOffIcon />}
                />
              </Grid>
              <Grid item>
                <Chip
                  label="Select all"
                  onClick={() => handleSelectAll()}
                  sx={{
                    fontSize: "1.5rem",
                  }}
                  disabled={filteredCategories.length === categories.length}
                  icon={<CheckCircleIcon />}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <List
              sx={{
                width: "100%",
                bgcolor: "background.paper",
                borderBottomRightRadius: "35px",
                borderBottomLeftRadius: "35px",
              }}
            >
              {categories.map((category, i) => {
                const labelId = category;
                return (
                  <ListItem
                    key={i}
                    dense
                    onClick={() => handleChange(category)}
                    secondaryAction={
                      <Checkbox
                        edge="end"
                        size="medium"
                        inputProps={{ "aria-labelledby": labelId }}
                        onChange={() => handleChange(category)}
                        checked={filteredCategories.indexOf(category) !== -1}
                      />
                    }
                    disablePadding
                  >
                    <ListItemButton sx={{ borderRadius: "35px" }}>
                      <ListItemAvatar>{getIcon(category)}</ListItemAvatar>
                      <ListItemText id={labelId} primary={category} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Filter;
