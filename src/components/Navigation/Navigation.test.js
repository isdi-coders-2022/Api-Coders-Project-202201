import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a link with 'Home' as text", () => {
      render(<Navigation />);

      const navigation = screen.queryByRole("link", { name: "Home" });

      expect(navigation).toBeInTheDocument();
    });
  });
});
