import { useTranslation } from "react-i18next";
import SocialMediaLinks from "../socialMediaLinks/SocialMediaLinks";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary flex text-primaryOposite justify-center font-mono py-10">
      <div className="lg:w-8/12 w-full pl-10 xl:pl-0 flex justify-between xl:flex-row flex-col">
        <div className="flex flex-col ">
          <h3 className="text-3xl">{t("footer.titleOne")}</h3>
          <span>{t("footer.conditionOne")}</span>
          <span>{t("footer.conditionTwo")}</span>
          <span>{t("footer.conditionThree")}</span>
        </div>
        <div className="flex flex-col my-10 xl:my-0">
          <h3 className="text-3xl">{t("footer.titleTwo")}</h3>
          <span>{t("footer.payment")}</span>
        </div>
        <div className="bg-gray h-full w-[0.5px]" />
        <div className="flex flex-col">
          <SocialMediaLinks />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
