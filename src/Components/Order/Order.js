import React from "react";
import "./Order.css";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
import { Element } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

export default function Order(props) {
  const cardsObj = [
    {
      images: ["/images/kociol.jpg"],
      title: "Kotły gazowe",
      text: `Współpracujemy z najlepszymi producentami z branży automatyki i techniki cieplnej, oferując kotły gazowe, grzejniki i palniki gazowe najwyższej jakości.`,
    },
    {
      images: ["/images/kociol.jpg"],
      title: "Kotły gazowe",
      text: `Współpracujemy z najlepszymi producentami z branży automatyki i techniki cieplnej, oferując kotły gazowe, grzejniki i palniki gazowe najwyższej jakości.`,
    },
    {
      images: ["/images/kociol.jpg"],
      title: "Kotły gazowe",
      text: `Współpracujemy z najlepszymi producentami z branży automatyki i techniki cieplnej, oferując kotły gazowe, grzejniki i palniki gazowe najwyższej jakości.`,
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
            if (idx === 0) return null;
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
      <div className="menubgc"></div>
      <div className="realization container ">
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
