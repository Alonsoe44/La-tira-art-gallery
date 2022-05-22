import { useTranslation } from "react-i18next";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function SocialMediaLinks() {
  const { t } = useTranslation();
  return (
    <section className="h-fit flex flex-col">
      <h3 className="text-3xl">{t("socialMediaCallToAction")}</h3>
      <ul className="h-fit flex flew-row mt-3">
        <li>
          <Link to="none">
            <FaFacebookSquare className="text-3xl text-primaryOposite mr-4" />
          </Link>
        </li>
        <li>
          <Link to="none">
            <FaInstagramSquare className="text-3xl text-primaryOposite mr-2 " />
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default SocialMediaLinks;
