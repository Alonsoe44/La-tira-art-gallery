import { useTranslation } from "react-i18next";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { useState } from "react";
import { Waveform } from "@uiball/loaders";
import { AiOutlineCheckCircle } from "react-icons/ai";
import ContactForm from "../components/contactForm/ContactForm";

function ContactUsPage() {
  const { t } = useTranslation();
  const [sendEmail, setSendEmail] = useState("none");
  const formStates: any = {
    none: <ContactForm sendAction={setSendEmail} />,
    loading: (
      <div className="h-full w-full justify-center items-center flex flex-col my-16">
        <h3 className="text-3xl mb-7">{t("contactUsPage.waitText")}</h3>
        <Waveform size={35} color="#E7BD53" />
      </div>
    ),
    success: (
      <div className="flex items-center justify-center w-full my-16">
        <div className="bg-highlightCard flex flex-col rounded-xl w-[25rem] p-10 text-center">
          <h3 className="text-3xl">{t("contactUsPage.messageSuccess")}</h3>
          <AiOutlineCheckCircle className="text-success text-7xl inline w-full my-7" />
          <p>{t("contactUsPage.messageSuccessText")}</p>
        </div>
      </div>
    ),
  };
  return (
    <div className="w-full flex items-center justify-center py-32">
      <div className="xl:w-9/12 w-full flex xl:flex-row items-center flex-col">
        <article className="md:w-1/2 md:px-10 px-4 w-full">
          <h1 className="text-4xl mb-16">{t("contactUsPage.title")}</h1>
          <p className="mb-16 text-gray ">{t("contactUsPage.text")}</p>
          <div>
            <ul className="flex w-full lg:flex-row flex-col ">
              <li className="bg-accentLight mr-5 py-7 rounded-xl w-full lg:w-auto flex flex-col items-center justify-around p-5">
                <HiLocationMarker className="text-5xl " />
                <span className="text-gray">{t("contactUsPage.infoOne")}</span>
                <span>C/. Francesc Rubio</span>
                <span>Nro 4</span>
              </li>
              <li className="bg-accentLight py-7 rounded-xl flex flex-col items-center justify-around p-5 mt-5 lg:mt-0">
                <FaPhone className="text-4xl " />
                <span className="text-gray">{t("contactUsPage.infoTwo")}</span>
                <span>+34 962 277 500</span>
              </li>
            </ul>
          </div>
        </article>
        {formStates[sendEmail]}
      </div>
    </div>
  );
}

export default ContactUsPage;
