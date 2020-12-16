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
              Firma Hydrokrak została założona w 2017 roku. Przede wszystkim
              zajmujemy się montażem, serwisem i modernizacją instalacji
              sanitarnych zarówno wewnętrznych jak i zewnętrznych. Serwis,
              naprawa kotłów gazowych to dla nas nie problem. Ponadto świadczymy
              usługi z zakresu cięcia i wiercenia w betonie. Wykonujemy
              przewierty do średnicy 650mm. Stoimy frontem do klienta,
              doradzamy, podpowiadamy oraz działamy zgodnie ze standardami jak i
              wymaganiami od nas oczekiwanymi.
            </p>
            <p className="about__paragraph">
              Prowadzimy również pogotowie hydrauliczne. Pilne awarie można
              zgłaszać całą dobę 7 dni w tygodniu. Postaramy się zareagować jak
              najszybciej!
            </p>
            <p className="about__paragraph">
              Jesteśmy nastawieni nie tylko na współprace z dużymi firmami
              budowlanymi , przemysłowymi czy inwestorami ale również na klienta
              prywatnego.Gwarantujemy krótki czas realizacji i konkurencyjne
              ceny z uwagi na długo wypracowywane rabaty wśród dostawców
              materiałów.
            </p>
            <p className="about__paragraph">
              Nasza doświadczona i starannie dobrana kadra zapewnia najwyższą
              jakość wykonywanych usług. Pracujemy na najlepszych dostępnych
              narzędziach, co stanowi gwarancję dobrze i szybko wykonanej pracy.
              Stawiamy na ciągły rozwój !!
            </p>
            <p className="about__paragraph">
              Niech Naszą reklamą będzie współpracaze spółdzielniami
              mieszkaniowymi, gdzie m.in. likwidujemy piecyki gazowe i montujemy
              centralną ciepłą wodę. Bierzemy czynny udział w poprawie jakości,
              czystości powietrza w Krakowie i okolicach w ramach programu Stop
              Smog, likwidując piece węglowe i zakładając kotły gazowe, układy
              solarne czy pompy ciepła. Dogadujemy się również dobrze ze znaną
              siecią fast food’ów i restauracji pomagając im w sytuacjach
              wymagających natychmiastowej interwencji.
            </p>
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
              <strong className="numbers__item-number">1.5K+</strong>
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
