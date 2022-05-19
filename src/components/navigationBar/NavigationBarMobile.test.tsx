import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import NavigationBarMobile from "./NavigationBarMobile";
import "../../utils/i18Testing";

describe("Given a NavigationBarMobiel componen", () => {
  describe("When it's rendered", () => {
    test("Then it should display the NavigationLinks", async () => {
      render(
        <BrowserRouter>
          <NavigationBarMobile />
        </BrowserRouter>
      );

      const menuButton = screen.getByRole("button", { name: "menu" });
      userEvent.click(menuButton);
      const navigationLink = await screen.findByText("navigation.firstPage");

      expect(navigationLink).toBeInTheDocument();
    });
  });
});
