import React from "react";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Partners from "./components/Partners/Partners";
import Mission from "./components/Mission/Mission";
import Initiative from "./components/Initiative/Initiative";
import Testimonials from "./components/Testimonials/Testimonials";
import Approach from "./components/Approach/Approach";
import Problems from "./components/Problems/Problems";
import Donate from "./components/Donate/Donate";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/donate">
          <Donate />
          <Footer />
        </Route>
        <Route path="/">
          <Home />
          <Mission/>
          <Initiative />
          <Problems/>
          <Approach/>
          <Testimonials />
          <Partners/>
          <Footer />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
