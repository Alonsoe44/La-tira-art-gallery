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
            firstPage: "Collections",
            secondPage: "Artists",
            thirdPage: "About us",
            fourthPage: "Contact us",
            storeLink: "Store",
          },
          authorsPage: {
            mainTitle: "Artists",
            seeMoreText: "See more",
          },
          aboutUsPage: {
            title: "We are la tira ",
            subTitleOne: "Mission",
            subTitleOneContent: "Bring art to every person in Xativa",
            subTitleTwo: "Vision",
            subTitleTwoContent:
              "Create a space to promote and appreciate art and help customers find the painting they need",
            resume:
              "Vd Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          homePage: {
            movedText: "Now in",
            movedTitle: "We've moved!",
            movedAddress: "Calle Francesc Rubio Nº 4",
            title: "La Tira art gallery",
            sectionOne: "Highlights",
            sectionOneText:
              "We are pleased to welcome you to our gallery. From now on you can meet our most recent exhibition made by our artists, which we put at your disposal.",
            sectionTwo: "Welcome",
            sectionTwoText:
              "There are many reasons to visit La tira. So many works to discover in this fabulous gallery that is opening a new location. So visit us in our new facilities. Various exhibitions with national and international art, our most recent collaboration with Yendrys Salazar Falcon brings us Guajira Guantanamero",
            cardType: "Exposition",
          },
          contactUsPage: {
            title: "Contact us",
            text: "Do you have any questions about our gallery, do you need more information about a painting or maybe you just wanna say hi, don't doubt and reach out to us by filling out this form",
            labelOne: "Name",
            labelTwo: "Email",
            labelThree: "How can we help you?",
            sendText: "Send",
            infoOne: "Address",
            infoTwo: "Telephone",
            waitText: "Almost there ...",
            messageSuccess: "Message sent",
            messageSuccessText:
              "Thank you for your message. We will contact you as soon as possible.",
          },
          artCollectionPage: {
            mainTitle: "Collection of expositions",
            seeMoreText: "See more ",
          },
          socialMediaCallToAction: "Follow us",
          footer: {
            payment: "Cash on delivery",
            titleOne: "Commercial conditions",
            titleTwo: "Payment methods",
            titleThree: "Social media",
            conditionOne: "All pieces include Iva",
            conditionTwo: "Delivery expenses are payed by the costumer",
            conditionThree:
              "The paintings will be delivered to the requested direction the client sended via e-mail",
          },
        },
      },
      es: {
        translation: {
          navigation: {
            firstPage: "Exposiciones",
            secondPage: "Artistas",
            thirdPage: "Sobre nosotros",
            fourthPage: "Contactanos",
            storeLink: "Tienda",
          },
          authorsPage: {
            mainTitle: "Artistas",
            seeMoreText: "Ver más",
          },
          aboutUsPage: {
            title: "Nosotros somos la tira",
            subTitleOne: "Mision",
            subTitleOneContent: "Llevar arte a todas las personas en Xativa",
            subTtileTwo: "Vision",
            subTitleTwoContent:
              "Crear un espacio para divulgar y apreciar el arte y ayudar al cliente a encontrar la pintura que necesita",
            resume:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
          homePage: {
            movedTitle: "Nos hemos trasladado",
            movedText: "Ahora en",
            movedAddress: "Calle Francesc Rubio Nº 4",
            title: "Galeria la Tira",
            sectionOne: "Destacados",
            sectionOneText:
              "Nos complace darle la bienvenida a nuestra galeria. A partir de ahora puede conocer, nuestra mas reciente exposicion hecha por nuestros artistas,  que ponemos a su disposición.",
            sectionTwo: "Bienvenido",
            sectionTwoText:
              "Hay muchas razones para visitar la tira. Tantas obras que descubrir en esta fabulosa galleria que esta abriendo un nuevo local. Asi que visitanos en nuestras nuevas instalaciones . Diversas exposiciones con arte nacional e internacional, nuestro mas reciente colaboracion con Yendrys Salazar Falcon nos trae Guajira Guantanamero",
            cardType: "Exposicion",
          },
          artCollectionPage: {
            mainTitle: "Coleccion de exposiciones",
            seeMoreText: "Ver mas",
          },
          socialMediaCallToAction: "Síguenos",
          contactUsPage: {
            title: "Contactanos",
            waitText: "Ya casi ....",
            messageSuccess: "Mensaje enviado",
            messageSuccessText:
              "Gracias por contactarnos, en breve nos pondremos en contacto con usted",
            text: "¿Tiene alguna pregunta sobre nuestra galería, necesita más información sobre una pintura o tal vez solo quiere saludarnos? No lo dude y comuníquese con nosotros completando este formulario",
            labelOne: "Nombre",
            labelTwo: "Correo",
            labelThree: "Como podemos ayudarte?",
            sendText: "Enviar",
            infoOne: "Direccion",
            infoTwo: "Telefono",
          },
          footer: {
            payment: "Contra reembolso",
            titleOne: "Condiciones comerciales",
            titleTwo: "Formas de pago",
            titleThree: "Redes sociales",
            conditionOne: "Todas las obras incluye el IVA",
            conditionTwo: "Los portes de envío estarán a cargo del cliente.",
            conditionThree:
              "Las obras serán enviadas a la dirección indicada por el cliente via e-mail",
          },
        },
      },
    },
  });

export default i18n;
