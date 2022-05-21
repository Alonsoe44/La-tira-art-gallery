import { render, screen } from "@testing-library/react";
import ImageCarouselBanner from "./imageCarouselBanner";

describe("Given an ImageCarouselBanner component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a heading homePage.title and the images", () => {
      render(<ImageCarouselBanner images={[]} />);

      const foundTitle = screen.getByRole("heading", {
        name: /homePage.title/i,
      });
      const foundImage = screen.getByRole("img", { name: /banner la tira/i });

      expect(foundImage).toBeInTheDocument();
      expect(foundTitle).toBeInTheDocument();
    });
  });
});
