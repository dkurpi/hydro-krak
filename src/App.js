import React from "react";
import Menu from "./Components/Menu-1/Menu";
import Header from "./Components/Header-Philogic/Header";
import Offer from "./Components/Offer-1/Offer";
import About from "./Components/About-1/About";
import Realizations from "./Components/Realizations-1/Realizations";
import Partners from "./Components/Partners/Partners";
import Contact from "./Components/Contact-1(Map+Email)/Contact";
import Footer from "./Components/Footer/Footer";
import "./App.css";
function App() {
  return (
    <div className="App">
      {/* <Menu /> */}
      <Header />
      <Offer />
      <About />
      <Realizations />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
