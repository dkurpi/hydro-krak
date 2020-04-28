import React from "react";
import "./About.css";

export default function About() {

  return (
    <>
      <section className="about">
        <div className="about__text">
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
            Współpracujemy rownież z dana siecią fast-food, rownież ze
            współdzielniami mieszkaniowymi. Działamy glownie na terenach{" "}
            <b>Krakowa</b> jak i w jego okolicach
          </p>
          <p>Zapraszamy do zapoznania sie z ofertą firmy.</p>
        </div>

        <div className="about__img"></div>
      </section>
      <section className="numbers">
        <ul>
          <li>
            <strong>2017</strong>
            <span>
              Rok <br />
              założenia
            </span>
          </li>
          <li>
            <strong>7</strong>
            <span>
              Liczba <br /> pracowników
            </span>
          </li>
          <li>
            <strong>2 500+</strong>
            <span>
              Wykonanych <br />
              projektów
            </span>
          </li>
          <li>
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
