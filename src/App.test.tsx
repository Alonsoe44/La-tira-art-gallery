import App from "./App";
import { render, screen } from "@testing-library/react";

test("This is a smoke test to see everything it's ok", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /hey/i })).toBeInTheDocument();
});
