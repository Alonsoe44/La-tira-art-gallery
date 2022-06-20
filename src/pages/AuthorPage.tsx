import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AuthorStateInterface from "../interfaces/AuthorsStateInterface";
import PaintingInterface from "../interfaces/PaintingInterface";
import { getAuthorThunk } from "../reduxToolKit/author/authorThunk";
import { useAppDispatch, useAppSelector } from "../reduxToolKit/hooks";

function AuthorPage() {
  const dispatch = useAppDispatch();
  const stateArtcollection = useAppSelector(
    (state) => state.authors
  ) as AuthorStateInterface;
  const params = useParams();
  useEffect(() => {
    dispatch(getAuthorThunk(params.id as string));
  }, []);
  const { author } = stateArtcollection;
  return (
    <article className="bg-primaryOpositeLight  w-full text-primaryOposite flex flex-col items-center pb-10 ">
      <div className="lg:w-8/12 my-20 flex xl:items-center xl:flex-row flex-col text-center items-start ">
        <h1 className="inline-block text-2xl font-serif w-1/3">
          {author.name}
        </h1>
        <div className="w-full h-[0.5px] bg-gray inline" />
      </div>
      <div className="flex flex-wrap w-full sm:w-8/12 md:justify-between justify-center">
        {(author.paintings as PaintingInterface[]).map((painting) => (
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
  );
}

export default AuthorPage;
