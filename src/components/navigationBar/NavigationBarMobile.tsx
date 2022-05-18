import { Menu } from "@headlessui/react";
import { BiMenu } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import MobileLink from "./MobileLink/MobileLink";
import SocialMediaLinks from "../socialMediaLinks/SocialMediaLinks";

function NavigationBarMobile() {
  const { t } = useTranslation();
  return (
    <Menu>
      {({ open }) => (
        <div className="bg-primary sticky flex items-center h-14 w-screen ">
          <ul className="flex w-full h-full items-center px-3 justify-between">
            <li>
              <img
                src="src/assets/logoLaTira.svg"
                alt="logoLaTira"
                className="w-7 h-auto"
              />
            </li>
            <li className="flex items-center">
              <Menu.Button>
                <BiMenu className="text-5xl text-primaryOposite" />
              </Menu.Button>
            </li>
          </ul>
          <AnimatePresence>
            {open && (
              <motion.div
                className="absolute bg-primary h-screen w-[calc(100vh-2.25rem)] pl-7 top-14
                "
                key="theMenu"
                initial={{ translateX: window.innerWidth }}
                exit={{ translateX: window.innerWidth }}
                animate={{ translateX: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Menu.Items className="text-primaryOposite h-5/6">
                  <ul className="flex flex-col h-full justify-center">
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
