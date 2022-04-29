import React, { useState, useEffect } from "react";
import "./App.css";
import Spinner from "../src/components/spinner/spinner.jsx";
import FullPage from "./components/fullpage/fullpage";
import Header from "./components/header-section/header";


const App = () => {
   const [loading, setLoading] = useState(true);
   useEffect(() => {
     setTimeout(() => setLoading(false), 4000);
   }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {" "}
          <Header />
          <FullPage />
        </div>
      )}
    </div>
  );
};

export default App;
