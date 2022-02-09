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
import CopyMe from "./CopyMe";

const Socials = ({ url }) => {
  // let { full } = url;
  let full = document.location.href;
  let title = document.title;

  return (
    <>
      <CopyMe url={full} />
      <EmailShareButton url={full} subject={title}>
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
      <FacebookShareButton url={full}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TelegramShareButton url={full} title={title}>
        <TelegramIcon size={32} round={true} />
      </TelegramShareButton>
      <TwitterShareButton url={full} title={title}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <WhatsappShareButton url={full} title={title} separator="—">
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
    </>
  );
};

export default Socials;
