import React, { useEffect } from "react";
import "./OfferRellax.css";
import { Element } from "react-scroll";
import Rellax from "rellax";

import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";

export default function OfferRellax(props) {
  useEffect(() => {
    var rellax = new Rellax(".rellax");
  }, []);

  return (
    <Element name="offer">
      <section className="offer container">
        <div data-aos="fade-right" className="offer__text">
          <h2>NASZE PRODUKTY</h2>
          <p>
            Szeroki zakres wiedzy oraz wieloletnie doświadczenie w branży
            zajmującej się montażem instalacji sanitarnych. Gwarantujemy
            najwyższą jakość wykonywanych usług dla klienta. Niezależnie od
            rodzaju zlecenia mogą Państwo liczyć na pełen profesjonalizm,
            dyspozycyjność i pełne ukierunkowanie na potrzeby klienta.
          </p>
        </div>
      </section>
      <Element name="product1">
        <LightgalleryProvider>
          <div className="offer__card">
            <LightgalleryItem group={`item`} src="/images/parralax1.jpg">
              <div className="offer__card-img rellax" data-rellax-speed="-1">
                <img src="/images/parralax1.jpg" alt="" />
              </div>
            </LightgalleryItem>
            <LightgalleryItem group={`item`} src="/images/parralax2.png"/>
            <LightgalleryItem group={`item`} src="/images/parralax3.jpg"/>

            <div className="offer__card-text rellax" data-rellax-speed="3">
              <h2>PRODUKT 1</h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum"
              </p>
              <div className="btn">ZOBACZ WIĘCEJ</div>
            </div>
          </div>
        </LightgalleryProvider>
      </Element>
      <Element name="product2">
        <div className="offer__card">
          <div
            style={{
              marginLeft: "0",
              marginRight: "-10em",
            }}
            className="offer__card-text rellax"
            data-rellax-speed="2"
          >
            <h2>PRODUKT 2</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum"
            </p>
            <div className="btn">ZOBACZ WIĘCEJ</div>
          </div>
          <div className="offer__card-img">
            <img
              src="/images/parralax2.png"
              alt=""
              className="offer__card-img"
            />
          </div>
        </div>
      </Element>
      <Element name="product3">
        <div className="offer__card">
          <div className="offer__card-img">
            <img
              src="/images/parralax3.jpg"
              alt=""
              className="offer__card-img"
            />
          </div>
          <div className="offer__card-text rellax" data-rellax-speed="1.5">
            <h2>PRODUKT 3</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum"
            </p>
            <div className="btn">ZOBACZ WIĘCEJ</div>
          </div>
        </div>
      </Element>
    </Element>
  );
}
