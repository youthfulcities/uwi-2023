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
  FormHelperText,
  Checkbox,
} from "@mui/material";

const Priorities = ({ resetStep }) => {
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
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox name="gilad" size="large" />}
                      label="Gilad Gray"
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox name="gilad" size="large" />}
                      label="Gilad Gray"
                    />
                  </Grid>{" "}
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox name="gilad" size="large" />}
                      label="Gilad Gray"
                    />
                  </Grid>{" "}
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox name="gilad" size="large" />}
                      label="Gilad Gray"
                    />
                  </Grid>{" "}
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox name="gilad" size="large" />}
                      label="Gilad Gray"
                    />
                  </Grid>{" "}
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox name="gilad" size="large" />}
                      label="Gilad Gray"
                    />
                  </Grid>{" "}
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox name="gilad" size="large" />}
                      label="Gilad Gray"
                    />
                  </Grid>{" "}
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox name="gilad" size="large" />}
                      label="Gilad Gray"
                    />
                  </Grid>{" "}
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox name="gilad" size="large" />}
                      label="Gilad Gray"
                    />
                  </Grid>{" "}
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox name="gilad" size="large" />}
                      label="Gilad Gray"
                    />
                  </Grid>{" "}
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox name="gilad" size="large" />}
                      label="Gilad Gray"
                    />
                  </Grid>{" "}
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox name="gilad" size="large" />}
                      label="Gilad Gray"
                    />
                  </Grid>{" "}
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox name="gilad" size="large" />}
                      label="Gilad Gray"
                    />
                  </Grid>
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
              onClick={() => resetStep()}
              fullWidth={true}
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
