import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlassMartiniAlt,
  faHouse,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item home">
          <FontAwesomeIcon icon={faHouse} className="navigation__icon" />
          <span className="navigation__text">Home</span>
        </li>

        <li className="navigation__item glass">
          <FontAwesomeIcon
            icon={faGlassMartiniAlt}
            className="navigation__icon"
          />
          <span className="navigation__text">My Bar</span>
        </li>

        <li className="navigation__item add">
          <FontAwesomeIcon
            icon={faPlus}
            className="navigation__icon plusIcon"
          />
          <span className="navigation__text">Create My Cocktail</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
