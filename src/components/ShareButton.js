import ShareIcon from '@mui/icons-material/Share';
import { IconButton } from '@mui/material';
import { saveAs } from 'file-saver';
import { useSearchParams } from 'react-router-dom';

const ShareButton = ({ size = 'large' }) => {
  const [searchParams] = useSearchParams();
  const city = searchParams.get('city');

  const url = window.location.origin;
  const title = 'My Best Work City';
  const text = city
    ? `My best work city is ${city}! What's yours?`
    : 'Find your best work city based on the results of the Urban Work Index 2023.';

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

    const shareDetails = city
      ? {
          files: filesArray,
          url,
          title,
          text,
        }
      : { url, title, text };

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
    <IconButton
      onClick={handleSharing}
      size={size}
      sx={{
        backgroundColor: '#f9f9f9',
        width: size === 'medium' ? '32px' : 'inherit',
        height: size === 'medium' ? '32px' : 'inherit',
      }}>
      <ShareIcon fontSize={size} />
    </IconButton>
  );
};

export default ShareButton;
