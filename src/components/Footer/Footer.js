import "./Footer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="links">
        <li className="links__social">
          <ul className="social-media">
            <li>
              <a
                className="social-media__fasebook media-icon"
                href="https://www.facebook.com/"
              >
                <FontAwesomeIcon className="social__icon" icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a
                className="social-media__twitter media-icon"
                href="https://twitter.com/"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a
                className="social-media__linked-in media-icon"
                href="https://www.linkedin.com"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a
                className="social-media__instagram media-icon"
                href="https://www.instagram.com"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                className="social-media__youtube media-icon"
                href="https://www.youtube.com"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
          </ul>
        </li>
        <li className="links__join">
          <a href="https://www.isdicoders.com">Join us on Social Media</a>
        </li>
        <li className="line"></li>
        <li className="links__information">
          <ul className="information">
            <li>
              <a
                className="information__about"
                href="https://www.isdicoders.com"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="information__service"
                href="https://www.isdicoders.com"
              >
                Service
              </a>
            </li>
            <li>
              <a
                className="information__news"
                href="https://www.isdicoders.com"
              >
                Company News
              </a>
            </li>
          </ul>
        </li>
        <li className="links__home">
          <a href="home">Cocktails</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
