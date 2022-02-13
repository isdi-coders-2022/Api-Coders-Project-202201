import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";
import CocktailDataContextProvider from "./store/contexts/CocktailDataContextProvider";

describe("Given App component", () => {
  describe("When it's rendered", () => {
    test("Then it should contain a heading with text 'Cocktails'", () => {
      render(
        <CocktailDataContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CocktailDataContextProvider>
      );

      const title = screen.getByRole("heading", {
        level: 1,
        name: "Cocktails",
      });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When the user taps at 'Home' link", () => {
    test("Then it should be rendered 'Cocktails' heading in the page", () => {
      render(
        <CocktailDataContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CocktailDataContextProvider>
      );

      const link = screen.getByRole("link", { name: "Home" });
      userEvent.click(link);

      const title = screen.getByRole("heading", {
        level: 2,
        name: "Cocktails",
      });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When the user taps at 'My Bar' link", () => {
    test("Then it should be rendered 'My Bar' heading in the page", () => {
      render(
        <CocktailDataContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CocktailDataContextProvider>
      );

      const link = screen.getByRole("link", { name: "My Bar" });
      userEvent.click(link);

      const title = screen.getByRole("heading", { level: 2, name: "My Bar" });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When the user taps at 'Create My Cocktail' link", () => {
    test("Then it should be rendered 'Create a cocktail' heading in the page", () => {
      render(
        <CocktailDataContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CocktailDataContextProvider>
      );

      const link = screen.getByRole("link", { name: "Create My Cocktail" });
      userEvent.click(link);

      const title = screen.getByRole("heading", {
        level: 2,
        name: "Create a cocktail",
      });

      expect(title).toBeInTheDocument();
    });
  });
});
