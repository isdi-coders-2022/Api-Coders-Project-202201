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

    default:
      newCocktails = [...currentCocktails];
  }
  return newCocktails;
};

export default localCocktailsReducer;
