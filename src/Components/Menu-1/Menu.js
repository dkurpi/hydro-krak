import React, { useEffect } from "react";
import "./Menu.css";
import { Link as LinkRouter } from "react-router-dom";

export default function Menu(props) {
  useEffect(() => {});

  return (
    <nav className="nav ">
      <div className="logo">
        <LinkRouter
          to="/"
          onClick={() => setTimeout(() => props.scrollToTop(), 100)}
        >
          <h1>
            <span>HYDRO</span>KRAK
          </h1>
        </LinkRouter>
      </div>
      <div className="options">
        <ul>
          <li>
            <LinkRouter
              onClick={() => setTimeout(() => props.scrollTo("header"), 100)}
              to="/"
            >
              Start
            </LinkRouter>
          </li>
          <li>
            <LinkRouter
              onClick={() => setTimeout(() => props.scrollTo("about"), 100)}
              to="/"
            >
              O nas
            </LinkRouter>
          </li>
          <li>
            <LinkRouter
              onClick={() =>
                setTimeout(() => props.scrollTo("realizations"), 100)
              }
              to="/"
            >
              Realizacje
            </LinkRouter>
          </li>
          <li>
            <LinkRouter
              onClick={() => setTimeout(() => props.scrollToTop(), 100)}
              to="/aplikuj"
            >
              Aplikuj
            </LinkRouter>
          </li>
          <li>
            <LinkRouter
              onClick={() => setTimeout(() => props.scrollTo("contact"), 100)}
              to="/"
            >
              Kontakt
            </LinkRouter>
          </li>
          <li>
            <LinkRouter
              onClick={() => setTimeout(() => props.scrollToTop(), 100)}
              to="/zamow"
            >
              Zamów
            </LinkRouter>
          </li>
        </ul>
      </div>
    </nav>
  );
}
