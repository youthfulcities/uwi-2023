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
  nextStep,
  categoryArray,
  cat,
  priorities,
  handlePriorityChange,
  handleRemoveAll,
  handleAddAll,
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
                  handleRemoveAll={handleRemoveAll}
                  handleAddAll={handleAddAll}
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item mt={2}>
          {groupedPrioritiesArray.length === step - 1 ? (
            <Link to="/suggested-cities">
              <Button
                variant="contained"
                size="large"
                color="success"
                fullWidth={true}
              >
                <Typography variant="h5">{t("confirm")}</Typography>
              </Button>
            </Link>
          ) : (
            <Button
              variant="contained"
              size="large"
              color="primary"
              fullWidth={true}
              onClick={() => nextStep()}
            >
              <Typography variant="h5">{t("continue")}</Typography>
            </Button>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Priorities;
