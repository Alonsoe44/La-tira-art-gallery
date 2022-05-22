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
          <h2 className="text-primary mt-32 mb-7 text-4xl lg:ml-2">
            {t("homePage.sectionOne")}
          </h2>
          <p className="text-primaryOpositeLight md:w-[47rem] text-xl mb-7 lg:ml-2">
            {t("homePage.sectionOneText")}
          </p>
        </div>
        <AliceCarousel items={cardsJSX} mouseTracking infinite autoWidth />
        <div className="w-screen lg:w-8/12 lg:p-0 p-5 my-12">
          <h2 className="text-primary text-4xl mt-20 mb-7 ">
            {t("homePage.sectionTwo")}
          </h2>
          <p className="text-primaryOpositeLight text-4xl leading-[4rem]">
            {t("homePage.sectionTwoText")}
          </p>
        </div>
      </div>
      <article className="bg-primaryOpositeLight  w-full text-primaryOposite flex flex-col items-center pb-10">
        <div className="lg:w-8/12 my-20 flex items-center">
          <h1 className="inline-block text-2xl font-serif w-1/3">
            {bannerState.artCollectionHomePage.title}
          </h1>
          <div className="w-full h-[0.5px] bg-gray inline" />
        </div>
        <div className="flex flex-wrap w-full sm:w-8/12 md:justify-between justify-center">
          {(
            bannerState.artCollectionHomePage.paintings as PaintingInterface[]
          ).map((painting) => (
            <div
              className="w-[80%] md:w-[calc(49%-10px)] lg:w-[calc(33%-10px)] py-3"
              key={painting._id}
            >
              <img
                className="w-full"
                src={painting.imageUrl}
                alt={painting.description}
              />
            </div>
          ))}
        </div>
      </article>
    </>
  );
}

export default HomePage;
