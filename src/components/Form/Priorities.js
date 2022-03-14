import React, { useEffect, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import {
  Typography,
  Grid,
  Button,
  FormGroup,
  Divider,
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import _ from "lodash";
import additionalInfo from "../../cityCalc/additionalInfo.js";

const groupedPrioritiesArray = Object.values(
  _.groupBy(additionalInfo, (item) => item.category)
);

const Priorities = ({
  handlePriorityChange,
  form,
  handleChange,
  setPriorities,
}) => {
  const { priorities } = form;

  useEffect(() => {
    setPriorities();
  }, []);

  return (
    <>
      <Typography variant="h4" mt={2}>
        Let us know what's important to you. We've selected some items already
        based on the ages and number of people in your family.
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
              <FormGroup>
                {groupedPrioritiesArray.map((categoryArray, i) => (
                  <Grid
                    item
                    container
                    xs={12}
                    spacing={2}
                    mt={1}
                    key={uuidv4()}
                  >
                    <Grid item xs={12} key={i} py={1} mt={2}>
                      <Typography variant="h3" mb={1}>
                        {categoryArray[0].category}
                      </Typography>
                      <Divider />
                    </Grid>
                    {categoryArray.map((topic, i) => (
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
                ))}
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
