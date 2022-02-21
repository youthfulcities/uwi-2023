import React from "react";

import { Typography, TextField, InputLabel, Grid, Button } from "@mui/material";

const FamilyMembers = ({
  handleFamilyMemberChange,
  addFamilyMembers,
  form,
  setForm,
}) => {
  return (
    <>
      <Typography variant="h4">
        Tell us a bit about your family so we can help find the best city for
        you.
      </Typography>
      <Grid
        container
        item
        direction="row"
        mt={2}
        spacing={1}
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Grid item flexGrow="2">
          <InputLabel shrink htmlFor="family-num">
            Number of people in your family
          </InputLabel>
          <TextField
            id="family-num"
            fullWidth={true}
            variant="outlined"
            label=""
            type="number"
            InputProps={{
              inputProps: {
                max: 20,
                min: 0,
              },
            }}
          ></TextField>
        </Grid>
        <Grid item>
          <Button
            sx={{ minWidth: 0 }}
            className="textRoundButton"
            variant="contained"
            color="primary"
            onClick={(e) => addFamilyMembers(e.target.value)}
          >
            <Typography variant="h5">Confirm</Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FamilyMembers;
