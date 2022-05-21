import { useEffect } from "react";
import ImageCarouselBanner from "../components/imageCarousel/imageCarouselBanner";
import ArtCollectionStateInterface from "../interfaces/ArtCollectionStateInterface";
import PaintingInterface from "../interfaces/PaintingInterface";
import { getBannerLatestCollectionThunk } from "../reduxToolKit/artCollection/artCollectionThunk";
import { useAppDispatch, useAppSelector } from "../reduxToolKit/hooks";

function HomePage() {
  const bannerState = useAppSelector(
    (state) => state.artCollections
  ) as ArtCollectionStateInterface;

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
      <p>a</p>
    </>
  );
}

export default HomePage;
