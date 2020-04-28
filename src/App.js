import React, { Component } from "react";
import Menu from "./Components/Menu-1/Menu";
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
import ScrollMagic from "scrollmagic";

class App extends Component {
  state = { isLoaded: false };
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 2000);

    new ScrollMagic.Scene({
      triggerElement: "#h11",
   
    })
      .addIndicators()
      .addTo(this.controller); // assign the scene to the controller
  }

  handleAnimations = () => {
    const titles = document.querySelector(".col-lg-4.col-md-6.mb-4").childNodes;
    const items = document.querySelector(
      ".media-body.order-2.order-lg-2.ml-lg-5.flex-fill"
    ).childNodes;

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut", opacity: 1 },
    });
    tl.from(titles, 2, { x: -300, opacity: 0, stagger: 0.2, delay: 0.4 }).from(
      items,
      {
        x: 500,
        opacity: 0,
        stagger: 0.2,
        ease: "power0",
      },
      "-=1"
    );
  };

  render() {
    if (!this.state.isLoaded) return <SemipolarLoading color="#028fcc" />;

    return (
      <>
        {/* <Menu /> */}
        <Header />
        <Offer id="offer" />
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
