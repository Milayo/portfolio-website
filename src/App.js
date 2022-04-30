import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Spinner from "../src/components/spinner/spinner.jsx";
import FullPage from "./components/fullpage/fullpage";
import Header from "./components/header-section/header";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      {/* {loading ? (
        <Spinner />
      ) : ( */}
        <div>
          <Header />
          <FullPage />
        </div>
      {/* )} */}
    </div>
  );
};

export default App;
