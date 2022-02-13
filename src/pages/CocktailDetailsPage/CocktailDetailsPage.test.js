import { render, screen } from "@testing-library/react";
import CocktailDetailsPage from "./CocktailDetailsPage";

describe("Given a CocktailDetails component", () => {
  describe("When it receives cocktail 'Margarita'", () => {
    test("Then it should display h1 with text 'Margarita'", () => {
      const cocktail = {
        name: "Margarita",
        imgURL: "",
        category: "",
        ingredients: "",
        measure: "",
        instructions: "",
      };

      render(<CocktailDetailsPage cocktail={cocktail} />);

      const h1 = screen.queryByRole("heading", { name: "Margarita" });

      expect(h1).toBeInTheDocument();
    });
  });

  describe("When it receives cocktail with category 'Alcoholic'", () => {
    test("Then it should display p with text 'Category: Alcoholic'", () => {
      const cocktail = {
        name: "",
        imgURL: "",
        category: "Alcoholic",
        ingredients: "",
        measure: "",
        instructions: "",
      };

      render(<CocktailDetailsPage cocktail={cocktail} />);
      const paragraph = screen.getByText("Category: Alcoholic");

      expect(paragraph).toBeInTheDocument();
    });
  });

  describe("When it receives cocktail 'Mary'", () => {
    test("Then it should display img with alt 'Mary'", () => {
      const cocktail = {
        name: "Mary",
        imgURL: "",
        category: "",
        ingredients: "",
        measure: "",
        instructions: "",
      };

      render(<CocktailDetailsPage cocktail={cocktail} />);
      const alt = screen.queryByAltText("Mary");

      expect(alt).toBeInTheDocument();
    });
  });
});
