import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArtCollectionStateInterface from "../interfaces/ArtCollectionStateInterface";
import PaintingInterface from "../interfaces/PaintingInterface";
import { getArtCollectionThunk } from "../reduxToolKit/artCollection/artCollectionThunk";
import { useAppDispatch, useAppSelector } from "../reduxToolKit/hooks";

function ArtCollectionDetailPage() {
  const dispatch = useAppDispatch();
  const stateArtcollection = useAppSelector(
    (state) => state.artCollections
  ) as ArtCollectionStateInterface;
  const params = useParams();
  useEffect(() => {
    dispatch(getArtCollectionThunk({ _id: params.id }));
  }, []);
  const artCollectionData = stateArtcollection.artCollection;
  return (
    <article className="bg-primaryOpositeLight  w-full text-primaryOposite flex flex-col items-center pb-10 ">
      <div className="lg:w-8/12 my-20 flex xl:items-center xl:flex-row flex-col text-center items-start ">
        <h1 className="inline-block text-2xl font-serif w-1/3">
          {artCollectionData.title}
        </h1>
        <div className="w-full h-[0.5px] bg-gray inline" />
      </div>
      <div className="flex flex-wrap w-full sm:w-8/12 md:justify-between justify-center">
        {(artCollectionData.paintings as PaintingInterface[]).map(
          (painting) => (
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
          )
        )}
      </div>
    </article>
  );
}

export default ArtCollectionDetailPage;
