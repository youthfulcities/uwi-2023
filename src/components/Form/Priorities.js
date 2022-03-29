import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Grid,
  Button,
  FormGroup,
  FormControl,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import Category from "./Category";

const Priorities = ({
  handleChange,
  nextStep,
  categoryArray,
  cat,
  priorities,
  handlePriorityChange,
  measure,
  groupedPrioritiesArray,
  step,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h4" mt={2}>
        {t("profileImportant")}
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
                <Category
                  categoryArray={categoryArray}
                  cat={cat}
                  priorities={priorities}
                  handlePriorityChange={handlePriorityChange}
                  measure={measure}
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item mt={2}>
          <Link to="/suggested-cities">
            <Button
              variant="contained"
              size="large"
              color={
                groupedPrioritiesArray.length === step - 1
                  ? "success"
                  : "primary"
              }
              fullWidth={true}
              onClick={() => {
                groupedPrioritiesArray.length === step - 1
                  ? handleChange("completed", true)
                  : nextStep();
              }}
            >
              <Typography variant="h5">
                {groupedPrioritiesArray.length === step - 1
                  ? t("confirm")
                  : t("continue")}
              </Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Priorities;
