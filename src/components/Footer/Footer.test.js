import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import reactTestRenderer from "react-test-renderer";

describe("Given a Footer component", () => {
  describe("When it's rendered", () => {
    test("Then it should display link with text 'Company News', link with text 'About', link with text 'Service', link with text 'Join us on Social Media', link with text 'Service', link with text 'Cocktails'", () => {
      render(<Footer />);

      const anchorNews = screen.queryByRole("link", { name: "Company News" });
      const anchorAbout = screen.queryByRole("link", {
        name: "About",
      });
      const anchorService = screen.queryByRole("link", {
        name: "Service",
      });
      const anchorJoin = screen.queryByRole("link", {
        name: "Join us on Social Media",
      });
      const anchorCocktails = screen.queryByRole("link", {
        name: "Cocktails",
      });

      expect(anchorNews).toBeInTheDocument();
      expect(anchorAbout).toBeInTheDocument();
      expect(anchorService).toBeInTheDocument();
      expect(anchorJoin).toBeInTheDocument();
      expect(anchorCocktails).toBeInTheDocument();
    });
  });

  describe("When it's rendered'", () => {
    test("Then it should always match this snapshot", () => {
      const theFooter = reactTestRenderer.create(<Footer />);

      expect(theFooter.toJSON()).toMatchSnapshot();
    });
  });
});
