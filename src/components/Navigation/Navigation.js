const Navigation = () => {
  return (
    <nav class="navigation">
      <ul class="navigation__list">
        <li class="navigation__item home">
          <i class="fas fa-home navigation__icon"></i>
          <span class="navigation__text">Home</span>
        </li>

        <li class="navigation__item glass">
          <i class="fas fa-glass-martini-alt navigation__icon"></i>
          <span class="navigation__text">My Bar</span>
        </li>

        <li class="navigation__item add">
          <i class="fas fa-plus navigation__icon"></i>
          <span class="navigation__text">Create My Cocktail</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
