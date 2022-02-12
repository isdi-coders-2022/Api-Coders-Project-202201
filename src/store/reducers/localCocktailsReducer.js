import actionsTypes from "../actions/cocktails/actionsTypes";

const localCocktailsReducer = (currentCocktails, action) => {
  let newCocktails;

  switch (action.type) {
    case actionsTypes.addCocktail:
      newCocktails = [...currentCocktails, action.cocktail];
      break;

    case actionsTypes.loadLocalCocktails:
      newCocktails = [...action.cocktails];
      break;

    case actionsTypes.deleteCocktail:
      newCocktails = currentCocktails.filter(
        (cocktail) => cocktail.idDrink !== action.id
      );
      break;

    default:
      newCocktails = [...currentCocktails];
  }
  return newCocktails;
};

export default localCocktailsReducer;
