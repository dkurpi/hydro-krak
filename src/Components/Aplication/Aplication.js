import React, { Component } from "react";
import "./Aplication.css";

import emailjs from "emailjs-com";
import ButtonUI from "../Contact-1(Map+Email)/Button.js";
import { Icon } from "@iconify/react";
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
      <>
        <Element name="aplication">
          <section className="aplication">
            <div data-aos="fade-right" className="about__text">
              <h2>SZUKASZ PRACY?</h2>
              <h4>Naszym pracownikom oferujemy:</h4>
              <ul>
                <li>możliwość szkoleń i rozwoju zawodowego</li>
                <li>umowe o prace</li>
                <li>własne narzędzia</li>
                <li>ubrania robocze</li>
                <li>
                  termin wypłaty indywidualnie dopasowany do potrzeb pracownika
                </li>
                <li>zakwaterowanie w Krakowie dla obcokrajowców</li>
              </ul>
              <h4>Oczekujemy:</h4>
              <ul>
                <li>punktualności</li>
                <li>odpowiedzialności</li>
                <li>logicznego myślenia</li>
                <li>sumienności i chęci do pracy</li>
                <li>gotowość do poszerzania umiejętności zawodowych</li>
                <li>brak nałogu alkoholowego</li>
                <li>umiejętność pracya w zespole</li>
                <li>dbałość o powierzony sprzęt</li>
              </ul>
              <div className="contacts-form">
                <h2>ZAAPLIKUJ!</h2>
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
            </div>

            <div className="about__img"></div>
          </section>
        </Element>
      </>
    );
  }
}
