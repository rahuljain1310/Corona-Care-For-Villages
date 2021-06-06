import React from "react";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Partners from "./components/Partners/Partners";
import Testimonials from "./components/Testimonials/Testimonials";
import Approach from "./components/Approach/Approach";
import Problems from "./components/Problems/Problems";
import Donate from "./components/Donate/Donate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

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
