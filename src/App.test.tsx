import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  const app = render(<App />);
  expect(app).toBeTruthy();
});
