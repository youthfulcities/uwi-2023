import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Grid,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import _ from "lodash";
import additionalInfo from "../../cityCalc/additionalInfo.js";

const Priorities = ({
  handlePriorityChange,
  form,
  handleChange,
  setPriorities,
}) => {
  const { priorities } = form;

  return (
    <>
      <Typography variant="h4" mt={2}>
        Let us know what's important to you. We've selected some already based
        on the ages and number of people in your family.
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
          <Grid item>
            <FormControl component="fieldset" variant="standard">
              <FormLabel component="legend">
                Tap on the options to select.
              </FormLabel>
              <FormGroup>
                <Grid
                  container
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                >
                  {additionalInfo.map((topic, i) => (
                    <Grid item xs={6} key={i}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={priorities.includes(topic)}
                            onChange={(e) => handlePriorityChange(e)}
                            name={topic.measurement}
                            size="large"
                          />
                        }
                        label={topic.measurement}
                      />
                    </Grid>
                  ))}
                </Grid>
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item mt={2}>
          <Link to="/suggested-cities">
            <Button
              variant="contained"
              size="large"
              color="primary"
              fullWidth={true}
              onClick={() => handleChange("completed", true)}
            >
              <Typography variant="h5">Confirm & Continue</Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Priorities;
