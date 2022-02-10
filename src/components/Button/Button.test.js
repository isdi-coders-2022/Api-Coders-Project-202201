import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";
import TestRenderer from "react-test-renderer";

describe("Given a Button component", () => {
  describe("When it receives 'something' as its text", () => {
    test("Then it should render a button with 'something' as its text", () => {
      const text = "something";

      render(<Button text={text} />);

      const buttonRender = screen.getByRole("button", { name: text });

      expect(buttonRender).toBeInTheDocument();
    });
  });

  describe("When it receives an action and a click", () => {
    test("Then it should execute the action", () => {
      const actionOnClick = jest.fn();

      render(<Button actionOnClick={actionOnClick} />);

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
