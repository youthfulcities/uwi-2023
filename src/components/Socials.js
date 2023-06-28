import { Grid } from '@mui/material';
import React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from 'react-share';

const Socials = ({ url }) => {
  // let { full } = url;
  // const current = document.location.href;

  const { title } = document;

  const full = 'https://bestworkcity.ca/';
  const separator = ' | ';
  const additional =
    'Use this site to find out what the best city in Canada is for you based on the Youthful Cities Urban Work Index 2023!';
  const source = 'Youthful Cities';

  return (
    <Grid container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row"
        spacing="1vh">
        <Grid item>
          <EmailShareButton
            url={full}
            subject={title}
            body={additional}
            separator={separator}>
            <EmailIcon size={32} round />
          </EmailShareButton>
        </Grid>
        <Grid item>
          <FacebookShareButton
            url={full}
            quote={additional}
            hashtag="#youthfulcities">
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </Grid>
        <Grid item>
          <TwitterShareButton url={full} title={title} via={source}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </Grid>
        <Grid item>
          <LinkedinShareButton
            url={full}
            title={title}
            summary={additional}
            source={source}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </Grid>
        <Grid item>
          <WhatsappShareButton url={full} title={title} separator={separator}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Socials;
