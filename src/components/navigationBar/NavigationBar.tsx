import { useTranslation } from "react-i18next";

function NavigationBar() {
  const { t, i18n } = useTranslation();

  return (
    <nav>
      <ul className="flex bg-primary text-textInPrimary h-80">
        <li>{t("navigation.firstPage")}</li>
        <li>{t("navigation.secondPage")}</li>
        <li>
          <button type="button" onClick={() => i18n.changeLanguage("es")}>
            espnaol
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
