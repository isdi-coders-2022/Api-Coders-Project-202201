import Cocktail from "./Cocktail";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given a Cocktail component", () => {
  describe("When it receives cocktail with 'Marta' as name", () => {
    test("Then it should display h2 with text 'Marta'", () => {
      const cocktail = {
        strDrink: "Marta",
        strDrinkThumb: "",
      };

      render(<Cocktail cocktail={cocktail} />);

      const h2 = screen.queryByRole("heading", { name: "Marta" });

      expect(h2).toBeInTheDocument();
    });
  });

  describe("When it receives cocktail with 'Mojito' as name", () => {
    test("Then it should display img with alt 'Mojito'", () => {
      const cocktail = {
        strDrink: "Marta",
        strDrinkThumb: "",
      };

      render(<Cocktail cocktail={cocktail} />);

      const alt = screen.queryByAltText("Marta");

      expect(alt).toBeInTheDocument();
    });
  });

  describe("When it's rendered'", () => {
    test("Then it should render a button", () => {
      const cocktail = {
        strDrink: "Marta",
        strDrinkThumb: "",
      };

      render(<Cocktail cocktail={cocktail} />);

      const button = screen.queryByRole("button");

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives an actionCard and a click", () => {
    test("Then it should execute the action", () => {
      const cocktail = {
        strDrink: "Marta",
        strDrinkThumb: "",
      };
      const actionOnClick = jest.fn();

      render(<Cocktail cocktail={cocktail} actionCard={actionOnClick} />);

      userEvent.click(screen.getByRole("img"));

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
