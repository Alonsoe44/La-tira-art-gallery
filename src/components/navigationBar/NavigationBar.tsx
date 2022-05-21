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
    <>
      <nav className="flex bg-primary text-primaryOposite justify-between h-24 items-center pl-16 pr-20 ">
        <div>
          <img src="assets/logoLaTira.svg" alt="Logo La Tira" />
        </div>
        <ul className="flex w-[44rem] primaryOposite justify-between items-center ">
          <DesktopLink path="/" text={t("navigation.firstPage")} />
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
              className="absolute right-19 top-16 flex flex-col"
              animate={langMenuState ? "enter" : "exit"}
            >
              <ul className="bg-primaryOposite rounded-md text-primary p-3">
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
                    Español
                  </button>
                </li>
              </ul>
            </motion.div>
          </li>
        </ul>
      </nav>
      <div className="h-[0.5px] bg-gray w-full" />
      <div className="h-14 bg-primary text-primaryOposite flex justify-end px-10 items-center">
        <Link
          to="google.com"
          className="border rounded-xl border-primaryOposite w-40 text-center"
        >
          <MdOutlineStorefront className="inline mr-2 text-xl" />
          {t("navigation.storeLink")}
        </Link>
      </div>
    </>
  );
}

export default NavigationBar;
