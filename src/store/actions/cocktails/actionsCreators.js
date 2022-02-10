import actionsTypes from "./actionsTypes";

export const loadCocktailsAction = (cocktails) => ({
  type: actionsTypes.loadCocktails,
  cocktails,
});

export const addCocktailAction = (cocktail) => ({
  type: actionsTypes.addCocktail,
  cocktail,
});
