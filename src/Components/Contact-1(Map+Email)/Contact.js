import React from "react";
import { Icon } from "@iconify/react";
import locationPin from "@iconify/icons-entypo/location-pin";
import "./Contact.css";

export default function Contact() {
  return (
    <section class="contact">
      <div className="job ">
        <div className="container">
          <div className="job__text">
            <h3>Chciałbyś z nami pracować?</h3>
            <p>
              Stworzyliśmy zespół najlepszych fachowców, stawiamy jednak na
              ciągły rozwój.
            </p>
          </div>
          <a className="button" href="#">
            <div>Dowiedz się wiecej</div>
          </a>
        </div>
      </div>
      <div className="map">
        <iframe
          className="google-map map-section__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.8624299081425!2d20.03673031571763!3d50.07013797942464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716451a9e3db903%3A0xc49aafa53df7e897!2sOsiedle%20Centrum%20E%2016%2C%2031-934%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1588021806425!5m2!1spl!2spl"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>

      <div className="contacts container">
        <div className="contacts-form">
          <h2>Zapytaj o darmową wycenę</h2>
          <input type="text" placeholder="Imię" />
          <input type="text" placeholder="Nazwisko" />
          <input type="text" placeholder="Adres e-mail" />
          <input type="text" placeholder="Numer Telefonu" />
          <textarea rows="4" cols="50" placeholder="Treść wiadomości" />
          <div className="button">WYŚLIJ</div>
        </div>
        <div className="contacts-info">
          <h1><span>HYDRO</span>  KRAK</h1>
          <h2>Bartosz Borczak</h2>
          <p>Kompleksowe usługi instalacji hydralicznych</p>
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