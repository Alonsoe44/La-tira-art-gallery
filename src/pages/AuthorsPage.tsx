import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AuthorCard from "../components/authorCard/AuthorCard";
import AuthorStateInterface from "../interfaces/AuthorsStateInterface";
import { getAuthorsThunk } from "../reduxToolKit/author/authorThunk";
import { useAppDispatch, useAppSelector } from "../reduxToolKit/hooks";

function AuthorsPage() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const stateAuthorsPage = useAppSelector(
    (state) => state.authors
  ) as AuthorStateInterface;
  useEffect(() => {
    dispatch(getAuthorsThunk());
  }, []);

  return (
    <div className="w-full flex items-center justify-center py-28 flex-col">
      <h1 className="text-accent text-5xl mb-20">
        {t("authorsPage.mainTitle")}
      </h1>
      <div className="xl:w-9/12 w-full flex lg:flex-wrap lg:flex-row justify-center items-center flex-wrap self-center flex-col ">
        {stateAuthorsPage.authors.map((author) => (
          <AuthorCard
            text={author.name}
            key={author._id}
            authorId={author._id as string}
          />
        ))}
      </div>
    </div>
  );
}

export default AuthorsPage;
