import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PhotoButton = ({ city, src, alt, children }) => {
  return (
    <>
      <Link to={`/${city}`}>
        <div className="photoButtonContainer">
          <img className="photoButtonImg" src={src} alt={alt} />
          <Typography color="#FFF" className="photoButtonText" variant="h2">
            {children}
          </Typography>
          <div className="photoOverlay"></div>
        </div>
      </Link>
    </>
  );
};

export default PhotoButton;