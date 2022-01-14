import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const Socials = ({ url }) => {
  let { full } = url;
  let title = document.title;

  return (
    <>
      <EmailShareButton url={full} subject={title}>
        <EmailIcon size={32} round={false} />
      </EmailShareButton>
      <FacebookShareButton url={full}>
        <FacebookIcon size={32} round={false} />
      </FacebookShareButton>
      <RedditShareButton url={full} title={title}>
        <RedditIcon size={32} round={false} />
      </RedditShareButton>
      <TelegramShareButton url={full} title={title}>
        <TelegramIcon size={32} round={false} />
      </TelegramShareButton>
      <TwitterShareButton url={full} title={title}>
        <TwitterIcon size={32} round={false} />
      </TwitterShareButton>
      <WhatsappShareButton url={full} title={title} separator="—">
        <WhatsappIcon size={32} round={false} />
      </WhatsappShareButton>
    </>
  );
};

export default Socials;
