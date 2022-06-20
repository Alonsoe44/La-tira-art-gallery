import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface AuthorCardProps {
  text: string;
  authorId: string;
}
function AuthorCard({ text, authorId }: AuthorCardProps) {
  const { t } = useTranslation();
  return (
    <Link
      to={`/artists/${authorId}`}
      className="bg-accent p-10 rounded w-full sm:w-[calc(50%-4rem)] mx-4 mb-5 text-primaryOposite"
    >
      <h1 className="text-2xl">{text}</h1>
      <div className="flex flex-col">
        <p>{t("authorsPage.seeMoreText")}</p>
        <div className="bg-primaryOposite" />
      </div>
    </Link>
  );
}

export default AuthorCard;
