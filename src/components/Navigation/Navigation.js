import "./Navigation.css";
import { Link } from "react-router-dom";
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
          <Link to="/home">
            <FontAwesomeIcon icon={faHouse} className="navigation__icon" />
            <span className="navigation__text">Home</span>
          </Link>
        </li>

        <li className="navigation__item glass">
          <Link to="/mybar">
            <FontAwesomeIcon
              icon={faGlassMartiniAlt}
              className="navigation__icon"
            />
            <span className="navigation__text">My Bar</span>
          </Link>
        </li>

        <li className="navigation__item add">
          <Link to="/mybar/new">
            <FontAwesomeIcon
              icon={faPlus}
              className="navigation__icon plusIcon"
            />
            <span className="navigation__text">Create My Cocktail</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
