import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should display links with 'Home' 'My Bar' and 'Create My Cocktail' as text", () => {
      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );

      const navigationHome = screen.getByRole("link", { name: "Home" });
      const navigationMyBar = screen.getByRole("link", { name: "My Bar" });
      const navigationCreateMyCocktail = screen.getByRole("link", {
        name: "Create My Cocktail",
      });

      expect(navigationHome).toBeInTheDocument();
      expect(navigationMyBar).toBeInTheDocument();
      expect(navigationCreateMyCocktail).toBeInTheDocument();
    });
  });

  describe("When it's rendered'", () => {
    test("Then it should always match this snapshot", () => {
      const renderedNavigation = TestRenderer.create(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );

      expect(renderedNavigation).toMatchSnapshot();
    });
  });
});
