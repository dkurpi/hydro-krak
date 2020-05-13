import React, { useRef, useEffect } from "react";
import "./MenuIndicators.css";

import { Link } from "react-scroll";

export default function MenuIndicators(props) {
  const wrapper = useRef(null);
  useEffect(() => {
    if (!wrapper.current) return;
    wrapper.current.style.opacity = "0";
  }, []);

  const handleVisibilityMenu = (state) => {
    if (!wrapper.current) return;
    state
      ? (wrapper.current.style.opacity = "1")
      : (wrapper.current.style.opacity = "0");

    state
      ? (wrapper.current.style.opacity = "1")
      : (wrapper.current.style.opacity = "0");
  };

  const offset = Math.floor(-props.vh * 0.2);

  return (
    <div ref={wrapper} className="scrollMenu">
      <Link
        activeClass="scrollMenu--active nodisplay"
        to="header"
        spy={true}
        smooth={true}
        offset={offset}
        duration={500}
        onSetActive={() => handleVisibilityMenu(false)}
        onSetInactive={() => handleVisibilityMenu(true)}
      >
        <div className="scrollMenu__dot"></div>
      </Link>
      <Link
        activeClass="scrollMenu--active"
        to="offer"
        spy={true}
        smooth={true}
        offset={offset}
        duration={500}
        onSetActive={() => console.log("active")}
        onSetInactive={() => console.log("no-active")}
      >
        <div className="scrollMenu__dot"></div>
      </Link>
      <Link
        activeClass="scrollMenu--active"
        to="about"
        spy={true}
        smooth={true}
        // offset={50}
        offset={offset}
        duration={500}
        onSetActive={() => console.log("active")}
        onSetInactive={() => console.log("no-active")}
      >
        <div className="scrollMenu__dot"></div>
      </Link>
      <Link
        activeClass="scrollMenu--active"
        to="realizations"
        spy={true}
        smooth={true}
        offset={offset}
        duration={500}
        onSetActive={() => console.log("active")}
        onSetInactive={() => console.log("no-active")}
      >
        <div className="scrollMenu__dot"></div>
      </Link>
      <Link
        activeClass="scrollMenu--active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onSetActive={() => console.log("active")}
        onSetInactive={() => console.log("no-active")}
      >
        <div className="scrollMenu__dot"></div>
      </Link>
      {/* <li onClick={props.scrollToTop}>top</li> */}
    </div>
  );
}
