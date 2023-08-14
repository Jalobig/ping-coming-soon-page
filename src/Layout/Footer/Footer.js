import React from "react";
import classes from "./Footer.module.scss";
import IconFacebook from "../../images/facebook.svg";
import IconTwitter from "../../images/twitter.svg";
import IconInstagram from "../../images/instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div className={classes.social}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className={classes.social__border}
        >
          <img
            src={IconFacebook}
            alt="Icon for Facebook"
            className={classes.social__icon}
          />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className={classes.social__border}
        >
          <img
            src={IconTwitter}
            alt="Icon for Twitter"
            className={classes.social__icon}
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className={classes.social__border}
        >
          <img
            src={IconInstagram}
            alt="Icon for Instagram"
            className={classes.social__icon}
          />
        </a>
      </div>
      <p className={classes.copyright}>
        &copy; Copyright Ping. All rights reserved.
      </p>
      <p className={classes.attribution}>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/Jalobig" rel="noreferrer" target="_blank">
          Jason Alexis
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
