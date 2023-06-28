import { Backdrop, Button, Fade, Modal, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
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

  return (
    <>
      <Button variant="contained" color="info" onClick={handleOpen}>
        Share my results
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
          </Paper>
        </Fade>
      </Modal>
    </>
  );
};

export default ShareModal;
