import { render, screen } from "@testing-library/react";
import Header from "./Header";
import reactTestRenderer from "react-test-renderer";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should display a title with text 'Cocktails'", () => {
      const expectedText = "Cocktails";

      render(<Header />);

      const title = screen.queryByText(expectedText);

      expect(title).toBeInTheDocument();
    });
  });
  describe("When it's rendered", () => {
    test("Then it should be equal to the last snapshot", () => {
      const theHeader = reactTestRenderer.create(<Header />);

      expect(theHeader.toJSON()).toMatchSnapshot();
    });
  });
});

it("renders consistently , equal to the snapshot", () => {
  const theHeader = reactTestRenderer.create(<Header />);

  expect(theHeader.toJSON()).toMatchSnapshot();
});
