// import { useTranslation } from "react-i18next";
import { Button, Typography } from "@mui/material";
import React from "react";

const Feedback = () => {
  // const { t } = useTranslation();
  return (
    <a href="https://form.jotform.com/220956393795269">
      <Button variant="contained" color="primary" size="large" fullWidth={true}>
        <Typography variant="h5">Leave Feedback</Typography>
      </Button>
    </a>
  );
};

export default Feedback;
