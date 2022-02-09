import React, { useState, useEffect } from "react";
import { Button, Typography, FilledInput } from "@mui/material";
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
      <FilledInput value={url} disableUnderline={true} readOnly />
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
      {copied && (
        <Typography color="#fff" variant="p">
          Copied!
        </Typography>
      )}
    </>
  );
};

export default CopyMe;
