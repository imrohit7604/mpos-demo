import React, { useEffect, useState } from "react";
import "./myStyle.css";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
function NavBar() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  const makePrompt = () => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      alert("This will work in production env/over in https");
      return;
    }

    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("user accepted A2HS prompt");
      } else {
        console.log("user dismissed A2HS prompt");
      }
      setDeferredPrompt(null);
    });
  };
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  });
  return (
    <>
      <nav className="header">
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
        <div className="header-right">
          {/* <a href="#home">Scan Bar Code</a> */}
        </div>
      </nav>
      <div className="pwa-prompt">
        Add the mPos to your homescreen
        <button onClick={makePrompt}>Click Here</button>
      </div>
    </>
  );
}

export default NavBar;
