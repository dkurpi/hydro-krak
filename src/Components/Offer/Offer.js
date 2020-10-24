import React from "react";
import "./Offer.css";
import { Element } from "react-scroll";

export default function Offer(props) {
  const cards = (
    <div className="offer__cards">
      <div data-aos="fade-up" className="card">
        <div className="card__img-wrapper">
          <img className="card__img" src="/images/card1.jpg" alt="" />
        </div>
        <div className="card__text">
          <h4 className="card__text-main">Montaż instalacji</h4>
          <ul className="card__list">
            <li className="card__list-item">wodnych</li>
            <li className="card__list-item">kanalizacyjncyh</li>
            <li className="card__list-item">gazowych</li>
            <li className="card__list-item">fotowoltaicznych</li>
            <li className="card__list-item">grzewczych</li>
            <li className="card__list-item">ogrzewania podłogowego</li>
          </ul>
        </div>
      </div>
      <div data-aos="fade-up" className="card">
        <img className="card__img" src="/images/card2.jpg" alt="" />
        <div className="card__text">
          <h4 className="card__text-main">Serwis</h4>
          <ul className="card__list">
            <li className="card__list-item">
              usuwanie awarii instalacji sanitarnych
            </li>
            <li className="card__list-item">
              udrożnianie kanalzacji od Ø30 do Ø160
            </li>
            <li className="card__list-item">instalacji gazowych</li>
            <li className="card__list-item">kotłów gazowych</li>
          </ul>
        </div>
      </div>
      <div data-aos="fade-up" className="card">
        <img className="card__img" src="/images/card3.jpg" alt="" />
        <div className="card__text">
          <h4 className="card__text-main">Przeróbki i modernizacja </h4>
          <ul className="card__list">
            <li className="card__list-item">
              montaż dodatkowych punktów wodno-kanalizacyjnych
            </li>
            <li className="card__list-item">
              wymiana kotłów węglowych na gazowe
            </li>
            <li className="card__list-item">
              wymiana grzejników żeliwnych na płytowe
            </li>
            <li className="card__list-item">
              montaż dodatkowych punktów grzewczych
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  return (
    <Element name="offer">
      <section className="offer container">
        <div data-aos="fade-right" className="offer__text">
          <h2 className="offer__text-main">NASZA OFERTA</h2>
          <p className="offer__text-paragraph">
            Szeroki zakres wiedzy oraz wieloletnie doświadczenie w branży
            zajmującej się montażem instalacji sanitarnych. Gwarantujemy
            najwyższą jakość wykonywanych usług dla klienta. Niezależnie od
            rodzaju zlecenia mogą Państwo liczyć na pełen profesjonalizm,
            dyspozycyjność i pełne ukierunkowanie na potrzeby klienta.
          </p>
        </div>
        {cards}
      </section>
    </Element>
  );
}
