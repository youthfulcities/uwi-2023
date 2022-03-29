import React from "react";
import {
  Grid,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const Category = ({
  categoryArray,
  cat,
  priorities,
  handlePriorityChange,
  measure,
}) => {
  return (
    <>
      <Grid item container xs={12} spacing={0} mt={1}>
        <Grid item xs={12} py={2} mt={2}>
          <Typography variant="h3" mb={1}>
            {categoryArray[0][cat]}
          </Typography>
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
