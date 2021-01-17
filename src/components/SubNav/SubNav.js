import React from "react";
// import ShareButtons from "react-share";
import "./subNav.scss";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

function SubNav() {
  const url = "https://ericdimechsummer2021webdevchallenge.netlify.app/";
  const quote = "Check out my nominations for The Shoppies Awards!";
  const hashtag = "TheShoppies";
  return (
    <div className="socials">
      <h3 className="socials__title">Feelin' Social?!</h3>
      <div className="socials__wrap">
        <FacebookShareButton
          url={url}
          quote={quote}
          hashtag={hashtag}
          className="socials__icon"
        >
          <FacebookIcon size={56} />
        </FacebookShareButton>

        <TwitterShareButton
          url={url}
          quote={quote}
          hashtag={hashtag}
          className="socials__icon"
        >
          <TwitterIcon size={56} />
        </TwitterShareButton>

        <LinkedinShareButton
          url={url}
          quote={quote}
          hashtag={hashtag}
          className="socials__icon"
        >
          <LinkedinIcon size={56} />
        </LinkedinShareButton>
      </div>
    </div>
  );
}

export default SubNav;
