import MyBarPage from "./MyBarPage";
import { render, screen } from "@testing-library/react";
import CocktailDataContextProvider from "../../store/contexts/CocktailDataContextProvider";

describe("Given a MyBarPage component", () => {
  describe("When it receives 'cocktails' and it's rendered'", () => {
    test("Then it should display a title 'My Bar'", () => {
      const cocktails = [
        {
          strDrink: "Monica",
          strDrinkThumb: "",
          idDrink: "1",
        },
        {
          strDrink: "Menchu",
          strDrinkThumb: "",
          idDrink: "2",
        },
      ];

      render(
        <CocktailDataContextProvider value={cocktails}>
          <MyBarPage />
        </CocktailDataContextProvider>
      );
      const expectedText = "My Bar";

      const text = screen.queryByRole("heading", expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
