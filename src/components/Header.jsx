import React from "react";
import { FaBars } from "react-icons/fa";
import styleHeader from "../css/Header.module.css";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCaretDown, FaCaretUp } from "react-icons/fa";

function Header() {
  const [classList, setClassList] = useState(styleHeader.oculto);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    window.location.reload();
  };

  const handleClick = () => {
    if (!currentUser) {
      setClassList(
        classList === styleHeader.oculto
          ? styleHeader.desplegado
          : styleHeader.oculto
      );
    }
  };
  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  return (
    <header>
      <nav className={styleHeader.nav}>
        <input
          type="checkbox"
          name="check"
          className={styleHeader.check}
          id="check"
        />
        <label htmlFor="check" className={styleHeader.checkbtn}>
          <FaBars />
        </label>

        <Link to="/">
          <article className={styleHeader.marca}>
            {" "}
            Reservas <span>Naturales</span>
            <img src="../assets/logo.svg" alt="" />
          </article>
        </Link>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/conocenos">Conocenos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <ThemeToggle />
        </ul>

        {!currentUser ? (
          <span onClick={handleClick} className={styleHeader.userIcon}>
            <FaUser size={20} />
            {classList === styleHeader.oculto ? (
              <FaCaretDown size={15} />
            ) : (
              <FaCaretUp size={15} />
            )}
            <ul className={classList}>
              <li>
                <Link to="/logIn">Ingresar</Link>
              </li>
              <li>
                <Link to="/signUp">Registrarse</Link>
              </li>
            </ul>
          </span>
        ) : (
          <li onClick={handleClick} className={styleHeader.userIcon}>
            <FaUser size={20} />
            {classList === styleHeader.oculto ? (
              <FaCaretDown size={15} />
            ) : (
              <FaCaretUp size={15} />
            )}
            {currentUser && (
              <button onClick={handleLogout} className={styleHeader.logout}>
                Cerrar Sesión
              </button>
            )}
          </li>
        )}
      </nav>
    </header>
  );
}

export default Header;
