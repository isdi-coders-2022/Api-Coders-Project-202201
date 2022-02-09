import { render, screen } from "@testing-library/react";
import Button from "./Button";
import reactTestRenderer from "react-test-renderer";

describe("Given a Button component", () => {
  describe("When it's rendered", () => {
    test("Then it should display the text passed", () => {
      const expectedText = "Let's see";
      render(<Button text={expectedText} />);

      const renderedButton = screen.getByText(expectedText);

      expect(renderedButton).toBeInTheDocument();
    });
  });
  describe("When it get's passed a function", () => {
    test("Then it should call that function", () => {
      const defaultText = "Let's see";
      const calledFunction = jest.fn();

      render(<Button text={defaultText} action={calledFunction} />);

      const renderedButton = screen.getByText(defaultText);

      renderedButton.click();

      expect(calledFunction).toHaveBeenCalled();
    });
  });
});

it("renders consistently , equal to the snapshot", () => {
  const theButton = reactTestRenderer.create(<Button />);

  expect(theButton.toJSON()).toMatchSnapshot();
});
