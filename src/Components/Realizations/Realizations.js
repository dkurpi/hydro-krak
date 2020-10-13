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
      images: [
        "/images/card1.jpg",
        "/images/card2.jpg",
        "/images/card3.jpg",
        "/images/card1.jpg",
      ],
      text: `I'm a paragraph. Click here to add your own text and edit me. It’s
      easy. Just click “Edit Text” or double click me to add your own
      content and make changes to the font.`,
    },
    {
      images: [
        "/images/card2.jpg",
        "/images/card1.jpg",
        "/images/card3.jpg",
        "/images/card2.jpg",
      ],
      text: `I'm a paragraph. Click here to add your own text and edit me. It’s
      easy. Just click “Edit Text” or double click me to add your own
      content and make changes to the font.`,
    },
    {
      images: [
        "/images/card3.jpg",
        "/images/card1.jpg",
        "/images/card2.jpg",
        "/images/card3.jpg",
      ],
      text: `I'm a paragraph. Click here to add your own text and edit me. It’s
      easy. Just click “Edit Text” or double click me to add your own
      content and make changes to the font.`,
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
            <div className="card_img-wrapper">
              <img className="card__img" src={card.images[0]} alt="" />
            </div>
          </LightgalleryItem>
          {card.images.map((img, idx) => {
            if (idx === 0) return;
            return <LightgalleryItem group={`item`} src={img} />;
          })}
        </LightgalleryProvider>
        ;
        <div className="card__text">
          <h4>Text {idx + 1}</h4>
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
            dyspozycyjność i pełne ukierunkowanie na potrzeby klienta. I'm a
            paragraph. Click here to add your own text and edit me. It’s easy.
            Just click “Edit Text” or double click me to add your own content
            and make changes to the font.
          </p>
        </div>
        <div className="realization__cards">{cards}</div>
        <div className="seeMore"></div>
      </div>
    </Element>
  );
}
