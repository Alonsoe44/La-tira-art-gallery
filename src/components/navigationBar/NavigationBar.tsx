import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdOutlineStorefront, MdLanguage } from "react-icons/md";
import DesktopLink from "./DesktopLink";
import { lang, subMenuAnimate } from "./NavigationBarMobile";

function NavigationBar() {
  const { t, i18n } = useTranslation();
  const [langMenuState, toggleLangMenuState] = useState(false);
  return (
    <div className="fixed z-50 w-full">
      <nav className="flex bg-primary text-primaryOposite justify-between h-24 items-center pl-16 pr-20 ">
        <div>
          <Link to="/">
            <img src="/assets/logoLaTira.svg" alt="Logo La Tira" />
          </Link>
        </div>
        <ul className="flex w-[44rem] primaryOposite justify-between items-center ">
          <DesktopLink path="/explore" text={t("navigation.firstPage")} />
          <DesktopLink path="/artists" text={t("navigation.secondPage")} />
          <DesktopLink path="/aboutus" text={t("navigation.thirdPage")} />
          <DesktopLink path="/contactus" text={t("navigation.fourthPage")} />
          <li>
            <button
              type="button"
              onClick={() => toggleLangMenuState(!langMenuState)}
              className="text-primaryOposite font-bold self-end text-center justify-end"
            >
              <MdLanguage className="inline mr-1 text-xl text-primaryOposite" />
              {lang[i18n.resolvedLanguage]}
            </button>

            <motion.div
              initial="exit"
              variants={subMenuAnimate}
              className="absolute right-19 top-16 flex flex-col z-50"
              animate={langMenuState ? "enter" : "exit"}
            >
              <ul className="bg-primaryOposite rounded-md text-primary p-3 ">
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      i18n.changeLanguage("en");
                      toggleLangMenuState(false);
                    }}
                  >
                    English
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      i18n.changeLanguage("es");
                      toggleLangMenuState(false);
                    }}
                  >
                    Espa??ol
                  </button>
                </li>
              </ul>
            </motion.div>
          </li>
        </ul>
      </nav>
      <div className="h-[0.5px] bg-gray w-full fixed z-40 top-24" />
      <div className="h-14 bg-primary text-primaryOposite flex justify-end px-10 items-center z-30 top-24">
        <Link
          to="google.com"
          className="border rounded-xl border-primaryOposite w-40 text-center"
        >
          <MdOutlineStorefront className="inline mr-2 text-xl" />
          {t("navigation.storeLink")}
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
