import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Category = ({
  categoryArray,
  cat,
  priorities,
  handlePriorityChange,
  handleRemoveAll,
  handleAddAll,
  measure,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Grid item container xs={12} spacing={0} mt={1}>
        <Grid item xs={12} py={2} mt={2}>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <Typography variant="h3" mb={1}>
                {categoryArray[0][cat]}
              </Typography>
            </Grid>
            <Grid item>
              <Chip
                onClick={() => handleRemoveAll(categoryArray)}
                disabled={
                  !categoryArray.some((item) => priorities.includes(item))
                }
                label={t("clear")}
                sx={{
                  fontSize: "1.5rem",
                  marginBottom: 1,
                  marginRight: 1,
                }}
                icon={<HighlightOffIcon />}
              />
              <Chip
                label={t("select")}
                disabled={categoryArray.every((item) =>
                  priorities.includes(item)
                )}
                onClick={() => handleAddAll(categoryArray)}
                sx={{
                  fontSize: "1.5rem",
                  marginBottom: 1,
                  marginRight: 1,
                }}
                icon={<CheckCircleIcon />}
              />
            </Grid>
          </Grid>
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
