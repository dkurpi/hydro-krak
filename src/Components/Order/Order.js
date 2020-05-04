import React from "react";
import "./Order.css";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
import { Element } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

export default function Order(props) {
  const cardsObj = [
    {
      images: [
        "/images/card1.jpg",
        "/images/card2.jpg",
        "/images/card3.jpg",
        "/images/card1.jpg",
      ],
      title: "Urządzonko 1",
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
      title: "Urządzonko 2",

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
      title: "Urządzonko 3",

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
          <h4>{card.title}</h4>
          <p>{card.text}</p>
          <LinkRouter
            onClick={() => setTimeout(() => props.scrollToTop(), 100)}
            to="/galeria"
          ></LinkRouter>
        </div>
      </div>
    );
  });

  return (
    <Element name="realizations">
      <div className="real container realization">
        <div data-aos="fade-right" className="realization__text">
          <h2>TU JAKIŚ TEKST</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ab
            totam cumque voluptates numquam autem nemo hic optio necessitatibus
            aspernatur, assumenda eaque molestias quis nesciunt eos itaque
            quisquam fuga asperiores? Pariatur repudiandae ratione optio cumque,
            possimus magnam autem cupiditate quisquam et, rem accusamus quos
            ipsum a! Ad, mollitia nam consequatur non dolor accusamus dicta.
            Itaque aliquam dolore maxime possimus provident? Sequi aut ullam
            obcaecati, et totam natus vitae dicta ut. Molestiae a accusantium,
            culpa corrupti possimus modi esse voluptatibus eius rerum eveniet
            soluta voluptatum ea beatae temporibus eaque numquam blanditiis?
            Veritatis harum similique maiores quas soluta neque, a eos
            exercitationem. Quis corrupti eveniet voluptatem deserunt voluptas
            quaerat quod dolor distinctio labore enim? Veniam cupiditate maxime
            dolores quo dignissimos assumenda ullam.
          </p>
        </div>
        <div className="realization__cards">{cards}</div>
      </div>
    </Element>
  );
}
