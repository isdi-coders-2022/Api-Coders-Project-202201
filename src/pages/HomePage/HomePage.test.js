import HomePage from "./HomePage";
import { render, screen } from "@testing-library/react";

describe("Given a HomePage component", () => {
  describe("When it's rendered'", () => {
    test("Then it should display text 'Because everything starts with a drink , explore ours'", () => {
      render(<HomePage />);
      const expectedText =
        "Because everything starts with a drink , explore ours";

      const text = screen.queryByText(expectedText);

      expect(text).toBeInTheDocument();
    });

    test("Then it should render a button with text 'Let's see'", () => {
      render(<HomePage />);

      const button = screen.queryByRole("button", { name: "Let's see" });

      expect(button).toBeInTheDocument();
    });

    test("Then it should display h2 with text 'Cocktails'", () => {
      render(<HomePage />);

      const h2 = screen.queryByRole("heading", { name: "Cocktails" });

      expect(h2).toBeInTheDocument();
    });

    test("Then it should display img with alt 'background-cocktails'", () => {
      render(<HomePage />);

      const alt = screen.queryByAltText("background-cocktails");

      expect(alt).toBeInTheDocument();
    });
  });
});
