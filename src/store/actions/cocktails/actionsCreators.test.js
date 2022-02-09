import { loadCocktailsAction } from "./actionsCreators";

describe("Given a cocktailsReducer function", () => {
  describe("When it receives 'Absinthe #2' and 'Amaretto Liqueur' objects", () => {
    test("Then it should return 'Absinthe #2' and 'Amaretto Liqueur' objects", () => {
      const cocktails = [
        {
          strDrink: "Coffee Liqueur",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/ryvtsu1441253851.jpg",
          idDrink: "12798",
        },
        {
          strDrink: "Coffee-Vodka",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/qvrrvu1472667494.jpg",
          idDrink: "12800",
        },
      ];
      const expectedAction = {
        type: "load-cocktails",
        cocktails,
      };

      const action = loadCocktailsAction(cocktails);

      expect(action).toEqual(expectedAction);
    });
  });
});
