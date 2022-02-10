import { useCallback, useContext } from "react";
import {
  addCocktailAction,
  loadCocktailsAction,
} from "../store/actions/cocktails/actionsCreators";
import CocktailDataContext from "../store/contexts/CocktailDataContext";

const useAPI = () => {
  const apiURL = process.env.REACT_APP_CATEGORIES;
  const { dispatch } = useContext(CocktailDataContext);
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
    const response = await fetch(localAPI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cocktail),
    });

    const newCocktail = response.json();
    dispatch(addCocktailAction(newCocktail));
  };

  return { loadCocktailsAPI, addCocktailAPI };
};

export default useAPI;
