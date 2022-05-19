import i18nTesting from "i18next";
import { initReactI18next } from "react-i18next";

const DEFAULT_LANGUAGE = "en";
const DEFAULT_NAMESPACE = "translations";
export default function initI18n(translations = {}) {
  i18nTesting.use(initReactI18next).init({
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    ns: [DEFAULT_NAMESPACE],
    defaultNS: DEFAULT_NAMESPACE,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: { [DEFAULT_LANGUAGE]: { [DEFAULT_NAMESPACE]: translations } },
  });
}
