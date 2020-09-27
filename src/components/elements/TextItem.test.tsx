import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TextItem from "./TextItem";

describe("TextItem component", () => {
  let text: string;
  let wrapper: any;
  beforeAll(() => {
    text = "text item";
    wrapper = render(<TextItem text={text} />);
  });

  it("should show text item", () => {
    const { getByTestId } = wrapper;
    expect(getByTestId("text-item")).toHaveTextContent(text);
  });
});
