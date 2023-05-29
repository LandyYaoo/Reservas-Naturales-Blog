import React, { useState, useEffect } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import stylesTheme from "../css/ThemeToggle.module.css";

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(
    function () {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    },
    [theme]
  );

  const toggleTheme = function () {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <button className={stylesTheme.changeTheme} onClick={toggleTheme}>
      {theme === "light" ? <BsMoonFill size={20} /> : <BsSunFill size={20} />}
    </button>
  );
}

export default ThemeToggle;
