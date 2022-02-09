import { useCallback, useContext } from "react";
import { loadCocktailsAction } from "../store/actions/cocktails/actionsCreators";
import CocktailDataContext from "../store/contexts/CocktailDataContext";

const useAPI = (url) => {
  const apiURL =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=cocoa";
  const { dispatch } = useContext(CocktailDataContext);

  const loadCocktailsAPI = useCallback(async () => {
    try {
      const response = await fetch(apiURL);
      const cocktails = await response.json();
      dispatch(loadCocktailsAction(cocktails));
    } catch (error) {}
  }, [apiURL, dispatch]);

  return { loadCocktailsAPI };
};

export default useAPI;
