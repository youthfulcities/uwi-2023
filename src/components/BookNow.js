import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Typography } from "@mui/material";

const BookNow = () => {
  const { t } = useTranslation();
  return (
    <a href="https://calendly.com/youthful-cities/city-consultation">
      <Button variant="contained" color="success" size="large">
        <Typography variant="h5">{t("book")}</Typography>
      </Button>
    </a>
  );
};

export default BookNow;
