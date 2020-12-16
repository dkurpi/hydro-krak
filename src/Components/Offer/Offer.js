import React from "react";
import "./Offer.css";
import { Element } from "react-scroll";
import { scrollToTop } from "../../Utils/Scroll&Animations";
import { Link as LinkRouter } from "react-router-dom";
export default function Offer(props) {
  const cards = (
    <div className="offer__cards">
      <div data-aos="fade-up" className="card card--offer">
        <div className="card__img-wrapper">
          <img className="card__img" src="/images/card1.jpg" alt="" />
        </div>
        <div className="card__text">
          <h4 className="card__text-main">Montaż instalacji</h4>
          <ul className="card__list">
            <li className="card__list-item">wodnych</li>
            <li className="card__list-item">kanalizacyjncyh</li>
            <li className="card__list-item">gazowych</li>
            <li className="card__list-item">grzewczych</li>
            <li className="card__list-item">fotowoltaicznych</li>
          </ul>
        </div>
      </div>
      <div data-aos="fade-up" className="card card--offer">
        <img className="card__img" src="/images/card2.jpg" alt="" />
        <div className="card__text">
          <h4 className="card__text-main">Montaż kotłów</h4>
          <ul className="card__list">
            <li className="card__list-item">
              gazowych z zamkniętą komorą spalania
            </li>
            <li className="card__list-item">
              gazowych z otwartą komorą spalania
            </li>
            <li className="card__list-item">na paliwa stałe</li>
            <li className="card__list-item">
              montaż niezależnych kominów i wkładów kominowych
            </li>
          </ul>
        </div>
      </div>
      <div data-aos="fade-up" className="card card--offer">
        <img className="card__img" src="/images/card3.jpg" alt="" />
        <div className="card__text">
          <h4 className="card__text-main">Pogotowie hydrauliczne </h4>
          <ul className="card__list">
            <li className="card__list-item">
              poważne awarie można zgłaszać 24h/dobę
            </li>
            <li className="card__list-item">
              lokalizujemy i naprawiamy wycieki
            </li>
            <li className="card__list-item">
              udrożniamy zatkane rury kanalizacyjne wewnętrzne i zewnętrzne
            </li>
            <li className="card__list-item">
              sprawdzenie kamerami inspekcyjnymi
            </li>
          </ul>
        </div>
      </div>
      <div data-aos="fade-up" className="card card--offer">
        <img
          className="card__img"
          src="https://cdn.pkt.pl/f-5117-technika-diamentowa-najlepszy-sposob-na-ciecie-betonu.jpg"
          alt=""
        />
        <div className="card__text">
          <h4 className="card__text-main">Cięcie i wiercenie w betonie</h4>
          <ul className="card__list">
            <li className="card__list-item">
              przewierty w zbrojonym betonie od fi 30 do fi 650mm
            </li>
            <li className="card__list-item">
              przewierty na czysto, bez kurzu i bez kotwienia
            </li>
            <li className="card__list-item">
              ciecie betonu zbrojonego na sucho i mokro
            </li>
            <li className="card__list-item">
              jednorazowe cięcie do 14cm głębokości
            </li>
          </ul>
        </div>
      </div>
      <div data-aos="fade-up" className="card card--offer">
        <img
          className="card__img"
          src="https://www.pogotowie24h-wlkp.pl/images/design/box-4.jpg"
          alt=""
        />
        <div className="card__text">
          <h4 className="card__text-main">Przeróbki i modernizacja</h4>
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
      <div data-aos="fade-up" className="card card--offer">
        <img
          className="card__img"
          src={`https://www.bphydraulicpress.com/upload/offer/serwis/Serwis,_Remonty,_naprawy_i_modernizacje_pras_hydraulicznych_B&P_Hydraulic_Press_(2).jpg`}
          alt=""
        />
        <div className="card__text">
          <h4 className="card__text-main">Serwis</h4>
          <ul className="card__list">
            <li className="card__list-item">
              usuwanie awarii instalacji sanitarnych 24h na dobę
            </li>
            <li className="card__list-item">
              udrożnianie rur kanalizacyjnych od Ø30 do Ø160
            </li>
            <li className="card__list-item">
              sprawdzanie szczelności instalacji gazowych
            </li>
            <li className="card__list-item">kotłów gazowych</li>
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
            instalacji sanitarnych pozwala nam zaoferować najwyższą jakość
            wykonywanych usług. Niezależnie od rodzaju zlecenia mogą Państwo
            liczyć na pełen profesjonalizm, dyspozycyjność i pełne
            ukierunkowanie na Państwa potrzeby.
          </p>
        </div>
        {cards}
      </section>
      <div data-aos="fade-down" className="job job--offer">
        <div className="container">
          <div className="job__text">
            <h3 className="job__text-main">
              Nie znalazłeś interesującej cię usługi?
            </h3>
            <p className="job__text-paragraph">Zobacz naszą pełną ofertę</p>
          </div>
          <LinkRouter
            onClick={() => setTimeout(() => scrollToTop(), 100)}
            to="/oferta"
          >
            <a className="job__button" href="#">
              <div>Dowiedz się więcej</div>
            </a>
          </LinkRouter>
        </div>
      </div>
    </Element>
  );
}
