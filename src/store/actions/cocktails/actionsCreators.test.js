import {
  addCocktailAction,
  loadCocktailsAction,
  loadLocalCocktailsAction,
} from "./actionsCreators";

describe("Given a cocktailsReducer function", () => {
  describe("When it receives 'Coffee Liqueur' and 'Coffee-Vodka' objects", () => {
    test("Then it should return 'Coffee Liqueur' and 'Coffee-Vodka' objects", () => {
      const cocktails = [
        {
          strDrink: "Coffee Liqueur",
          strDrinkThumb: "",
          idDrink: "12798",
        },
        {
          strDrink: "Coffee-Vodka",
          strDrinkThumb: "",
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

  describe("When it receives current cocktails and addCocktail action with 'Mojito'", () => {
    test("Then it should return a new current cocktails with 'Mojito' inside", () => {
      const cocktail = [
        {
          nombre: "Mojito",
          url: "",
          id: "3",
        },
      ];

      const expectedAction = {
        type: "add-cocktail",
        cocktail,
      };

      const action = addCocktailAction(cocktail);

      expect(action).toEqual(expectedAction);
    });
  });

  describe("When it receives 'Marta' and 'Luisa'", () => {
    test("Then it should return 'Marta' and 'Luisa' objects", () => {
      const cocktails = [
        {
          strDrink: "Marta",
          strDrinkThumb: "",
          idDrink: "1",
        },
        {
          strDrink: "Luisa",
          strDrinkThumb: "",
          idDrink: "2",
        },
      ];
      const expectedAction = {
        type: "load-local-cocktails",
        cocktails,
      };

      const action = loadLocalCocktailsAction(cocktails);

      expect(action).toEqual(expectedAction);
    });
  });
});
