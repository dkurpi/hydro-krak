import React, { Component } from "react";
import "./OfferDetails.css";
import { Element } from "react-scroll";

const offer = [
  {
    id: 1,
    url: "/images/company.jpg')",
    mainText:
      "Montaż instalacji wodno- kanalizacyjnych wewnętrznych i zewnętrznych",
    text: "",
  },
  {
    id: 2,
    url:
      "https://cdn.atal.pl/p/671278ef59b728d53400edd9d7ee3c4c/496613c9d54e1a793e40ba0cde18f642_5ecf65f270c35-conf954x644_m.jpg",
    mainText: "Montaż instalacji grzewczych wewnętrznych i zewnętrznych",
    text: "",
  },
  {
    id: 3,
    url: "https://higieniczny.pl/userdata/public/news/images/126.jpg",
    mainText: "Montaż instalacji gazowych wewnętrznych i zewnętrznych",
    text: "",
  },
  {
    id: 4,
    url:
      "https://cdn.atal.pl/p/671278ef59b728d53400edd9d7ee3c4c/496613c9d54e1a793e40ba0cde18f642_5ecf65f270c35-conf954x644_m.jpg",
    mainText: "Montaż kotłów gazowych",
    text: "",
  },
  {
    id: 5,
    url: "/images/company.jpg",
    mainText: "Montaż pomp ciepła",
    text: "",
  },
  {
    id: 6,
    url:
      "https://cdn.atal.pl/p/671278ef59b728d53400edd9d7ee3c4c/496613c9d54e1a793e40ba0cde18f642_5ecf65f270c35-conf954x644_m.jpg",
    mainText: "Montaż układów solarnych",
    text: "",
  },
  {
    id: 7,
    url:
      "https://cdn.atal.pl/p/671278ef59b728d53400edd9d7ee3c4c/496613c9d54e1a793e40ba0cde18f642_5ecf65f270c35-conf954x644_m.jpg",
    mainText: "Montaż zmiękczaczy wody użytkowej",
    text: "",
  },
  {
    id: 8,
    url:
      "https://cdn.atal.pl/p/671278ef59b728d53400edd9d7ee3c4c/496613c9d54e1a793e40ba0cde18f642_5ecf65f270c35-conf954x644_m.jpg",
    mainText: "Cięcie i wiercenie w betonie",
    text: "",
  },
];

export default function OfferDetails() {
  return (
    <>
      <Element name="aplication">
        <div className="menubgc"></div>
        <div
          data-aos="fade-up"
          className="offer__text"
          style={{ margin: "5vh auto 10vh", padding: "0 5vw" }}
        >
          <h2 className="offer__text-main">NASZA OFERTA</h2>
          <p className="offer__text-paragraph">
            Szeroki zakres wiedzy oraz wieloletnie doświadczenie w branży
            instalacji sanitarnych pozwala nam zaoferować najwyższą jakość
            wykonywanych usług. Niezależnie od rodzaju zlecenia mogą Państwo
            liczyć na pełen profesjonalizm, dyspozycyjność i pełne
            ukierunkowanie na Państwa potrzeby.
          </p>
        </div>
        {offer.map(({ id, url, mainText }) => (
          <section className="offer-details">
            <div
              data-aos="fade-up"
              className={`offer-details__text ${
                id % 2 !== 0 ? "left" : "right"
              }`}
            >
              <h2 className="offer-details__main-text">{mainText}</h2>
              <h4>Opis usługi:</h4>
              <ul>
                <li>możliwość szkoleń i rozwoju zawodowego</li>
                <li>umowe o prace</li>
                <li>własne narzędzia</li>
                <li>ubrania robocze</li>
                <li>
                  termin wypłaty indywidualnie dopasowany do potrzeb pracownika
                </li>
                <li>zakwaterowanie w Krakowie dla obcokrajowców</li>
              </ul>
            </div>
            <div
              style={{ backgroundImage: `url(${url})` }}
              className={`offer-details__img ${
                id % 2 === 0 ? "left" : "right"
              }`}
            />
          </section>
        ))}
      </Element>
    </>
  );
}
