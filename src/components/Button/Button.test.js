import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";
import TestRenderer from "react-test-renderer";

describe("Given a Button component", () => {
  describe("When it receives 'star' as its type", () => {
    test("Then it should render a button", () => {
      const type = "star";

      render(<Button type={type} />);

      const buttonRender = screen.getByRole("button");

      expect(buttonRender).toBeInTheDocument();
    });
  });

  describe("When it receives 'simple' as its type", () => {
    test("Then it should render a button", () => {
      const type = "simple";

      render(<Button type={type} />);

      const buttonRender = screen.getByRole("button");

      expect(buttonRender).toBeInTheDocument();
    });
  });

  describe("When it receives an action and a click", () => {
    test("Then it should execute the action", () => {
      const actionOnClick = jest.fn();
      const type = "star";

      render(<Button type={type} action={actionOnClick} />);

      userEvent.click(screen.getByRole("button"));

      expect(actionOnClick).toHaveBeenCalled();
    });
  });

  describe("When it's rendered'", () => {
    test("Then it should always match this snapshot", () => {
      const renderedButton = TestRenderer.create(<Button />);
      expect(renderedButton).toMatchSnapshot();
    });
  });
});
