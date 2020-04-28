import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import arrowDownAlt2 from "@iconify/icons-dashicons/arrow-down-alt2";
import "./Header.css";
export default function Header(props) {
  return (
    <header  className="main-header">
      <div ref={(rf) => props.getRef(rf, "header")} className="callback">
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
        icon={arrowDownAlt2}
        style={{ color: "#c4c4c4", fontSize: "53px" }}
      />
    </header>
  );
}
