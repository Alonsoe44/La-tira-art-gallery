import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("This is a smoke test to see everything it's ok", () => {
  render(
    <BrowserRouter>
      <p>a</p>
    </BrowserRouter>
  );
});
