import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          navigation: {
            firstPage: "Explore",
            secondPage: "Artists",
            thirdPage: "About us",
            fourthPage: "Contact us",
            storeLink: "Store",
          },
          homePage: {
            title: "La Tira art gallery",
            sectionOne: "Highlights",
            sectionOneText:
              "We are pleased to welcome you to our gallery. From now on you can meet our most recent exhibition made by our artists, which we put at your disposal.",
            cardType: "Exposition",
          },
          socialMediaCallToAction: "Follow us",
        },
      },
      es: {
        translation: {
          navigation: {
            firstPage: "Explora",
            secondPage: "Artistas",
            thirdPage: "Sobre nosotros",
            fourthPage: "Contactanos",
            storeLink: "Tienda",
          },
          homePage: {
            title: "Galeria la Tira",
            sectionOne: "Destacados",
            sectionOneText:
              "Nos complace darle la bienvenida a nuestra galeria. A partir de ahora puede conocer, nuestra mas reciente exposicion hecha por nuestros artistas,  que ponemos a su disposición.",
            cardType: "Exposicion",
          },
          socialMediaCallToAction: "Siguenos",
        },
      },
    },
  });

export default i18n;
