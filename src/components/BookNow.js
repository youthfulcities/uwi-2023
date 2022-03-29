import React from "react";
import { Button, Typography } from "@mui/material";

const BookNow = () => {
  return (
    <a href="https://calendly.com/youthful-cities/city-consultation">
      <Button variant="contained" color="success" size="large">
        <Typography variant="h5">Book an appointment and learn more</Typography>
      </Button>
    </a>
  );
};

export default BookNow;
