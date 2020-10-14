import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "aos/dist/aos.css";

import Menu from "./Components/Menu/Menu";
import MenuIndicators from "./Components/MenuIndicators/MenuIndicators.js";
import Header from "./Components/Header/Header";
import Offer from "./Components/Offer/Offer";
import About from "./Components/About/About";
import Job from "./Components/Aplication/Aplication";
import Realizations from "./Components/Realizations/Realizations";
import Partners from "./Components/Partners/Partners";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import { SemipolarLoading } from "react-loadingg";

import {
  configureScrollSettings,
  configureAnimationSettings,
  removeEvents,
  loadCallbackAnimation,
} from "./Utils/Scroll&Animations";

class App extends Component {
  state = { isLoaded: false };

  componentDidMount() {
    configureAnimationSettings();
    configureScrollSettings();
    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 1000);
    loadCallbackAnimation();
  }

  componentWillUnmount() {
    removeEvents();
  }

  render() {
    if (!this.state.isLoaded) return <SemipolarLoading color="#028fcc" />;
    return (
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <MenuIndicators />
            <Header />
            <Offer />
            <About />
            <Realizations />
            <Partners />
            <Contact />
          </Route>
          <Route exact path="/aplikuj" render={() => <Job />} />
          <Route exact path="/galeria" render={Gallery} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
