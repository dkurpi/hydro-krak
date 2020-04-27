import React from "react";
import "./Realizations.css";

export default function Realizations() {
  return (
    <div className="real container realization">
      <div className="realization__text">
        <h2>NASZE REALIZACJE</h2>
        <p>
          Szeroki zakres wiedzy oraz wieloletnie doświadczenie w branży
          Automatyki Przemysłowej oraz Informatyki jest gwarantem najwyższej
          jakości usługi w dziedzinie szeroko pojętej automatyzacji produkcji.
          Niezależnie od rodzaju zlecenia mogą Państwo liczyć na pełen
          profesjonalizm, dyspozycyjność i pełne ukierunkowanie na potrzeby
          klienta.
        </p>
      </div>
      <div className="realization__cards">
        <div className="card">
          <img className="card__img" src="/images/card1.jpg" alt="" />
          <div className="card__text">
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
          </div>
        </div>
        <div className="card">
          <img className="card__img" src="/images/card1.jpg" alt="" />
          <div className="card__text">
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
          </div>
        </div>
        <div className="card">
          <img className="card__img" src="/images/card1.jpg" alt="" />
          <div className="card__text">
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
          </div>
        </div>
        <div className="card">
          <img className="card__img" src="/images/card2.jpg" alt="" />
          <div className="card__text">
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
