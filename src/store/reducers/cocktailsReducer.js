import actionsTypes from "../actions/cocktails/actionsTypes";

const cocktailsReducer = (currentCocktails, action) => {
  let newCocktails;

  switch (action.type) {
    case actionsTypes.loadCocktails:
      newCocktails = [...action.cocktails];
      break;
    case actionsTypes.addCocktail:
      newCocktails = [...currentCocktails, action.cocktail];
      break;
    default:
      newCocktails = [...currentCocktails];
  }
  return newCocktails;
};

export default cocktailsReducer;
