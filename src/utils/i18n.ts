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
            sectionTwo: "Welcome",
            sectionTwoText:
              "There are many reasons to visit La tira. So many works to discover in this fabulous gallery that is opening a new location. So visit us in our new facilities. Various exhibitions with national and international art, our most recent collaboration with Yendrys Salazar Falcon brings us Guajira Guantanamero",
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
            sectionTwo: "Bienvenido",
            sectionTwoText:
              "Hay muchas razones para visitar la tira. Tantas obras que descubrir en esta fabulosa galleria que esta abriendo un nuevo local. Asi que visitanos en nuestras nuevas instalaciones . Diversas exposiciones con arte nacional e internacional, nuestro mas reciente colaboracion con Yendrys Salazar Falcon nos trae Guajira Guantanamero",
            cardType: "Exposicion",
          },
          socialMediaCallToAction: "Siguenos",
        },
      },
    },
  });

export default i18n;
