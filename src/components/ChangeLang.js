import React, { useState } from "react";
import {
  Box,
  Tooltip,
  Button,
  ClickAwayListener,
  Paper,
  Typography,
} from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";

const ChangeLang = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="changeLang">
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <Tooltip title="Language settings">
              <Button
                sx={{ minWidth: 0, boxShadow: 6 }}
                variant="contained"
                color="secondary"
                onClick={handleClick}
                className="roundButton"
                aria-controls={open ? "language-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <TranslateIcon fontSize="large" />
              </Button>
            </Tooltip>
            {open && (
              <Paper className="langMenu" id="language-menu" elevation={6}>
                <Typography variant="h5" className="langMenuItem">
                  Profile
                </Typography>
              </Paper>
            )}
          </Box>
        </ClickAwayListener>
      </div>
    </>
  );
};

export default ChangeLang;
