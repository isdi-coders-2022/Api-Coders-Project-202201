import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When it's rendered", () => {
    test("Then it should display anchor with text 'Company News'", () => {
      render(<Footer />);

      const anchor = screen.queryByRole("link", { name: "Company News" });

      expect(anchor).toBeInTheDocument();
    });
  });
});
