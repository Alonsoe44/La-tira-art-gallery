/* eslint-disable import/no-absolute-path */
import { useTranslation } from "react-i18next";
import bannerImage from "/src/assets/bannerAboutUs.webp";
import sideImage from "/src/assets/sideImage.webp";
import infoImageOne from "/src/assets/bottomOne.webp";
import infoImageTwo from "/src/assets/bottomTwo.webp";

function AboutUsPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="relative h-[17rem] sm:h-[27rem] overflow-y-hidden items-center justify-center flex ">
        <div className="absolute bg-primary opacity-40 z-20 h-full w-full" />
        <h1 className="text-primaryOposite text-3xl sm:text-5xl ml-4 z-30 ">
          {t("aboutUsPage.title")}
        </h1>
        <img
          src={bannerImage}
          alt="banner la tira"
          className="z-10 absolute  w-screen xl:-bottom-[20rem] 2xl:-bottom-[35rem] "
        />
      </div>
      <div className="flex w-full justify-center py-8 md:py-32 overflow-hidden relative">
        <div className="flex justify-start w-8/12">
          <div className="lg:w-6/12 flex flex-col my-20 relative">
            <h3 className="text-2xl mb-10">{t("aboutUsPage.subTitleOne")}</h3>
            <div className="text-gray text-xl">
              {t("aboutUsPage.subTitleOneContent")}
            </div>
            <h3 className="text-2xl mt-20 mb-10">
              {t("aboutUsPage.subTitleTwo")}
            </h3>
            <div className="text-gray text-xl">
              {t("aboutUsPage.subTitleTwoContent")}
            </div>
            <div className="w-3 h-none 2xl:h-[10rem]" />
          </div>
          <img
            src={sideImage}
            alt="a peek into the tira gallery"
            className=" xl:-right-[15rem] 2xl:h-[45rem] md:h-[37rem] absolute w-auto  md:-right-[20rem] lg:visible invisible"
          />
        </div>
      </div>
      <div className="w-full flex-col items-center relative my-10 flex justify-center">
        <div className="bg-gray w-8/12 h-[0.5px] mb-10" />
        <div className="flex md:w-8/12 justify-center flex-wrap  ">
          <div className="md:w-1/3 mr-5 p-3">
            <p className="text-gray">{t("aboutUsPage.resume")}</p>
          </div>
          <img
            className="h-[15rem] md:mr-5 p-3"
            src={infoImageOne}
            alt="people looking art"
          />
          <img
            className="h-[15rem] p-3"
            src={infoImageTwo}
            alt="people looking art"
          />
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
