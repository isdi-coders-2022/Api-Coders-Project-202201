import HomePage from "./HomePage";
import { render, screen } from "@testing-library/react";

import CocktailDataContextProvider from "../../store/contexts/CocktailDataContextProvider";
import { BrowserRouter } from "react-router-dom";

describe("Given a HomePage component", () => {
  describe("When it receives 'cocktails' and it's rendered", () => {
    test("Then it should display text 'Because everything starts with a drink , explore ours'", () => {
      const cocktails = [
        {
          strDrink: "Acocktail",
          strDrinkThumb: "",
          idDrink: "288888888",
        },
        {
          strDrink: "Acocktail2",
          strDrinkThumb: "",
          idDrink: "2888888881",
        },
      ];

      render(
        <BrowserRouter>
          <CocktailDataContextProvider value={cocktails}>
            <HomePage />
          </CocktailDataContextProvider>
        </BrowserRouter>
      );
      const expectedText =
        "Because everything starts with a drink , explore ours";

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });

    test("Then it should render a button with text 'Let's see'", () => {
      const cocktails = [
        {
          strDrink: "Acocktail",
          strDrinkThumb: "",
          idDrink: "288888888",
        },
        {
          strDrink: "Acocktail2",
          strDrinkThumb: "",
          idDrink: "2888888881",
        },
      ];

      render(
        <BrowserRouter>
          <CocktailDataContextProvider value={cocktails}>
            <HomePage />
          </CocktailDataContextProvider>
        </BrowserRouter>
      );
      const button = screen.queryByRole("button", { name: "Let's see" });

      expect(button).toBeInTheDocument();
    });

    test("Then it should display h2 with text 'Cocktails'", () => {
      const cocktails = [
        {
          strDrink: "Acocktail",
          strDrinkThumb: "",
          idDrink: "288888888",
        },
        {
          strDrink: "Acocktail2",
          strDrinkThumb: "",
          idDrink: "2888888881",
        },
      ];

      render(
        <BrowserRouter>
          <CocktailDataContextProvider value={cocktails}>
            <HomePage />
          </CocktailDataContextProvider>
        </BrowserRouter>
      );
      const h2 = screen.queryByRole("heading", { name: "Cocktails" });

      expect(h2).toBeInTheDocument();
    });

    test("Then it should display img with alt 'background-cocktails'", () => {
      const cocktails = [
        {
          strDrink: "Acocktail",
          strDrinkThumb: "",
          idDrink: "288888888",
        },
        {
          strDrink: "Acocktail2",
          strDrinkThumb: "",
          idDrink: "2888888881",
        },
      ];

      render(
        <BrowserRouter>
          <CocktailDataContextProvider value={cocktails}>
            <HomePage />
          </CocktailDataContextProvider>
        </BrowserRouter>
      );

      const alt = screen.queryByAltText("background-cocktails");

      expect(alt).toBeInTheDocument();
    });
  });
});
