import React from "react";
import "./Partners.css";

export default function Partners() {
  return (
    <div className="partners">
      <h2>PARTNERZY</h2>
      <div className="partners__logos">
        <a href="https://www.buderus.com/pl/pl/" className="partners__img">
          <img src="/images/mont 1.png" alt="" />
        </a>
        <a href="https://www.vaillant.pl/" className="partners__img">
          <img src="/images/mont 2.png" alt="" />
        </a>
        <a href="https://dedietrich.pl/" className="partners__img">
          <img src="/images/mont 3.png" alt="" />
        </a>
        <a
          href="https://www.bosch-thermotechnology.com/pl/pl/budynki-mieszkalne/informacje/o-nas/junkers-+-bosch-=-bosch-termotechnika/"
          className="partners__img"
        >
          <img src="/images/mont 4.png" alt="" />
        </a>
        <a href="https://sigmali.pl/" className="partners__img">
          <img src="/images/sys1.png" alt="" />
        </a>
        <a href="https://www.comap.pl/pl" className="partners__img">
          <img src="/images/sys2.png" alt="" />
        </a>
        <a href="https://www.saunierduval.pl/" className="partners__img">
          <img src="/images/sys3.png" alt="" />
        </a>
      </div>
    </div>
  );
}
