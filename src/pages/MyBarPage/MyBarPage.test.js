import MyBarPage from "./MyBarPage";
import { render, screen } from "@testing-library/react";

describe("Given a MyBarPage component", () => {
  describe("When it's rendered'", () => {
    test("Then it should display a title 'My Bar'", () => {
      render(<MyBarPage />);
      const expectedText = "My Bar";

      const text = screen.queryByRole("heading", expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
