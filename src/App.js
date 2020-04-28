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
  header = null;
  offer = null;
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoaded: true });
      this.handleLoading();
    }, 1000);
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
      "+=2"
    );
  };

  render() {
    if (!this.state.isLoaded) return <SemipolarLoading color="#028fcc" />;
    console.log(this.header, this.offer);
    return (
      <>
        {/* <Menu /> */}
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
