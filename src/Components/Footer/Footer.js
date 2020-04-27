import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import bxlFacebookCircle from "@iconify/icons-bx/bxl-facebook-circle";
import mailIcon from "@iconify/icons-ls/mail";
import telephoneIcon from "@iconify/icons-foundation/telephone";

import "./Fotter.css";

export default function Fotter() {
  return (
    <footer>
      <div className="footer-contact container">
        <ul>
          <li>
            <Icon
              className="icon-footer"
              icon={telephoneIcon}
              style={{ color: "#ffffff", fontSize: "32px" }}
            />
            <a href="tel:888 888 888">888 888 888</a>
          </li>
          <li>
            <Icon
              className="icon-footer"
              icon={mailIcon}
              style={{ color: "#ffffff", fontSize: "32px" }}
            />
            <a href="mailto:instalacje@hydro-krak.pl">
              instalacje@hydro-krak.pl
            </a>
          </li>
          <li>
            <Icon
              className="icon-footer"
              icon={bxlFacebookCircle}
              style={{ color: "#ffffff", fontSize: "32px" }}
            />
            <a href="#">hydrokrak</a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <span>© 2020 HydroKrak</span>
      </div>
    </footer>
  );
}
