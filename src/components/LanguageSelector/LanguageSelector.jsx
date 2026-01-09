import React from "react";
import "./LanguageSelector.css";
import logo from "../../assets/logo.png";

const LanguageSelector = () => {
  const openLink = (url) => {
    window.open(url, "_blank"); // ouvre dans un nouvel onglet
  };

  return (
    <div className="page-container">
      <header className="header">
        <img src={logo} alt="Logo" className="app-logo" />
      </header>

      <main className="content">
        <h2>Choisissez votre langue</h2>

        <div className="buttons">
          <button
            onClick={() =>
              openLink(
                "https://les-assises-nationales-de-l-intelligence-artificielle-2025.s3.eu-north-1.amazonaws.com/Rapport+de+Synthe%CC%80se+VArabe.pdf"
              )
            }
          >
            العربية
          </button>

          <button
            onClick={() =>
              openLink(
                "https://les-assises-nationales-de-l-intelligence-artificielle-2025.s3.eu-north-1.amazonaws.com/Rapport+de+Synthe%CC%80se+VTif++Finalise%CC%81.pdf"
              )
            }
          >
            ⵜⴰⵎⴰⵣⵉⵖⵜ
          </button>

          <button
            onClick={() =>
              openLink(
                "https://les-assises-nationales-de-l-intelligence-artificielle-2025.s3.eu-north-1.amazonaws.com/Rapport+de+Synthe%CC%80se+V7+VF.pdf"
              )
            }
          >
            Français
          </button>

          <button
            onClick={() =>
              openLink(
                "https://les-assises-nationales-de-l-intelligence-artificielle-2025.s3.eu-north-1.amazonaws.com/Rapport+de+Synthe%CC%80se+ANG.pdf"
              )
            }
          >
            English
          </button>
        </div>
      </main>
    </div>
  );
};

export default LanguageSelector;
