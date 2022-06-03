import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useTranslation } from "react-i18next";

const ubication = { lat: 38.9891353253134, lng: -0.5265630648294611 };
function MovedSign() {
  const { t } = useTranslation();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC5C41uP94-aXrbQJWQs75CWnQJsh8OknI",
  });

  return (
    <article className="flex w-full mt-20 lg:flex-row flex-col">
      <div className="lg:w-1/2 pl-5 lg:pl-20">
        <h2 className="xl:text-[9rem] text-[5rem] lg:text-[6rem] font-bebas text-bigSign">
          {t("homePage.movedTitle")}
        </h2>
        <p className="text-3xl font-bebas text-gray">
          {t("homePage.movedText")}
        </p>
        <p className="text-6xl font-bebas pb-4">{t("homePage.movedAddress")}</p>
      </div>
      {isLoaded && (
        <GoogleMap
          zoom={18}
          center={ubication}
          mapContainerClassName="lg:w-1/2 h-[35rem]"
        >
          <Marker position={{ lat: 38.98914, lng: -0.526548 }} />
        </GoogleMap>
      )}
    </article>
  );
}

export default MovedSign;
