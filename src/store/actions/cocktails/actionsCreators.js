import actionsTypes from "./actionsTypes";

export const loadCocktailsAction = (cocktails) => ({
  type: actionsTypes.loadCocktails,
  cocktails,
});

export const addCocktailAction = (cocktail) => ({
  type: actionsTypes.addCocktail,
  cocktail,
});

export const loadLocalCocktailsAction = (cocktails) => ({
  type: actionsTypes.loadLocalCocktails,
  cocktails,
});

export const deleteCocktailAction = (id) => ({
  type: actionsTypes.deleteCocktail,
  id,
});

export const loadCocktailDetailsAction = (cocktail) => ({
  type: actionsTypes.loadCocktailDetails,
  cocktail,
});
