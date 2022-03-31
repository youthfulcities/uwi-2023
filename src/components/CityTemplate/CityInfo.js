import React from "react";
import { useTranslation } from "react-i18next";

import { Card, Typography } from "@mui/material";

const CityInfo = ({ description }) => {
  const { t } = useTranslation();
  return (
    <>
      <Card sx={{ marginTop: "20px", position: "relative" }}>
        <div className="accordianContainer">
          <Typography variant="h3" mb={1}>
            {t("info")}
          </Typography>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </Card>
    </>
  );
};

export default CityInfo;
