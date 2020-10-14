import React from "react";
import "./Realizations.css";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
import { Element } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { scrollToTop } from "../../Utils/Scroll&Animations";

export default function Realizations() {
  const cardsObj = [
    {
      title: "Ogrzewanie podłogowe",
      images: [
        "/images/pod3.jpg",
        "/images/pod1.jpg",
        "/images/pod2.jpg",
        "/images/pod4.jpg",
      ],
      text: `Lubisz przyjemne ciepło rozchodzące się po całym pomieszczeniu, a tradycyjny grzejnik nie spełnia Twoich oczekiwań? Rozwiązaniem dla Ciebie jest ogrzewanie podłogowe.`,
    },
    {
      title: "Kotły gazowe",
      images: ["/images/kociol1.jpg", "/images/kociol2.jpg"],
      text: `Montaż kotłów gazowych to tylko jedna z naszych usług. Świadczymy kompleksową pomoc w zakresie instalacji gazowych. Zajmujemy się konserwacją oraz serwisem kotłów gazowych.`,
    },
    {
      title: "Instalacje hydrauliczne",
      images: [
        "/images/inst1.jpg",
        "/images/inst2.jpg",
        "/images/inst3.jpg",
        "/images/inst4.jpg",
      ],
      text: `Wykonujemy praktycznie wszelkie domowe instalacje: takie jak ogólne instalacje hydrauliczne, instalacje wodno-kanalizacyjne, centralnego ogrzewania Jako firma oferujemy modernizacje już istniejących instalacji, ich serwisowanie jak oraz wykonanie całkowicie nowych systemów.`,
    },
  ];
  const cards = cardsObj.map((card, idx) => {
    return (
      <div
        data-aos="fade-up"
        ata-aos-duration="200"
        data-aos-delay={200 * idx}
        className="card"
        data-aos-offset="50"
      >
        <LightgalleryProvider>
          <LightgalleryItem group={`item`} src={card.images[0]}>
            <div className="card__img-wrapper">
              <img className="card__img" src={card.images[0]} alt="" />
            </div>
          </LightgalleryItem>
          {card.images.map((img, idx) => {
            if (idx === 0) return null;
            return <LightgalleryItem group={`item`} src={img} />;
          })}
        </LightgalleryProvider>
        <div className="card__text">
          <h4 className="card__text-main">{card.title}</h4>
          <p>{card.text}</p>
          <LinkRouter
            onClick={() => setTimeout(() => scrollToTop(), 100)}
            to="/galeria"
          >
            <p style={{ fontWeight: "500" }}>Zobacz więcej</p>
          </LinkRouter>
        </div>
      </div>
    );
  });

  return (
    <Element name="realizations">
      <div className="realization container">
        <div data-aos="fade-right" className="realization__text">
          <h2 className="realization__text-main">NASZE REALIZACJE</h2>
          <p className="realization__text-paragraph">
            Szeroki zakres wiedzy oraz wieloletnie doświadczenie w branży
            zajmującej się montażem instalacji sanitarnych, gwarantujemy
            najwyższą jakość wykonywanych usług dla klienta. Niezależnie od
            rodzaju zlecenia mogą Państwo liczyć na pełen profesjonalizm,
            dyspozycyjność i pełne ukierunkowanie na potrzeby klienta.
          </p>
        </div>
        <div className="realization__cards">{cards}</div>
        <div className="seeMore"></div>
      </div>
    </Element>
  );
}
