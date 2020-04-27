import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import bxlFacebookCircle from "@iconify/icons-bx/bxl-facebook-circle";
import mailIcon from "@iconify/icons-ls/mail";
import telephoneIcon from "@iconify/icons-foundation/telephone";

export default function Fotter() {
  return (
    <fotter>
      <div className="footer-contact">
        <ul>
          <li>
            <Icon
              icon={telephoneIcon}
              style={{ color: "#ffffff", fontSize: "44px" }}
            />
            888 888 888
          </li>
          <li>
            <Icon
              icon={mailIcon}
              style={{ color: "#ffffff", fontSize: "44px" }}
            />
            instalacje@hydro-krak.pl
          </li>
          <li>
            <Icon
              icon={bxlFacebookCircle}
              style={{ color: "#ffffff", fontSize: "46px" }}
            />
            hydrokrak
          </li>
        </ul>
      </div>
      <div className="copyright">© 2020 HydroKrak</div>
    </fotter>
  );
}
