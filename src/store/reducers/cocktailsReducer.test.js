import actionsTypes from "../actions/cocktails/actionsTypes";
import cocktailsReducer from "./cocktailsReducer";

describe("Given a cocktailsReducer function", () => {
  describe("When it receives 'cocktails' with 'Absinthe #2' and 'Amaretto Liqueur' objects and 'loadCocktailsAction' action", () => {
    test("Then it should return 'Absinthe #2' and 'Amaretto Liqueur' objects", () => {
      const cocktails = [
        {
          strDrink: "Absinthe #2",
          strDrinkThumb: "",
          idDrink: "12790",
        },
        {
          strDrink: "Amaretto Liqueur",
          strDrinkThumb: "",
          idDrink: "12792",
        },
      ];
      const action = {
        type: actionsTypes.loadCocktailsAction,
      };
      const expectedCocktails = [
        {
          strDrink: "Absinthe #2",
          strDrinkThumb: "",
          idDrink: "12790",
        },
        {
          strDrink: "Amaretto Liqueur",
          strDrinkThumb: "",
          idDrink: "12792",
        },
      ];

      const cocktailsList = cocktailsReducer(cocktails, action);

      expect(cocktailsList).toEqual(expectedCocktails);
    });
  });

  describe("When it receives 'cocktails' with 'Absinthe #2' and 'Amaretto Liqueur' objects and 'doSomethingAction' action", () => {
    test("Then it should return an empty array", () => {
      const currentCocktails = [
        {
          strDrink: "Absinthe #2",
          strDrinkThumb: "",
          idDrink: "12790",
        },
        {
          strDrink: "Amaretto Liqueur",
          strDrinkThumb: "",
          idDrink: "12792",
        },
      ];
      const action = {
        type: actionsTypes.doSomethingAction,
      };
      const expectedCocktails = [
        {
          strDrink: "Absinthe #2",
          strDrinkThumb: "",
          idDrink: "12790",
        },
        {
          strDrink: "Amaretto Liqueur",
          strDrinkThumb: "",
          idDrink: "12792",
        },
      ];

      const cocktailsList = cocktailsReducer(currentCocktails, action);
      expect(cocktailsList).toEqual(expectedCocktails);
    });
  });
});
