import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import TranslateIcon from "@mui/icons-material/Translate";
import {
  Box,
  Button,
  ClickAwayListener,
  Fab,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import i18next from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ChangeLang = ({
  languages,
  setCurrentLangCode,
  currentLangCode,
  textSize,
  setTextSize,
}) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

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
            <Tooltip title={t("languageTooltip")}>
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
              <>
                <Paper className="langMenu" id="language-menu" elevation={6}>
                  {languages.map(({ code, language }) => (
                    <Box
                      key={code}
                      onClick={() => {
                        i18next.changeLanguage(code);
                        setCurrentLangCode(code);
                        setTextSize(0);
                      }}
                      className={
                        currentLangCode === code
                          ? "langMenuItemWrapperDisabled"
                          : "langMenuItemWrapper"
                      }
                    >
                      <Typography
                        variant="h5"
                        className={
                          currentLangCode === code
                            ? "langMenuItemDisabled"
                            : "langMenuItem"
                        }
                      >
                        {language}
                      </Typography>
                    </Box>
                  ))}
                </Paper>
                <Fab
                  sx={{ position: "absolute" }}
                  color="primary"
                  size="medium"
                  className="textSizeButtonDecrease"
                  onClick={() => setTextSize(textSize - 1)}
                  disabled={textSize === 0}
                >
                  <RemoveIcon fontSize="large" />
                </Fab>
                <Fab
                  color="primary"
                  size="medium"
                  sx={{ position: "absolute" }}
                  className="textSizeButtonIncrease"
                  onClick={() => setTextSize(textSize + 1)}
                  disabled={
                    currentLangCode === "en" ? textSize === 6 : textSize === 8
                  }
                >
                  <AddIcon fontSize="large" />
                </Fab>
              </>
            )}
          </Box>
        </ClickAwayListener>
      </div>
    </>
  );
};

export default ChangeLang;
