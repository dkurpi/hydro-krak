import React from "react";
import "./MenuIndicators.css";

import { Link } from "react-scroll";

export default function MenuIndicators(props) {
  return (
    <div className="fixedMenu">
      <Link
        activeClass="active white"
        to="header"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        onSetActive={() => console.log("active")}
        onSetInactive={() => console.log("no-active")}
      >
        <div className="dot"></div>
      </Link>
      <Link
        activeClass="active"
        to="offer"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        onSetActive={() => console.log("active")}
        onSetInactive={() => console.log("no-active")}
      >
        <div className="dot"></div>
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        // offset={50}
        duration={500}
        onSetActive={() => console.log("active")}
        onSetInactive={() => console.log("no-active")}
      >
        <div className="dot"></div>
      </Link>
      <Link
        activeClass="active"
        to="realizations"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={() => console.log("active")}
        onSetInactive={() => console.log("no-active")}
      >
        <div className="dot"></div>
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={() => console.log("active")}
        onSetInactive={() => console.log("no-active")}
      >
        <div className="dot"></div>
      </Link>
      {/* <li onClick={props.scrollToTop}>top</li> */}
    </div>
  );
}
