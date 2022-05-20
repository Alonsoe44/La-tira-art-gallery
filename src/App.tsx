import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navigationBar/NavigationBar";
import NavigationBarMobile from "./components/navigationBar/NavigationBarMobile";

function App() {
  const [navigationComponent, setNavegationComponent] = useState(
    window.innerWidth < 950 ? <NavigationBarMobile /> : <NavigationBar />
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    if (window.innerWidth < 950)
      setNavegationComponent(<NavigationBarMobile />);
    if (window.innerWidth > 950) setNavegationComponent(<NavigationBar />);
  }, [windowWidth]);

  return (
    <>
      {navigationComponent}
      <Routes>
        <Route path="/" element={<h1>hi</h1>} />
      </Routes>
    </>
  );
}

export default App;
