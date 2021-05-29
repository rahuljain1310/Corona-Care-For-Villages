import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Partners from "./components/Partners/Partners";
import Team from "./components/Team/Team";
import Mission from "./components/Mission/Mission";
import Initiative from "./components/Initiative/Initiative";
import "./App.css";

const App = () => (
  <div>
    <Home />
    <Mission/>
    <Initiative/>
    {/* <Team /> */}
    <Partners/>
    <Footer />
  </div>
);

export default App;
