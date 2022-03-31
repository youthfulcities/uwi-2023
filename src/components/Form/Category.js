import React from "react";
import {
  Grid,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
  Chip,
} from "@mui/material";

const Category = ({
  categoryArray,
  cat,
  priorities,
  handlePriorityChange,
  handleRemoveAll,
  handleAddAll,
  measure,
}) => {
  return (
    <>
      <Grid item container xs={12} spacing={0} mt={1}>
        <Grid item xs={12} py={2} mt={2}>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <Typography variant="h3" mb={1}>
                {categoryArray[0][cat]}
              </Typography>
            </Grid>
            <Grid item>
              <Chip
                onClick={() => handleRemoveAll(categoryArray)}
                label="Clear all"
                sx={{
                  fontSize: "1.5rem",
                  marginBottom: 1,
                }}
              />
              <Chip
                label="Select all"
                onClick={() => handleAddAll(categoryArray)}
                sx={{
                  fontSize: "1.5rem",
                  marginLeft: 1,
                  marginBottom: 1,
                }}
              />
            </Grid>
          </Grid>
          <Divider />
        </Grid>
        {categoryArray.map((topic, i) => (
          <Grid item xs={12} key={i}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={priorities.includes(topic)}
                  onChange={(e) => handlePriorityChange(e)}
                  name={topic.name}
                  size="large"
                />
              }
              label={topic[measure]}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Category;
