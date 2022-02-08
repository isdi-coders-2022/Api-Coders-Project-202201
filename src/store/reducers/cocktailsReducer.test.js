import actionsTypes from "../actions/cocktails/actionsTypes";
import cocktailsReducer from "./cocktailsReducer";

describe("Given a cocktailsReducer function", () => {
  describe("When it receives 'Absinthe #2' and 'Amaretto Liqueur' objects", () => {
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
});
