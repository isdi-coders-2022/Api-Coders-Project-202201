import actionsTypes from "../actions/cocktails/actionsTypes";

const cocktailsReducer = (currentCocktails, action) => {
  let newCocktails;

  switch (action.type) {
    case actionsTypes.loadCocktails:
      newCocktails = [...action.cocktails];
      break;
    default:
      newCocktails = [...currentCocktails];
  }
  return newCocktails;
};

export default cocktailsReducer;
