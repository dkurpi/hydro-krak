import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <section className="about">
        <div data-aos="fade-right" className="about__text">
          <h2>O FIRMIE</h2>
          <p>
            Firma Hydrokrak zajmuję się montażem i serwisem instalacji
            sanitarnych. Działamy zgodnie ze standardami jak i wymaganiami
            klienta.
          </p>
          <p>
            Doświadczona kadra zapewnia najwyższą jakość wykonywanych usług dla
            klienta. Ofertę kierujemy zarówno do dużych firm budowlanych i
            przemysłowych jak i osób prywatnych.
          </p>
          <p>
            Współpracujemy rownież ze znaną siecią fast-food, oraz z
            współdzielniami mieszkaniowymi. Działamy glownie na terenach{" "}
            <b>Krakowa</b> jak i w jego okolicach
          </p>
          <p>Zapraszamy do zapoznania sie z ofertą firmy.</p>
        </div>

        <div className="about__img"></div>
      </section>
      <section className="numbers">
        <ul>
          <li data-aos="fade-up"  ata-aos-duration="200"  data-aos-delay="0">
            <strong>2017</strong>
            <span>
              Rok <br />
              założenia
            </span>
          </li>
          <li data-aos="fade-up"  ata-aos-duration="200"  data-aos-delay="300">
            <strong>7</strong>
            <span>
              Liczba <br /> pracowników
            </span>
          </li>
          <li data-aos="fade-up"  ata-aos-duration="200"  data-aos-delay="600">
            <strong>2 500+</strong>
            <span>
              Wykonanych <br />
              projektów
            </span>
          </li>
          <li data-aos="fade-up"  ata-aos-duration="200"  data-aos-delay="900">
            <strong>1 500+</strong>
            <span>
              Zadowoloncyh <br />
              klientów
            </span>
          </li>
        </ul>
      </section>
    </>
  );
}
