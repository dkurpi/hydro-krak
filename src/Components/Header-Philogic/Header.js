import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import arrowDownAlt2 from "@iconify/icons-dashicons/arrow-down-alt2";
import "./Header.css";
import { Element } from "react-scroll";

export default function Header(props) {
  return (
    <Element name="header">
      <header className="main-header">
        <div className="callback">
          <h1>
            <span>Profesjonalne</span> <br />
            usługi HYDRAULICZNE
          </h1>
          <span className="text">
            DZIAŁAMY W KRAKOWIE ORAZ NA POZOSTAŁYM OBSZARZE WOJ. MAŁOPOLSKIEGO
          </span>
          <div class="button">ZOBACZ WIĘCEJ</div>
        </div>

        <Icon
          className="icon"
          c
          icon={arrowDownAlt2}
          style={{ color: "#c4c4c4", fontSize: "53px" }}
        />
      </header>
    </Element>
  );
}
