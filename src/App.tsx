import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";

import NavigationBar from "./components/navigationBar/NavigationBar";
import NavigationBarMobile from "./components/navigationBar/NavigationBarMobile";
import AboutUsPage from "./pages/AboutUsPage";
import ArtCollectionDetailPage from "./pages/ArtCollectionDetailPage";
import ArtcollectionsPage from "./pages/ArtcollectionsPage";
import AuthorPage from "./pages/AuthorPage";
import AuthorsPage from "./pages/AuthorsPage";
import ContactUsPage from "./pages/ContactUsPage";
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
        <Route path="/explore" element={<ArtcollectionsPage />} />
        <Route path="/artcollection">
          <Route path=":id" element={<ArtCollectionDetailPage />} />
        </Route>
        <Route path="/artists" element={<AuthorsPage />} />
        <Route path="/artists/:id" element={<AuthorPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
