import HomePage from "./HomePage";
import { render, screen } from "@testing-library/react";

import CocktailDataContextProvider from "../../store/contexts/CocktailDataContextProvider";

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
        <CocktailDataContextProvider value={cocktails}>
          <HomePage />
        </CocktailDataContextProvider>
      );
      const expectedText =
        "Because everything starts with a drink , explore ours";

      const text = screen.queryByText(expectedText);

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
        <CocktailDataContextProvider value={cocktails}>
          <HomePage />
        </CocktailDataContextProvider>
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
        <CocktailDataContextProvider value={cocktails}>
          <HomePage />
        </CocktailDataContextProvider>
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
        <CocktailDataContextProvider value={cocktails}>
          <HomePage />
        </CocktailDataContextProvider>
      );

      const alt = screen.queryByAltText("background-cocktails");

      expect(alt).toBeInTheDocument();
    });
  });

  describe("When it's rendered", () => {
    test("Then it should render list of cocktails with titles '3-Mile Long Island Iced Tea' and '410 Gone'", async () => {
      render(
        <CocktailDataContextProvider>
          <HomePage />
        </CocktailDataContextProvider>
      );

      const cocktail1 = await screen.findByRole("heading", {
        name: "3-Mile Long Island Iced Tea",
      });
      const cocktail2 = await screen.findByRole("heading", {
        name: "410 Gone",
      });

      expect(cocktail1).toBeInTheDocument();
      expect(cocktail2).toBeInTheDocument();
    });
  });
});
