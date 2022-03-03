import React from "react";
import { useTranslation } from "react-i18next";

import {
  Typography,
  TextField,
  InputLabel,
  Grid,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const FamilyMembers = ({
  handleFamilyMemberChange,
  handleChange,
  addFamilyMembers,
  form,
  nextStep,
}) => {
  const { family, numberOfPeople } = form;

  const { t } = useTranslation();

  const allFieldsFilled = () => {
    if (family.length > 0 && family.every((member) => member.age.length > 0)) {
      return true;
    }
    return false;
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addFamilyMembers(numberOfPeople);
    }
  };

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
            <InputLabel id="family-num-label" htmlFor="family-num">
              Number of people in your family (including you)
            </InputLabel>
            <TextField
              id="family-num"
              name="numberOfPeople"
              aria-describedby="family-num-label"
              fullWidth={true}
              variant="outlined"
              label=""
              autoComplete="off"
              type="number"
              value={numberOfPeople}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onKeyDown={(e) => handleKeyPress(e)}
              InputProps={{
                inputProps: {
                  max: 15,
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
              <Grid item container spacing={3} direction="column" key={i}>
                <Grid item mt={2}>
                  <Typography variant="h3">
                    {member.name ||
                      (i === 0 ? "You" : `Family member ${i + 1}`)}
                  </Typography>
                </Grid>
                <Grid item>
                  <InputLabel
                    id={`family-name-label-${i}`}
                    htmlFor={`family-name-${i}`}
                  >
                    Give this family member a nickname (optional)
                  </InputLabel>
                  <TextField
                    id={`family-name-${i}`}
                    name="name"
                    label=""
                    fullWidth={true}
                    aria-labelledby={`family-name-label-${i}`}
                    aria-describedby={`family-name-label-${i}`}
                    value={member.name}
                    onChange={(e) =>
                      handleFamilyMemberChange(e.target.name, e.target.value, i)
                    }
                  />
                </Grid>
                <Grid item>
                  <FormControl>
                    <FormLabel id={`family-age-label-${i}`}>Age</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby={`family-age-label-${i}`}
                      aria-describedby={`family-age-label-${i}`}
                      value={family[i].age}
                      onChange={(e) =>
                        handleFamilyMemberChange(
                          e.target.name,
                          e.target.value,
                          i
                        )
                      }
                      id={`family-age-${i}`}
                      name="age"
                    >
                      <FormControlLabel
                        value="<12"
                        control={<Radio />}
                        label="0 - 12 years"
                      />
                      <FormControlLabel
                        value="13-18"
                        control={<Radio />}
                        label="13 - 18 years"
                      />
                      <FormControlLabel
                        value="19-35"
                        control={<Radio />}
                        label="19 - 35 years"
                      />
                      <FormControlLabel
                        value="36-65"
                        control={<Radio />}
                        label="36 - 65 years"
                      />
                      <FormControlLabel
                        value=">65"
                        control={<Radio />}
                        label="65+ years"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </>
          ))}
        <Grid item mt={2}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            disabled={!allFieldsFilled()}
            onClick={() => nextStep()}
            fullWidth={true}
          >
            <Typography variant="h5">Confirm & Continue</Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FamilyMembers;
