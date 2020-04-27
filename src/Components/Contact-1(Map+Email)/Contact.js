import React from "react";
import { Icon } from "@iconify/react";
import locationPin from "@iconify/icons-entypo/location-pin";

export default function Contact() {
  return (
    <section class="contact">
      <div className="job">
        <div className="job__text">
          <h3>Chciałbyś z nami pracować?</h3>
          <p>
            Stworzyliśmy zespół najlepszych fachowców, stawiamy jednak na ciągły
            rozwój.
          </p>
        </div>
        <a className="job__more" href="#">
          <button>ZOBACZ WIECEJ</button>
        </a>
      </div>

      <div className="map" />

      <div className="contacts">
        <div className="contacts-form">
          <h2>Zapytaj o darmową wycenę</h2>
          <input type="text" placeholder="Imię" />
          <input type="text" placeholder="Nazwisko" />
          <input type="text" placeholder="Adres e-mai/l" />
          <input type="text" placeholder="Numer Telefonu" />
          <input type="text" placeholder="Treść wiadomości" />
          <button>WYŚLIJ</button>
        </div>
        <div className="contacts-info">
          <h1>HYDROKRAK</h1>
          <h2>Bartosz Borczak</h2>
          <p>Kompleksowe usługi instalacji</p>
          <div className="destination">
            <Icon
              icon={locationPin}
              style={{ color: "#028fcc", fontSize: "91px" }}
            />
            <p>
              31-934 Kraków <br />
              os. Centrum E 16 lok. 21 <br />
              woj. małopolskie
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
