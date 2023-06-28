import ShareIcon from '@mui/icons-material/Share';
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
    minWith: bigScreen ? 'calc(50% - 10px)' : '100%',
    width: bigScreen ? 'calc(50% - 10px)' : '100%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backdropFilter: 'blur(3px)',
    background: 'rgba(255, 255, 255, 0.1)',
    alignSelf: 'flex-start',
    margin: '5px',
    padding: '10px',
    borderRadius: '12px',
  };

  const url = window.location.origin;
  const title = 'Title';
  const text = 'Text';

  const handleDownload = () => {
    saveAs(`./assets/images/share/${city}.png`, `best-work-city-${city}.png`);
  };

  const handleSharing = async () => {
    const response = await fetch(`./assets/images/share/${city}.png`);
    const blob = await response.blob();

    const filesArray = [
      new File([blob], `${city}.png`, {
        type: 'image/jpeg',
        lastModified: new Date().getTime(),
      }),
    ];

    const shareDetails = {
      files: filesArray,
      url,
      title,
      text,
    };

    if (navigator.share) {
      try {
        await navigator
          .share(shareDetails)
          .then(() =>
            console.log('Hooray! Your content was shared to tha world')
          );
      } catch (error) {
        console.log(`Oops! I couldn't share to the world because: ${error}`);
      }
    } else {
      handleDownload();
      console.log('Web share is currently not supported on this browser.');
    }
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
            <img
              width="100%"
              src={`./assets/images/share/${city}.png`}
              alt=""
            />
            <Grid mt={1} container>
              <Grid item mr={1}>
                <IconButton
                  onClick={handleSharing}
                  size="large"
                  sx={{ backgroundColor: '#fff' }}>
                  <ShareIcon fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  onClick={handleDownload}
                  size="large"
                  sx={{ backgroundColor: '#fff' }}>
                  <ShareIcon fontSize="large" />
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
