import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When it's rendered'", () => {
    test("Then it should display h2 with text 'Page not found'", () => {
      render(
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>
      );

      const h2 = screen.queryByRole("heading", { name: "Page not found" });

      expect(h2).toBeInTheDocument();
    });
  });

  test("Then it should render link with text 'home'", () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );

    const link = screen.queryByRole("link", { name: "home" });

    expect(link).toBeInTheDocument();
  });
});
