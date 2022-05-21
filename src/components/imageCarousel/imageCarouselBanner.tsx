import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import indexGeneratorLoop from "../../utils/indexGenerator";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

interface ImageCarouselProps {
  images: string[];
}
function ImageCarouselBanner({ images }: ImageCarouselProps) {
  const { t } = useTranslation();

  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    setTimeout(() => {
      setPage([page + 1, 1]);
    }, 10000);
  }, [page]);

  const imageIndex = indexGeneratorLoop(images.length, page);

  return (
    <div className="relative h-[30rem] overflow-y-hidden items-center justify-center flex ">
      <div className="absolute bg-primary opacity-40 z-10 h-full w-full" />
      <h1 className="text-primaryOposite text-5xl sm:text-6xl ml-4 sm:left-24 absolute z-20 bottom-20 font-serif">
        {t("homePage.title")}
      </h1>
      {window.innerWidth > 1000 && (
        <img
          src="./assets/bannerLatira.webp"
          alt="banner la tira"
          className="z-20 absolute right-14 bottom-15 scale-90"
        />
      )}
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="w-screen absolute z-0"
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        />
      </AnimatePresence>
    </div>
  );
}

export default ImageCarouselBanner;
