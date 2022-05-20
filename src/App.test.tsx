import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("This is a smoke test to see everything it's ok", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
