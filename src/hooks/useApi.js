import { useCallback, useContext } from "react";
import {
  addCocktailAction,
  loadCocktailsAction,
} from "../store/actions/cocktails/actionsCreators";
import CocktailDataContext from "../store/contexts/CocktailDataContext";

const useAPI = () => {
  const apiURL = process.env.REACT_APP_CATEGORIES;
  let { dispatch, localDispatch, localCocktails } =
    useContext(CocktailDataContext);
  const localAPI = process.env.REACT_APP_LOCALAPI;

  const loadCocktailsAPI = useCallback(
    async (url) => {
      try {
        const response = await fetch(apiURL + url);
        const cocktails = await response.json();
        dispatch(loadCocktailsAction(cocktails.drinks));
      } catch (error) {}
    },
    [apiURL, dispatch]
  );

  const addCocktailAPI = async (cocktail) => {
    const favouriteCocktails = [...localCocktails, cocktail];

    const filteredFavorite = [
      ...new Map(
        favouriteCocktails.map((favoriteCocktail) => [
          favoriteCocktail.idDrink,
          favoriteCocktail,
        ])
      ).values(),
    ];

    const response = await fetch(localAPI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(filteredFavorite),
    });

    const newCocktail = await response.json();

    localDispatch(addCocktailAction(newCocktail));
  };

  return { loadCocktailsAPI, addCocktailAPI };
};

export default useAPI;
