import { useCallback, useContext } from "react";
import {
  addCocktailAction,
  loadCocktailsAction,
  loadLocalCocktailsAction,
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

  const loadLocalCocktailsAPI = useCallback(
    async (url) => {
      try {
        const response = await fetch(localAPI);
        const cocktails = await response.json();
        dispatch(loadLocalCocktailsAction(cocktails));
      } catch (error) {}
    },
    [localAPI, dispatch]
  );

  const addCocktailAPI = async (cocktail) => {
    if (
      localCocktails.some(
        (localCocktail) => localCocktail.idDrink === cocktail.idDrink
      )
    ) {
      return;
    }
    const response = await fetch(localAPI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cocktail),
    });

    const newCocktail = await response.json();

    localDispatch(addCocktailAction(newCocktail));
  };

  const deleteCocktailApi = async (id) =>
    fetch(`${localAPI}/${id}`, {
      method: "DELETE",
    });

  return {
    loadCocktailsAPI,
    addCocktailAPI,
    loadLocalCocktailsAPI,
    deleteCocktailApi,
  };
};

export default useAPI;
