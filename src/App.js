import React, { Component } from "react";
import Menu from "./Components/Menu-1/Menu";
import MenuIndicators from "./Components/Menu-indicators/MenuIndicators.js";
import Header from "./Components/Header-Philogic/Header";
import Offer from "./Components/Offer-1/Offer";
import OfferRellax from "./Components/Offer-rellax/OfferRellax";
import About from "./Components/About-1/About";
import Aplication from "./Components/Aplication/Aplication";
import Realizations from "./Components/Realizations-1/Realizations";
import Partners from "./Components/Partners/Partners";
import Contact from "./Components/Contact-1(Map+Email)/Contact";
import Footer from "./Components/Footer/Footer";
import "./App.css";
/////Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//////Animations
import { SemipolarLoading } from "react-loadingg";
import gsap from "gsap";

import "aos/dist/aos.css";
import AOS from "aos";


////////SCROLL
import { Events, animateScroll as scroll, scroller } from "react-scroll";

class App extends Component {
  state = { isLoaded: false };
  vh = 0;

  componentDidMount() {

    this.vh = window.innerHeight;
    // if (vh < 800) vh = 1200;
    console.log(this.vh);
    AOS.init({
      offset: this.vh * 0.3,
      duration: 1200,
    });
    setTimeout(() => {
      this.setState({ isLoaded: true });
      this.handleLoading();
    }, 1000);

    Events.scrollEvent.register("begin", function () {
      console.log("begin");
    });

    Events.scrollEvent.register("end", function () {
      console.log("end");
    });

    window.addEventListener("scroll", this.handleScrolling);
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo(elmnt) {
    const offset = Math.floor(-this.vh * 0.2);

    console.log("scrollTo");
    scroller.scrollTo(elmnt, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: offset,
    });
  }

  handleScrolling = () => {
    const fromTop = window.scrollY;
    console.log(fromTop);
    const navbar = document.querySelector(".nav");
    if (!navbar) return;
    if (fromTop > 20) {
      navbar.classList.add("fixed");
    } else navbar.classList.remove("fixed");
  };

  handleLoading = () => {
    if (!document.querySelector(".main-header .callback")) return;
    const header = document.querySelector(".main-header .callback").childNodes;
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut", opacity: 0 },
    });
    tl.from(
      header,
      1,
      {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        delay: 0.2,
      },
      "+=1"
    );
  };

  // scrollTo = () => {};

  render() {
    if (!this.state.isLoaded) return <SemipolarLoading color="#028fcc" />;
    return (
      <Router>
        <Menu
          scrollToTop={this.scrollToTop}
          scrollTo={this.scrollTo}
          vh={this.vh}
        />
        <Switch>
          <Route exact path="/">
            <MenuIndicators
              scrollToTop={this.scrollToTop}
              scrollTo={this.scrollTo}
              vh={this.vh}
            />
            <Header vh={this.vh} />
            <Offer />
            {/* <OfferRellax /> */}
            <About />
            <Realizations />
            <Partners />
            <Contact />
          </Route>
          <Route exact path="/aplikuj">
            <div className="menubgc"></div>
            <Aplication />
          </Route>
          <Route exact path="/zamow">
            <div className="menubgc"></div>

            <Realizations />
          </Route>
          <Route exact path="/realizacje">
            <div className="menubgc"></div>
            <Realizations />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
