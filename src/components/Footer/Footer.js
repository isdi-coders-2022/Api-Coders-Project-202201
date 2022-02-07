import styled from "styled-components";

const Footer = () => {
  return (
    <ul className="links">
      <li className="links__social">
        <ul className="social-media">
          <li>
            <a
              className="social-media__fasebook media-icon"
              href="https://www.facebook.com/"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              className="social-media__twitter media-icon"
              href="https://twitter.com/"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              className="social-media__linked-in media-icon"
              href="https://www.linkedin.com"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              className="social-media__instagram media-icon"
              href="https://www.instagram.com"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              className="social-media__youtube media-icon"
              href="https://www.youtube.com"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </li>
      <li className="links__join">
        <a href="https://www.isdicoders.com">Join us on Social Media</a>
      </li>
      <li className="links__information">
        <ul className="information">
          <li>
            <a className="information__about" href="https://www.isdicoders.com">
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
            <a className="information__news" href="https://www.isdicoders.com">
              Company News
            </a>
          </li>
        </ul>
      </li>
      <li className="links__home">
        <a href="home">Cocktails</a>
      </li>
    </ul>
  );
};

export default Footer;
