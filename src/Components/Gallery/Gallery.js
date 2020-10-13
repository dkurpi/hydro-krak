import React from "react";
import "./Gallery.css";
import "lightgallery.js/dist/css/lightgallery.css";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { Element } from "react-scroll";

export default function Gallery() {
  const images = [
    "/images/card1.jpg",
    "/images/card2.jpg",
    "/images/card3.jpg",
    "/images/card1.jpg",
    "/images/card1.jpg",
    "/images/card2.jpg",
    "/images/card3.jpg",
    "/images/card1.jpg",
    "/images/card1.jpg",
    "/images/card2.jpg",
    "/images/card3.jpg",
    "/images/card1.jpg",
    "/images/card2.jpg",
    "/images/card3.jpg",
    "/images/card1.jpg",
  ];

  const cards = images.map((img, idx) => {
    return (
      <LightgalleryItem group={`item`} src={img}>
        <div class="gallery__item">
          <img className="gallery__item-img" src={img} alt="" />
        </div>
      </LightgalleryItem>
    );
  });

  return (
    <Element name="realizations">
      <div className="menubgc"></div>
      <div className="gallery">
        <div data-aos="fade-right" className="gallery__text">
          <h2>NASZE REALIZACJE</h2>
          <p className="gallery__text-paragraph">
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
        <div className="gallery__grid">
          <LightgalleryProvider>{cards}</LightgalleryProvider>
        </div>
      </div>
    </Element>
  );
}
