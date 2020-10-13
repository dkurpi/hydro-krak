import React from "react";
import "./About.css";

import { Element } from "react-scroll";

export default function About() {
  return (
    <>
      <Element name="about">
        <section className="about">
          <div data-aos="fade-right" className="about__text">
            <h2>O FIRMIE</h2>
            <p className="about__paragraph">
              Firma Hydrokrak zajmuję się montażem i serwisem instalacji
              sanitarnych. Działamy zgodnie ze standardami jak i wymaganiami
              klienta.
            </p>
            <p className="about__paragraph">
              Doświadczona kadra zapewnia najwyższą jakość wykonywanych usług
              dla klienta. Ofertę kierujemy zarówno do dużych firm budowlanych i
              przemysłowych jak i osób prywatnych.
            </p>
            <p className="about__paragraph">
              Współpracujemy rownież ze znaną siecią fast-food, oraz z
              współdzielniami mieszkaniowymi. Działamy glownie na terenach{" "}
              <b>Krakowa</b> jak i w jego okolicach
            </p>
            <p className="about__paragraph">Zapraszamy do zapoznania sie z ofertą firmy.</p>
          </div>

          <div className="about__img"></div>
        </section>
        <section className="numbers">
          <ul className="numbers__list">
            <li
              className="numbers__item"
              data-aos="fade-up"
              data-aos-offset="200"
              ata-aos-duration="200"
              data-aos-delay="0"
            >
              <strong className="numbers__item-number">2017</strong>
              <span className="numbers__item-description">
                Rok <br />
                założenia
              </span>
            </li>
            <li
              className="numbers__item"
              data-aos="fade-up"
              data-aos-offset="200"
              ata-aos-duration="200"
              data-aos-delay="300"
            >
              <strong className="numbers__item-number">7</strong>
              <span className="numbers__item-description">
                Liczba <br /> pracowników
              </span>
            </li>
            <li
              className="numbers__item"
              data-aos="fade-up"
              data-aos-offset="200"
              ata-aos-duration="200"
              data-aos-delay="600"
            >
              <strong className="numbers__item-number">2.5K+</strong>
              <span className="numbers__item-description">
                Wykonanych <br />
                projektów
              </span>
            </li>
            <li
              className="numbers__item"
              data-aos="fade-up"
              data-aos-offset="200"
              ata-aos-duration="200"
              data-aos-delay="900"
            >
              <strong  className="numbers__item-number">1.5K+</strong>
              <span className="numbers__item-description">
                Zadowoloncyh <br />
                klientów
              </span>
            </li>
          </ul>
        </section>
      </Element>
    </>
  );
}
