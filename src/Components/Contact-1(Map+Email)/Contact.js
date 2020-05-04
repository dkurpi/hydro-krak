import React, { Component } from "react";
import emailjs from "emailjs-com";
import ButtonUI from "./Button.js";
import { Icon } from "@iconify/react";
import locationPin from "@iconify/icons-entypo/location-pin";
import "./Contact.css";
import { Link as LinkRouter } from "react-router-dom";
import { Element } from "react-scroll";

export default class Contact extends Component {
  state = {
    name: "",
    surname: "",
    tel: "",
    email: "",
    message: "",
  };

  handleChange = (e, name) => {
    this.setState({
      [name]: e.target.value,
    });
  };

  handleBtn = async (getAns) => {
    const { name, surname, tel, email, message } = this.state;

    console.log(this.state);
    ////////////Walidacja///////////
    if (!name || !surname || !tel || !email || !message)
      return getAns("Wypełnij wszystkie pola");

    ////////////
    var template_params = {
      name,
      surname,
      tel,
      email,
      message,
    };

    var service_id = "hydrokrak.";
    var template_id = "template_70umiDnS";
    var user_id = "user_WR3uUjM2yeeQRA2T2ViR5";
    emailjs.send(service_id, template_id, template_params, user_id).then(
      (result) => {
        getAns(result.text);
        return result.text;
      },
      (error) => {
        getAns(error.text);
        return error.text;
      }
    );
  };

  render() {
    const { name, surname, tel, email, message } = this.state;
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
            <LinkRouter
              onClick={() => setTimeout(() => this.props.scrollToTop(), 100)}
              to="/aplikuj"
            >
              <a className="button" href="#">
                <div>Dowiedz się wiecej</div>
              </a>
            </LinkRouter>
          </div>
        </div>
        <Element name="contact">
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
              <h2>Darmowa wycena</h2>
              <input
                onChange={(e) => {
                  this.handleChange(e, "name");
                }}
                value={name}
                type="text"
                placeholder="Imię*"
              />
              <input
                onChange={(e) => {
                  this.handleChange(e, "surname");
                }}
                value={surname}
                type="text"
                placeholder="Nazwisko*"
              />
              <input
                onChange={(e) => {
                  this.handleChange(e, "email");
                }}
                value={email}
                type="text"
                placeholder="Adres e-mail*"
              />
              <input
                onChange={(e) => {
                  this.handleChange(e, "tel");
                }}
                value={tel}
                type="text"
                placeholder="Numer Telefonu*"
              />
              <textarea
                onChange={(e) => {
                  this.handleChange(e, "message");
                }}
                value={message}
                rows="4"
                cols="50"
                placeholder="Treść wiadomości"
              />
              <p style={{ fontSize: "12px", alignSelf: "start" }}>
                * - pola wymagane
              </p>
              <div onClick={() => console.log("click")} className="button">
                <ButtonUI handleSend={this.handleBtn} />
              </div>
            </div>
            <div className="contacts-info">
              <h1>
                <span>HYDRO</span> KRAK
              </h1>
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
              <div className="info2">
                <strong>NIP: </strong>
                <span>6783167741</span>
                <br />
                <strong>REGON: </strong>
                <span>367136666</span>
              </div>
            </div>
          </div>
        </Element>
      </section>
    );
  }
}
