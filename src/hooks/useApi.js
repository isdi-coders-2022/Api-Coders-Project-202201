import { useCallback, useContext } from "react";
import {
  addCocktailAction,
  deleteCocktailAction,
  loadCocktailDetailsAction,
  loadCocktailsAction,
  loadLocalCocktailsAction,
} from "../store/actions/cocktails/actionsCreators";
import CocktailDataContext from "../store/contexts/CocktailDataContext";

const useAPI = () => {
  const apiURL = `${process.env.REACT_APP_CATEGORIES}`;
  const localAPI = `${process.env.REACT_APP_LOCALAPI}`;

  const { dispatch, localDispatch, localCocktails, cocktailDetailsDispatch } =
    useContext(CocktailDataContext);

  const loadCocktailsAPI = useCallback(
    async (url) => {
      try {
        const response = await fetch(`${apiURL}${url}`);
        const cocktails = await response.json();
        dispatch(loadCocktailsAction(cocktails.drinks));
      } catch (error) {}
    },
    [apiURL, dispatch]
  );

  const loadLocalCocktailsAPI = useCallback(async () => {
    try {
      const response = await fetch(localAPI);
      const cocktails = await response.json();
      localDispatch(loadLocalCocktailsAction(cocktails));
    } catch (error) {}
  }, [localAPI, localDispatch]);

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

    const newCocktail = response.json();

    localDispatch(addCocktailAction(newCocktail));
  };

  const deleteCocktailApi = async (id) => {
    const response = await fetch(`${localAPI}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      localDispatch(deleteCocktailAction(id));
    }
  };

  const loadCocktailDetailsAPI = useCallback(
    async (endPoint) => {
      try {
        const response = await fetch(`${apiURL}lookup.php?i=${endPoint}`);
        const cocktail = await response.json();
        cocktailDetailsDispatch(loadCocktailDetailsAction(cocktail.drinks[0]));
      } catch (error) {}
    },
    [apiURL, cocktailDetailsDispatch]
  );

  return {
    loadCocktailsAPI,
    addCocktailAPI,
    loadLocalCocktailsAPI,
    deleteCocktailApi,
    loadCocktailDetailsAPI,
  };
};

export default useAPI;
