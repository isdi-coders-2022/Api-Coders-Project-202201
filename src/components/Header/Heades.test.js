import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should display a title with text 'Cocktails'", () => {
      const expectedText = "Cocktails";

      render(<Header />);

      const title = screen.queryByText(expectedText);

      expect(title).toBeInTheDocument();
    });
  });
});
