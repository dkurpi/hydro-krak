import React from "react";
import { Icon } from "@iconify/react";
import arrowDownAlt2 from "@iconify/icons-dashicons/arrow-down-alt2";
import "./Header.css";
import { Element } from "react-scroll";
import { Link } from "react-scroll";

export default function Header(props) {
  return (
    <Element name="header">
      <header className="header">
        <div className="header__text">
          <h1 className="header__text-main">
            <span>Profesjonalne</span> <br />
            usługi HYDRAULICZNE
          </h1>
          <span className="header__text-secondary">
            DZIAŁAMY W KRAKOWIE ORAZ NA POZOSTAŁYM OBSZARZE WOJ. MAŁOPOLSKIEGO
          </span>

          <Link
            activeClass="active nodisplay"
            to="offer"
            spy={true}
            smooth={true}
            duration={500}
            offset={-window.innerHeight * 0.1}
          >
            <div class="header__text-button">ZOBACZ WIĘCEJ</div>
          </Link>
        </div>
        <Link
          activeClass="active nodisplay"
          to="offer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-props.vh * 0.1}
        >
          <Icon
            className="header__icon"
            icon={arrowDownAlt2}
            style={{ color: "#c4c4c4", fontSize: "53px" }}
          />
        </Link>
      </header>
    </Element>
  );
}
