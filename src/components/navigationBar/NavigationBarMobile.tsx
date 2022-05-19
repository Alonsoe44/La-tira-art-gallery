import { Menu } from "@headlessui/react";
import { BiMenu } from "react-icons/bi";
import { FiChevronDown } from "react-icons/Fi";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import MobileLink from "./MobileLink/MobileLink";
import SocialMediaLinks from "../socialMediaLinks/SocialMediaLinks";

interface LangInterface {
  [es: string]: string;
  en: string;
}

const lang: LangInterface = {
  es: "Espanol",
  en: "English",
};

function NavigationBarMobile() {
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.3,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.3,
        delay: 0.1,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  const { t, i18n } = useTranslation();
  const [langMenuState, toggleLangMenuState] = useState(false);
  return (
    <Menu>
      {({ open }) => (
        <div className="bg-primary sticky flex items-center h-14 w-screen ">
          <ul className="flex w-full h-full items-center px-3 justify-between">
            <li className="flex ">
              <img
                src="src/assets/logoLaTira.svg"
                alt="logoLaTira"
                className="w-7 h-auto"
              />
            </li>
            <li className="flex items-center">
              <Menu.Button>
                <BiMenu
                  className="text-5xl text-primaryOposite"
                  aria-label="menu"
                />
              </Menu.Button>
            </li>
          </ul>
          <AnimatePresence>
            {open && (
              <motion.div
                className="absolute bg-primary w-screen h-[calc(100vh-2.25rem)] pl-7 top-14
                "
                key="theMenu"
                initial={{ translateX: window.innerWidth }}
                exit={{ translateX: window.innerWidth }}
                animate={{ translateX: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Menu.Items className="text-primaryOposite h-5/6">
                  <div className="relative flex w-full justify-end pr-4">
                    <button
                      type="button"
                      onClick={() => toggleLangMenuState(!langMenuState)}
                      className="text-primaryOposite font-bold self-end text-center justify-end"
                    >
                      {lang[i18n.resolvedLanguage]}
                      <FiChevronDown className="inline ml-1 text-xl" />
                    </button>
                  </div>
                  <motion.div
                    initial="exit"
                    variants={subMenuAnimate}
                    className="absolute right-9 flex flex-col"
                    animate={langMenuState ? "enter" : "exit"}
                  >
                    <ul>
                      <li>
                        <button
                          type="button"
                          onClick={() => i18n.changeLanguage("en")}
                        >
                          English
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={() => i18n.changeLanguage("es")}
                        >
                          Spanish
                        </button>
                      </li>
                    </ul>
                  </motion.div>
                  <ul className="flex flex-col h-[calc(100%-2rem)] justify-center">
                    <MobileLink text={t("navigation.firstPage")} />
                    <MobileLink text={t("navigation.secondPage")} />
                    <MobileLink text={t("navigation.thirdPage")} />
                    <MobileLink text={t("navigation.fourthPage")} />
                  </ul>
                  <SocialMediaLinks />
                </Menu.Items>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </Menu>
  );
}

export default NavigationBarMobile;
