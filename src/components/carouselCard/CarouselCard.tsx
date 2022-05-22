import { Link } from "react-router-dom";
import ArtCollectionInterface from "../../interfaces/ArtCollectionInterface";

interface Style {
  width: number;
}

interface CarouselCardProps {
  cardData: ArtCollectionInterface;
  style: Style;
  cardType: string;
}
function CarouselCard({ cardData, style, cardType }: CarouselCardProps) {
  return (
    <div style={style}>
      <Link to="./acasa">
        <div
          className={`mx-4 relative  from-primaryOposite rounded-sm overflow-y-hidden font-sans ${
            window.innerWidth > 1000
              ? "w-[55rem] h-[33rem]"
              : "w-full h-[20rem]"
          }`}
        >
          <div className="h-full  w-full bg-gradient-to-t to-transparent z-20 from-primary  absolute " />
          <img
            className="w-full rounded-sm  "
            src={cardData.bannerImage}
            alt={cardData.title}
          />
          <span className="absolute text-primaryOposite left-14 bottom-20 sm:bottom-32 text-lg z-30 font-semibold">
            {cardType}
          </span>
          <h4 className="absolute text-primaryOposite w-full left-14 text-3xl sm:text-4xl z-30 sm:bottom-20 bottom-10 truncate">
            {cardData.title}
          </h4>
          {window.innerWidth > 1000 && (
            <h3 className="absolute text-primaryOposite left-14 bottom-12 text-xl z-30">
              {cardData.smallDescription}
            </h3>
          )}
        </div>
      </Link>
    </div>
  );
}

export default CarouselCard;
