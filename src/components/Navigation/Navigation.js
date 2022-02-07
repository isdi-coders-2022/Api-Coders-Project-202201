const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item home">
          <i className="fas fa-home navigation__icon"></i>
          <span className="navigation__text">Home</span>
        </li>

        <li className="navigation__item glass">
          <i className="fas fa-glass-martini-alt navigation__icon"></i>
          <span className="navigation__text">My Bar</span>
        </li>

        <li className="navigation__item add">
          <i className="fas fa-plus navigation__icon"></i>
          <span className="navigation__text">Create My Cocktail</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
