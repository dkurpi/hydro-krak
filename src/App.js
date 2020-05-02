import React, { Component } from "react";
import Menu from "./Components/Menu-1/Menu";
import MenuIndicators from "./Components/Menu-indicators/MenuIndicators.js";
import Header from "./Components/Header-Philogic/Header";
import Offer from "./Components/Offer-1/Offer";
import About from "./Components/About-1/About";
import Realizations from "./Components/Realizations-1/Realizations";
import Partners from "./Components/Partners/Partners";
import Contact from "./Components/Contact-1(Map+Email)/Contact";
import Footer from "./Components/Footer/Footer";
import "./App.css";

import { SemipolarLoading } from "react-loadingg";
import gsap from "gsap";

import "aos/dist/aos.css";
import AOS from "aos";

////////SCROLL
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

class App extends Component {
  state = { isLoaded: true };
  header = null;
  offer = null;

  componentDidMount() {
    let vh = window.innerHeight;
    // if (vh < 800) vh = 1200;
    console.log(vh);
    AOS.init({
      offset: vh * 0.5,
      duration: 1200,
    });
    setTimeout(() => {
      this.setState({ isLoaded: true });
      this.handleLoading();
    }, 1000);

    Events.scrollEvent.register("begin", function () {});

    Events.scrollEvent.register("end", function () {});
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo(elmnt) {
    console.log("scrollTo");
    scroller.scrollTo(elmnt, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  handleLoading = () => {
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
    console.log(this.header, this.offer);
    return (
      <>
        {/* <Menu /> */}
        <MenuIndicators
          scrollToTop={this.scrollToTop}
          scrollTo={this.scrollTo}
        />
        <Header />
        <Offer />
        <About />
        <Realizations />
        <Partners />
        <Contact />

        <Footer />
      </>
    );
  }
}

export default App;
