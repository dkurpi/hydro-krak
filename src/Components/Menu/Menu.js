import React, { useState, useRef } from "react";
import "./Menu.css";
import { Link as LinkRouter } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";
import gsap from "gsap";
import { scrollTo, scrollToTop } from "../../Utils/Scroll&Animations";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setiIsClicked] = useState(false);
  const mobileNav = useRef(null);

  const handleHamburger = () => {
    if (mobileNav && !isClicked) {
      setIsOpen((prev) => !prev);
      setiIsClicked(true);
      const titles = mobileNav.current.childNodes;
      if (!isOpen) gsap.from(titles, { x: 300, opacity: 0, stagger: 0.1 });

      setTimeout(() => setiIsClicked(false), 1000);
    }
  };

  const handleNavigation = (destination) =>
    destination === "top"
      ? scrollToTop()
      : setTimeout(() => scrollTo(destination), 100);

  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <LinkRouter to="/" onClick={() => handleNavigation("top")}>
          <h1 className="navigation__logo-main">
            <span className="navigation__logo-secondary">HYDRO</span>KRAK
          </h1>
        </LinkRouter>
      </div>
      <div
        className={`navigation__options ${
          isOpen ? "navigation__options--active" : ""
        }`}
      >
        <ul className="navigation__list" ref={mobileNav}>
          <li
            className="navigation__list-item"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <LinkRouter onClick={() => handleNavigation("header")} to="/">
              Home
            </LinkRouter>
          </li>
          <li
            className="navigation__list-item"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <LinkRouter onClick={() => handleNavigation("about")} to="/">
              O nas
            </LinkRouter>
          </li>
          <li
            className="navigation__list-item"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <LinkRouter onClick={() => handleNavigation("top")} to="/galeria">
              Galeria
            </LinkRouter>
          </li>
          <li
            className="navigation__list-item"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <LinkRouter onClick={() => handleNavigation("top")} to="/aplikuj">
              Aplikuj
            </LinkRouter>
          </li>
          <li
            className="navigation__list-item"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <LinkRouter onClick={() => handleNavigation("contact")} to="/">
              Kontakt
            </LinkRouter>
          </li>
          <li
            className="navigation__list-item"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <LinkRouter onClick={() => handleNavigation("contact")} to="/">
              Zamów darmową wycene
            </LinkRouter>
          </li>
        </ul>
      </div>

      <div className="navigation__hamburger">
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={() => {
            handleHamburger();
          }}
          width={24}
          height={15}
          strokeWidth={1}
          rotate={0}
          color="white"
          borderRadius={0}
          animationDuration={0.5}
        />
      </div>
    </nav>
  );
}
