import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import NavigationBar from "./components/navigationBar/NavigationBar";
import NavigationBarMobile from "./components/navigationBar/NavigationBarMobile";
import HomePage from "./pages/HomePage";

function App() {
  const [isVisible, setVisibility] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 950);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 140) {
        setVisibility(false);
      } else {
        setVisibility(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    if (window.innerWidth < 950) setIsMobile(true);
    if (window.innerWidth > 950) setIsMobile(false);
    return () => {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [windowWidth, lastScrollY]);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {isMobile ? <NavigationBarMobile /> : <NavigationBar />}
          </motion.div>
        )}
      </AnimatePresence>
      <div className={`w-full ${isMobile ? "h-14" : "h-36"}`} />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
