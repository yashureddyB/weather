import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false); // use same naming

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode"); // toggles body class
  };

  return (
    <div className="Header">
      <div>
        <img
          className="logo"
          src="https://scontent.fblr20-2.fna.fbcdn.net/v/t1.15752-9/553694175_792320946905951_9330059155232160_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=S3H-ZT2zvQ8Q7kNvwH2lOC-&_nc_oc=AdlROMSFL92H7HP85eOMjznuzo197yaFhrzDLlkRwNS-9Xv8tJnPyt3hUrVzmt5EZMM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fblr20-2.fna&oh=03_Q7cD4AFyBC-UxEVB6FAY3TFYB7Cxnr18xUg5blwBbYUjMGWDOw&oe=695A19E8"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <button className="btn" onClick={toggleTheme}>
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
              
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
