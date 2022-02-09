import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should display links with 'Home' 'My Bar' and 'Create My Cocktail' as text", () => {
      render(<Navigation />);

      const navigationHome = screen.queryByRole("link", { name: "Home" });
      const navigationMyBar = screen.queryByRole("link", { name: "My Bar" });
      const navigationCreateMyCocktail = screen.queryByRole("link", {
        name: "Create My Cocktail",
      });

      expect(navigationHome).toBeInTheDocument();
      expect(navigationMyBar).toBeInTheDocument();
      expect(navigationCreateMyCocktail).toBeInTheDocument();
    });
  });
});
