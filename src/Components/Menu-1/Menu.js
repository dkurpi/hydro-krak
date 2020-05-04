import React, { useState, useRef } from "react";
import "./Menu.css";
import { Link as LinkRouter } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";
import gsap from "gsap";

export default function Menu(props) {
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
  return (
    <nav className="nav ">
      <div className="logo">
        <LinkRouter
          to="/"
          onClick={() => setTimeout(() => props.scrollToTop(), 100)}
        >
          <h1>
            <span>HYDRO</span>KRAK
          </h1>
        </LinkRouter>
      </div>
      <div className={`options ${isOpen && "active"}`}>
        <ul ref={mobileNav}>
          <li
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <LinkRouter
              onClick={() => setTimeout(() => props.scrollTo("header"), 100)}
              to="/"
            >
              Start
            </LinkRouter>
          </li>
          <li
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <LinkRouter
              onClick={() => setTimeout(() => props.scrollTo("about"), 100)}
              to="/"
            >
              O nas
            </LinkRouter>
          </li>
          <li
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <LinkRouter
              onClick={() =>
                setTimeout(() => props.scrollTo("realizations"), 100)
              }
              to="/"
            >
              Realizacje
            </LinkRouter>
          </li>
          <li
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <LinkRouter
              onClick={() => setTimeout(() => props.scrollToTop(), 100)}
              to="/aplikuj"
            >
              Aplikuj
            </LinkRouter>
          </li>
          <li
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <LinkRouter
              onClick={() => setTimeout(() => props.scrollTo("contact"), 100)}
              to="/"
            >
              Kontakt
            </LinkRouter>
          </li>
          <li
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <LinkRouter
              onClick={() => setTimeout(() => props.scrollToTop(), 100)}
              to="/zamow"
            >
              Zamów
            </LinkRouter>
          </li>
        </ul>
      </div>

      <div className="hamburger">
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
