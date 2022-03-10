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

const Priorities = ({ handlePriorityChange, form, handleChange }) => {
  const topics = [
    "Education + Training",
    "Diversity + Inclusion + Accessibility",
    "Financial Services",
    "Transportation",
    "Employment",
    "Weather",
    "Entrepreneurship",
    "Health",
    "Public Built Space",
    "Law",
  ];

  const { priorities } = form;
  return (
    <>
      <Typography variant="h4" mt={2}>
        Let us know what's important to you. (Optional)
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
                Tap on the options that intrest you.
              </FormLabel>
              <FormGroup>
                <Grid
                  container
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                >
                  {topics.map((topic, i) => (
                    <Grid item xs={6} key={i}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={priorities.includes(topic)}
                            onChange={(e) => handlePriorityChange(e)}
                            name={topic}
                            size="large"
                          />
                        }
                        label={topic}
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
