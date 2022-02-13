import cocktailDetailsReducer from "./cocktailDetailsReducer";

describe("Given a cocktailDetailsReducer function", () => {
  describe("When it receives cocktail and 'loadCocktailDetailsAction'", () => {
    test("Then it should return the cocktail", () => {
      const currentCocktail = [];

      const action = {
        type: "load-cocktail-details",
        cocktail: [
          {
            name: "Lord",
            id: 1,
            url: "",
          },
        ],
      };

      const expectedCocktail = [
        {
          name: "Lord",
          id: 1,
          url: "",
        },
      ];

      const cocktailDetails = cocktailDetailsReducer(currentCocktail, action);

      expect(cocktailDetails).toEqual(expectedCocktail);
    });
  });

  describe("When it receives cocktail and 'doSomethingAction' action", () => {
    test("Then it should return an currentCocktail", () => {
      const currentCocktail = [
        {
          name: "Castillian Hot Chocolate",
          url: "",
          id: "1",
        },
      ];
      const action = {
        type: "doSomething",
      };

      const expectedCocktail = [
        {
          name: "Castillian Hot Chocolate",
          url: "",
          id: "1",
        },
      ];

      const cocktailDetails = cocktailDetailsReducer(currentCocktail, action);

      expect(cocktailDetails).toEqual(expectedCocktail);
    });
  });
});
