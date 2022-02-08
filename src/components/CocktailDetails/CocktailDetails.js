import "./CocktailDetails.css";

const CocktailDetails = () => {
  const name = "Margarita";
  const imgURL =
    "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg";
  const category = "Ordinary Drink";
  const ingredients = "vodka, salt";
  const measure = "0/5, 0/5";
  const instructions =
    "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.";

  return (
    <section className="cocktail-description">
      <p className="cocktail-description__name">{name}</p>
      <div className="image-container">
        <img className="cocktail-description__image" src={imgURL} alt={name} />
      </div>
      <div className="description-container">
        <p className="cocktail-description__category">Category: {category}</p>
        <p className="cocktail-description__ingredients">
          Ingredient: {ingredients} {measure}
        </p>
        <p className="cocktail-description__instructions">
          Instractions: {instructions}
        </p>
      </div>
    </section>
  );
};

export default CocktailDetails;
