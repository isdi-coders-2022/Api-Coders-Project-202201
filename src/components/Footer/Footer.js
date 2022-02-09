import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const Links = styled.ul`
  @media (max-width: 600px) {
    display: none;
  }
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 2px solid rgb(170, 170, 170);
  width: 80vw;
  margin: 0;
  margin-left: 10vw;
  padding: 0;
  height: 80px;
  padding-top: 10px;
  font-size: 13px;
`;

const Information = styled.ul`
  padding: 0;
  list-style: none;
`;

const SocialMedia = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

const SocialNet = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  text-align: center;
  font-size: 18px;
`;

const Home = styled.li`
  font-family: "Sacramento", cursive;
  font-size: 40px;
  list-style: none;
`;

const Line = styled.li`
  height: 60%;
  border-left: 2px solid rgb(170, 170, 170);
  list-style: none;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: black;
`;

const Join = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 180px;
  height: 35px;
`;

const Li = styled.li`
  list-style: none;
`;

const Footer = () => {
  return (
    <footer className="footer">
      <Links className="links">
        <Li className="links__social">
          <SocialMedia className="social-media">
            <SocialNet>
              <Anchor
                className="social-media__fasebook media-icon"
                href="https://www.facebook.com/"
              >
                <FontAwesomeIcon className="social__icon" icon={faFacebookF} />
              </Anchor>
            </SocialNet>
            <SocialNet>
              <Anchor
                className="social-media__twitter media-icon"
                href="https://twitter.com/"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Anchor>
            </SocialNet>
            <SocialNet>
              <Anchor
                className="social-media__linked-in media-icon"
                href="https://www.linkedin.com"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Anchor>
            </SocialNet>
            <SocialNet>
              <Anchor
                className="social-media__instagram media-icon"
                href="https://www.instagram.com"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Anchor>
            </SocialNet>
            <SocialNet>
              <Anchor
                className="social-media__youtube media-icon"
                href="https://www.youtube.com"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </Anchor>
            </SocialNet>
          </SocialMedia>
        </Li>
        <Join className="links__join">
          <Anchor href="https://www.isdicoders.com">
            Join us on Social Media
          </Anchor>
        </Join>
        <Line className="line"></Line>
        <Li className="links__information">
          <Information className="information">
            <li>
              <Anchor
                className="information__about"
                href="https://www.isdicoders.com"
              >
                About
              </Anchor>
            </li>
            <li>
              <Anchor
                className="information__service"
                href="https://www.isdicoders.com"
              >
                Service
              </Anchor>
            </li>
            <li>
              <Anchor
                className="information__news"
                href="https://www.isdicoders.com"
              >
                Company News
              </Anchor>
            </li>
          </Information>
        </Li>
        <Home className="links__home">
          <Anchor href="home">Cocktails</Anchor>
        </Home>
      </Links>
    </footer>
  );
};

export default Footer;
