import React from "react";
import { useTranslation } from "react-i18next";

import { Typography, TextField, InputLabel, Grid, Button } from "@mui/material";

const FamilyMembers = ({
  handleFamilyMemberChange,
  handleChange,
  addFamilyMembers,
  form,
}) => {
  const { family, numberOfPeople } = form;

  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h4" mt={2}>
        Tell us a bit about your family so we can help find the best city for
        you.
      </Typography>
      <Grid container direction="column" spacing={2}>
        <Grid
          container
          item
          direction="row"
          my={2}
          spacing={1}
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Grid item flexGrow="2">
            <InputLabel id="family-num-label" shrink htmlFor="family-num">
              Number of people in your family
            </InputLabel>
            <TextField
              id="family-num"
              name="numberOfPeople"
              aria-describedby="family-num-label"
              fullWidth={true}
              variant="outlined"
              label=""
              type="number"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              InputProps={{
                inputProps: {
                  max: 20,
                  min: 0,
                },
              }}
            />
          </Grid>
          <Grid item>
            <Button
              sx={{ minWidth: 0 }}
              className="textRoundButton"
              variant="contained"
              color="primary"
              onClick={() => addFamilyMembers(numberOfPeople)}
            >
              <Typography variant="h5">{t("confirm")}</Typography>
            </Button>
          </Grid>
        </Grid>
        {family.length > 0 &&
          family.map((member, i) => (
            <>
              <Grid item key={i}>
                <Grid item mb={1}>
                  <Typography variant="h3">Family member {i + 1}</Typography>
                </Grid>
                <Grid item>
                  <InputLabel
                    id={`family-age-label-${i}`}
                    shrink
                    htmlFor={`family-age-${i}`}
                  >
                    Age of family member
                  </InputLabel>
                  <TextField
                    id={`family-age-${i}`}
                    name="age"
                    aria-describedby={`family-age-label-${i}`}
                    fullWidth={true}
                    variant="outlined"
                    label=""
                    type="number"
                    onChange={(e) =>
                      handleFamilyMemberChange(e.target.name, e.target.value, i)
                    }
                    InputProps={{
                      inputProps: {
                        max: 20,
                        min: 0,
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </>
          ))}
      </Grid>
    </>
  );
};

export default FamilyMembers;
