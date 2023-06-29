import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import {
  Backdrop,
  Button,
  Fade,
  Grid,
  IconButton,
  Modal,
  Paper
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { saveAs } from 'file-saver';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ShareButton from './ShareButton';

const ShareModal = () => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [searchParams] = useSearchParams();
  const city = searchParams.get('city');

  const bigScreen = useMediaQuery(theme.breakpoints.up('sm'), {
    noSsr: true,
  });

  const style = {
    position: 'absolute',
    minWith: bigScreen ? 'calc(50% - 10px)' : '90%',
    width: bigScreen ? 'calc(50% - 10px)' : '98%',
    top: '50%',
    left: '50%',
    transform: 'translate(-51.25%, -50%)',
    backdropFilter: 'blur(3px)',
    background: 'rgba(255, 255, 255, 0.1)',
    alignSelf: 'flex-start',
    margin: '5px',
    padding: '10px',
    borderRadius: '12px',
  };

  const handleDownload = () => {
    saveAs(`./assets/images/share/${city}.png`, `best-work-city-${city}.png`);
  };

  return (
    <>
      <Button variant="contained" color="info" onClick={handleOpen}>
        Share my results
      </Button>
      <Modal
        aria-labelledby="Share image popup"
        aria-describedby={`Share image of ${city}`}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={open}>
          <Paper sx={style}>
            <Grid container justifyContent="flex-end" mb={1}>
              <Grid item mr={1}>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Grid>
            <img
              width="100%"
              src={`./assets/images/share/${city}.png`}
              alt=""
            />
            <Grid mt={1} container>
              <Grid item mr={1}>
                <ShareButton />
              </Grid>
              <Grid item>
                <IconButton
                  onClick={handleDownload}
                  size="large"
                  sx={{ backgroundColor: '#f9f9f9' }}>
                  <DownloadIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      </Modal>
    </>
  );
};

export default ShareModal;
