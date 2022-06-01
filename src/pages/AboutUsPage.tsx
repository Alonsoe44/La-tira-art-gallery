import { useTranslation } from "react-i18next";

function AboutUsPage() {
  const { t } = useTranslation();
  return (
    <article className="w-full flex justify-center">
      <div className="w-8/12 flex flex-col my-20">
        <h1 className="text-3xl text-accent mb-10">
          {t("aboutUsPage.mainTitle")}
        </h1>
        <div className="text-2xl ">{t("aboutUsPage.textOne")}</div>
      </div>
    </article>
  );
}

export default AboutUsPage;
