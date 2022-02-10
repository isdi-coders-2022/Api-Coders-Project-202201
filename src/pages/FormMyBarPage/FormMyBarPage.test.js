import { render, screen } from "@testing-library/react";
import FormMyBarPage from "./FormMyBarPage";

describe("Given a FormMyBarPage component", () => {
  describe("When instantiated", () => {
    test("Then it should render a heading", () => {
      render(<FormMyBarPage />);

      const heading = screen.getByRole("heading");

      expect(heading).toBeInTheDocument();
    });

    test("Then it should render a checkbox", () => {
      render(<FormMyBarPage />);

      const checkbox = screen.getByRole("checkbox");

      expect(checkbox).toBeInTheDocument();
    });
  });
});
