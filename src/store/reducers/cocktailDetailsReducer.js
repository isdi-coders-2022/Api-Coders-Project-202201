import actionsTypes from "../actions/cocktails/actionsTypes";

const cocktailDetailsReducer = (currentCocktail, action) => {
  let newCocktail;

  switch (action.type) {
    case actionsTypes.loadCocktailDetails:
      newCocktail = [...action.cocktail];
      break;

    default:
      newCocktail = [...currentCocktail];
      break;
  }

  return newCocktail;
};

export default cocktailDetailsReducer;
