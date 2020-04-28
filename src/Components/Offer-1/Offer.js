import React from "react";
import "./Offer.css";

export default function Offer(props) {
  return (
    <section
      ref={(rf) => props.getRef(rf, "offer")}
      className="offer container"
    >
      <div className="offer__text">
        <h2>NASZA OFERTA</h2>
        <p>
          Szeroki zakres wiedzy oraz wieloletnie doświadczenie w branży
          zajmującej się montażem instalacji sanitarnych. Gwarantujemy najwyższą
          jakość wykonywanych usług dla klienta. Niezależnie od rodzaju zlecenia
          mogą Państwo liczyć na pełen profesjonalizm, dyspozycyjność i pełne
          ukierunkowanie na potrzeby klienta.
        </p>
      </div>
      <div className="offer__cards">
        <div className="card">
          <img className="card__img" src="/images/card1.jpg" alt="" />
          <div className="card__text">
            <h4>Montaż instalacji</h4>
            <ul>
              <li>wodnych</li>
              <li>kanalizacyjncyh</li>
              <li>gazowych</li>
              <li>fotowoltaicznych</li>
              <li>grzewczych</li>
              <li>ogrzewania podłogowego</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <img className="card__img" src="/images/card2.jpg" alt="" />
          <div className="card__text">
            <h4>Serwis</h4>
            <ul>
              <li>usuwanie awarii instalacji sanitarnych</li>
              <li>udrożnianie kanalzacji od Ø30 do Ø160</li>
              <li>instalacji gazowych</li>
              <li>kotłów gazowych</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <img className="card__img" src="/images/card3.jpg" alt="" />
          <div className="card__text">
            <h4>Przeróbki i modernizacja </h4>
            <ul>
              <li>montaż dodatkowych punktów wodno-kanalizacyjnych</li>
              <li>wymiana kotłów węglowych na gazowe</li>
              <li>wymiana grzejników żeliwnych na płytowe</li>
              <li>montaż dodatkowych punktów grzewczych</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
