import { Button, FilledInput, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useTranslation } from 'react-i18next';

const CopyMe = ({ url }) => {
  const [copied, setCopied] = useState(false);

  // clears copy message after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  const { t } = useTranslation();

  return (
    <Grid
      container
      justifyContent="center"
      mb={1}
      alignItems="center"
      direction="row"
      spacing={1}>
      <Grid item>
        <FilledInput value={url} disableUnderline readOnly />
      </Grid>
      <Grid item>
        <CopyToClipboard text={url} onCopy={() => setCopied(true)}>
          <Button
            color="primary"
            variant="contained"
            size="small"
            sx={{ minWidth: '100px' }}>
            <Typography color="#fff" variant="h5">
              {t('copy')}
            </Typography>
          </Button>
        </CopyToClipboard>
      </Grid>
      {copied && (
        <Grid item>
          <Typography className="textUnderlay" color="#fff" variant="body1">
            {t('copied')}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default CopyMe;
