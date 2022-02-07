const Footer = () => {
  return (
    <ul class="links">
      <li class="links__social">
        <ul class="social-media">
          <li>
            <a
              class="social-media__fasebook media-icon"
              href="https://www.facebook.com/"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              class="social-media__twitter media-icon"
              href="https://twitter.com/"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              class="social-media__linked-in media-icon"
              href="https://www.linkedin.com"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              class="social-media__instagram media-icon"
              href="https://www.instagram.com"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              class="social-media__youtube media-icon"
              href="https://www.youtube.com"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </li>
      <li class="links__join">
        <a href="https://www.isdicoders.com">Join us on Social Media</a>
      </li>
      <li class="links__information">
        <ul class="information">
          <li>
            <a class="information__about" href="https://www.isdicoders.com">
              About
            </a>
          </li>
          <li>
            <a class="information__service" href="https://www.isdicoders.com">
              Service
            </a>
          </li>
          <li>
            <a class="information__news" href="https://www.isdicoders.com">
              Company News
            </a>
          </li>
        </ul>
      </li>
      <li class="links__home">
        <a href="home">Cocktails</a>
      </li>
    </ul>
  );
};

export default Footer;
