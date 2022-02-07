import React from "react";
import { Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const PhotoButton = ({ city, src, alt, factoid, children }) => {
  const formattedNumber = (number) => {
    return number.toLocaleString();
  };

  return (
    <>
      <Link to={`/${city}`}>
        <div className="photoButtonContainer">
          <img className="photoButtonImg" src={src} alt={alt} />
          <Grid
            container
            sx={{ minHeight: "100px" }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography
                pl={5}
                color="#FFF"
                className="photoButtonText"
                variant="h2"
              >
                {children}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                pr={5}
                align="right"
                color="#FFF"
                className="smallPhotoButtonText"
                variant="h5"
              >
                Population: {formattedNumber(factoid)}
              </Typography>
            </Grid>
          </Grid>
          <div className="photoOverlay"></div>
        </div>
      </Link>
    </>
  );
};

export default PhotoButton;
