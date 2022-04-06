import React from "react";
// import { useTranslation } from "react-i18next";
import { Button, Typography } from "@mui/material";

const Feedback = () => {
  // const { t } = useTranslation();
  return (
    <a href="https://www.google.ca/forms/about/">
      <Button variant="contained" color="primary" size="large" fullWidth={true}>
        <Typography variant="h5">Leave Feedback</Typography>
      </Button>
    </a>
  );
};

export default Feedback;
