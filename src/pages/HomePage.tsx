import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AliceCarousel from "react-alice-carousel";
import ImageCarouselBanner from "../components/imageCarousel/imageCarouselBanner";
import ArtCollectionStateInterface from "../interfaces/ArtCollectionStateInterface";
import PaintingInterface from "../interfaces/PaintingInterface";
import {
  getArtCollectionsLandingThunk,
  getBannerLatestCollectionThunk,
} from "../reduxToolKit/artCollection/artCollectionThunk";
import { useAppDispatch, useAppSelector } from "../reduxToolKit/hooks";
import "react-alice-carousel/lib/alice-carousel.css";
import CarouselCard from "../components/carouselCard/CarouselCard";

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
    dispatch(getArtCollectionsLandingThunk());
  }, []);

  const cardsJSX = bannerState.artCollections.map((artCollection) => (
    <CarouselCard
      cardData={{ ...artCollection }}
      key={artCollection._id}
      style={{ width: window.innerWidth > 1000 ? 900 : window.innerWidth }}
      cardType={t("homePage.cardType")}
    />
  ));

  return (
    <>
      <ImageCarouselBanner images={images} />
      <div className="w-full flex flex-col items-center font-serif pb-20">
        <div className="w-screen lg:w-8/12 lg:p-0 p-5">
          <h2 className="text-primary mt-20 mb-7 text-4xl lg:ml-2">
            {t("homePage.sectionOne")}
          </h2>
          <p className="text-primaryOpositeLight md:w-[47rem] text-xl mb-20 lg:ml-2">
            {t("homePage.sectionOneText")}
          </p>
        </div>
        <AliceCarousel items={cardsJSX} mouseTracking infinite autoWidth />
        <div className="w-screen lg:w-8/12 lg:p-0 p-5">
          <h2 className="text-primary text-4xl mt-20 mb-7 ">
            {t("homePage.sectionTwo")}
          </h2>
          <p className="text-primaryOpositeLight text-4xl leading-[4rem]">
            {t("homePage.sectionTwoText")}
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
