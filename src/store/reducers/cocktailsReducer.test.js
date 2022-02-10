import cocktailsReducer from "./cocktailsReducer";

describe("Given a cocktailsReducer function", () => {
  describe("When it receives 'cocktails' with 'Castillian Hot Chocolate' and 'Chocolate Beverage' objects and 'loadCocktailsAction' action", () => {
    test("Then it should return 'Castillian Hot Chocolate' and 'Chocolate Beverage' objects", () => {
      const currentCocktails = [];

      const action = {
        type: "load-cocktails",
        cocktails: [
          {
            nombre: "Castillian Hot Chocolate",
            url: "",
            id: "1",
          },
          {
            nombre: "Chocolate Beverage",
            url: "",
            id: "2",
          },
        ],
      };

      const expectedCocktails = [
        {
          nombre: "Castillian Hot Chocolate",
          url: "",
          id: "1",
        },
        {
          nombre: "Chocolate Beverage",
          url: "",
          id: "2",
        },
      ];

      const cocktailsList = cocktailsReducer(currentCocktails, action);

      expect(cocktailsList).toEqual(expectedCocktails);
    });
  });

  describe("When it receives 'cocktails' with 'Castillian Hot Chocolate' and 'Chocolate Beverager' objects and 'doSomethingAction' action", () => {
    test("Then it should return an empty array", () => {
      const currentCocktails = [
        {
          nombre: "Castillian Hot Chocolate",
          url: "",
          id: "1",
        },
        {
          nombre: "Chocolate Beverage",
          url: "",
          id: "2",
        },
      ];
      const action = {
        type: "doSomething",
      };
      const expectedCocktails = [
        {
          nombre: "Castillian Hot Chocolate",
          url: "",
          id: "1",
        },
        {
          nombre: "Chocolate Beverage",
          url: "",
          id: "2",
        },
      ];

      const cocktailsList = cocktailsReducer(currentCocktails, action);

      expect(cocktailsList).toEqual(expectedCocktails);
    });
  });
});
