import React, { useState, useEffect } from "react";
import { Button, Typography, FilledInput, Grid } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyMe = ({ url }) => {
  const [copied, setCopied] = useState(false);

  //clears copy message after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <>
      <Grid
        container
        justifyContent="center"
        mb={1}
        alignItems="center"
        direction="row"
        spacing={1}
      >
        <Grid item>
          <FilledInput value={url} disableUnderline={true} readOnly />
        </Grid>
        <Grid item>
          <CopyToClipboard text={url} onCopy={() => setCopied(true)}>
            <Button
              color="primary"
              variant="contained"
              size="small"
              sx={{ minWidth: "100px" }}
            >
              <Typography color="#fff" variant="h5">
                Copy
              </Typography>
            </Button>
          </CopyToClipboard>
        </Grid>
        {copied && (
          <Grid item>
            <Typography className="textUnderlay" color="#fff" variant="p">
              Copied!
            </Typography>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default CopyMe;
