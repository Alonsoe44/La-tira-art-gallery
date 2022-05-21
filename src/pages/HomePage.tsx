import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ImageCarouselBanner from "../components/imageCarousel/imageCarouselBanner";
import ArtCollectionStateInterface from "../interfaces/ArtCollectionStateInterface";
import PaintingInterface from "../interfaces/PaintingInterface";
import { getBannerLatestCollectionThunk } from "../reduxToolKit/artCollection/artCollectionThunk";
import { useAppDispatch, useAppSelector } from "../reduxToolKit/hooks";

function HomePage() {
  const bannerState = useAppSelector(
    (state) => state.artCollections
  ) as ArtCollectionStateInterface;

  const { t } = useTranslation();
  const images = (
    bannerState.artCollectionHomePage.paintings as PaintingInterface[]
  ).map((painting) => painting.imageUrl) as [];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBannerLatestCollectionThunk());
  }, []);

  return (
    <>
      <ImageCarouselBanner images={images} />
      <div className="w-screen flex justify-center font-serif">
        <div className="xl:w-9/12">
          <h2 className="text-primary my-10 text-4xl ">
            {t("homePage.sectionOne")}
          </h2>
          <p className="text-primary w-[50rem] text-xl">
            {t("homePage.sectionOneText")}
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
