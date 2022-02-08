import CocktailDetails from "./CocktailDetails";
import { render, screen } from "@testing-library/react";

describe("Given a CocktailDetails component", () => {
  describe("When it receives name 'Margarita'", () => {
    test("Then it should display 'Margarita'", () => {
      render(<CocktailDetails />);
      const expectedText = "Margarita";

      const p = screen.queryByText(expectedText);

      expect(p).toBeInTheDocument();
    });
  });
});
