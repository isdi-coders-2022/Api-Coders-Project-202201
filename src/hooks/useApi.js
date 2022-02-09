import { useCallback, useContext } from "react";
import { loadCocktailsAction } from "../store/actions/cocktails/actionsCreators";
import CocktailDataContext from "../store/contexts/CocktailDataContext";

const useAPI = () => {
  const apiURL = process.env.REACT_APP_CATEGORIES;
  const { dispatch } = useContext(CocktailDataContext);

  const loadCocktailsAPI = useCallback(
    async (url) => {
      try {
        const response = await fetch(apiURL + url);
        const cocktails = await response.json();
        dispatch(loadCocktailsAction(cocktails));
      } catch (error) {}
    },
    [apiURL, dispatch]
  );

  return { loadCocktailsAPI };
};

export default useAPI;
