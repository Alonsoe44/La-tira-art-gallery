/* eslint-disable @typescript-eslint/no-unused-vars */
import "@testing-library/jest-dom";
import "dotenv/config";

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => ({
    t: (str: string): string => str,
  }),
}));
