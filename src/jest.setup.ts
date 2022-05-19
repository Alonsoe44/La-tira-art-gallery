/* eslint-disable @typescript-eslint/no-unused-vars */
import "@testing-library/jest-dom";
import "dotenv/config";
import i18nTesting from "./utils/i18Testing";

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => ({
    t: (str: string): string => str,
    i18n: i18nTesting,
  }),
}));
