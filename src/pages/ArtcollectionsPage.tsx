import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import ArtCollectionStateInterface from "../interfaces/ArtCollectionStateInterface";
import { getArtCollectionsExpositionPageThunk } from "../reduxToolKit/artCollection/artCollectionThunk";
import { useAppDispatch, useAppSelector } from "../reduxToolKit/hooks";

function ArtcollectionsPage() {
  const { t } = useTranslation();
  const stateArtCollectionsPage = useAppSelector(
    (state) => state.artCollections
  ) as ArtCollectionStateInterface;

  const artCollectionsData = stateArtCollectionsPage.artCollections;

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getArtCollectionsExpositionPageThunk());
  }, []);

  return (
    <article className="flex justify-center">
      <div className="lg:w-8/12 flex flex-col">
        <h1 className="text-accent text-5xl my-10">
          {t("artCollectionPage.mainTitle")}
        </h1>
        <ul className="flex flex-col">
          {artCollectionsData.map((artCollection) => (
            <li
              key={artCollection._id}
              className="flex my-20 w-full justify-between"
            >
              <div className="flex flex-col w-1/2 justify-center mr-10">
                <h2 className="text-3xl mb-5">{artCollection.title}</h2>
                <p className="text-gray text-xl line-clamp-6">
                  {artCollection.description}
                </p>
                <Link
                  to={`/artCollection/${artCollection._id}`}
                  className="mt-3"
                >
                  <div className="flex items-center">
                    <span className="font-semibold text-xl">
                      {t("artCollectionPage.seeMoreText")}
                    </span>
                    <BiChevronRight className="inline text-3xl" />
                  </div>
                </Link>
              </div>
              <div>
                <Link to={`/artcollection/${artCollection._id}`}>
                  <img
                    className="h-[30rem] ml-10"
                    src={artCollection.bannerImage}
                    alt={artCollection.title}
                  />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ArtcollectionsPage;
