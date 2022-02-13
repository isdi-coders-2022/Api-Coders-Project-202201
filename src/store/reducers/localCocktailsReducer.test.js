import localCocktailsReducer from "./localCocktailsReducer";

describe("Given a localCocktailsReducer component", () => {
  describe("When it receives 'cocktails' with 'Marta' and 'Luisa' objects and 'loadLocalCocktailsAction' action", () => {
    test("Then it should return 'Marta' and 'Luisa' objects", () => {
      const currentCocktails = [];

      const action = {
        type: "load-local-cocktails",
        cocktails: [
          {
            nombre: "Marta",
            url: "",
            id: "1",
          },
          {
            nombre: "Luisa",
            url: "",
            id: "2",
          },
        ],
      };

      const expectedCocktails = [
        {
          nombre: "Marta",
          url: "",
          id: "1",
        },
        {
          nombre: "Luisa",
          url: "",
          id: "2",
        },
      ];

      const cocktailsList = localCocktailsReducer(currentCocktails, action);

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

      const cocktailsList = localCocktailsReducer(currentCocktails, action);

      expect(cocktailsList).toEqual(expectedCocktails);
    });
  });

  describe("When it receives cocktails with 'Martha' and 'Luisa' and an action delete-cocktail with id '1'", () => {
    test("Then it should return 'Luisa'", () => {
      const currentCocktails = [
        {
          nombre: "Martha",
          url: "",
          idDrink: "1",
        },
        {
          nombre: "Luisa",
          url: "",
          idDrink: "2",
        },
      ];

      const action = {
        type: "delete-cocktail",
        id: "1",
      };

      const expectedCocktails = [
        {
          nombre: "Luisa",
          url: "",
          idDrink: "2",
        },
      ];

      const newCocktails = localCocktailsReducer(currentCocktails, action);

      expect(newCocktails).toEqual(expectedCocktails);
    });
  });

  describe("When it receives 'cocktails' with 'Marta' objects and 'addCocktail' action with 'Luiza'", () => {
    test("Then it should return 'Marta' and 'Luisa' objects", () => {
      const currentCocktails = [
        {
          nombre: "Marta",
          url: "",
          id: "1",
        },
      ];

      const action = {
        type: "add-cocktail",
        cocktail: {
          nombre: "Luisa",
          url: "",
          id: "2",
        },
      };

      const expectedCocktails = [
        {
          nombre: "Marta",
          url: "",
          id: "1",
        },
        {
          nombre: "Luisa",
          url: "",
          id: "2",
        },
      ];

      const cocktailsList = localCocktailsReducer(currentCocktails, action);

      expect(cocktailsList).toEqual(expectedCocktails);
    });
  });
});
