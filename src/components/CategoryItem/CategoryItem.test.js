import { render, screen } from "@testing-library/react";
import CategoryItem from "./CategoryItem";

describe("Given a CategoryItem component", () => {
  describe("When it's rendered", () => {
    test("Then it should display the text passed", () => {
      const expectedText = "mojito";
      render(<CategoryItem category={expectedText} />);

      const renderedCategoryItem = screen.getByRole("heading", expectedText);

      expect(renderedCategoryItem).toBeInTheDocument();
    });
  });
});
