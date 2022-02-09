import actionsTypes from "./actionsTypes";

export const loadCocktailsAction = (cocktails) => ({
  type: actionsTypes.loadCocktails,
  cocktails,
});
