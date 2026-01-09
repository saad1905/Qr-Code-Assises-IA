import React from "react";
import "./LanguageSelector.css";
import logo from "../../assets/logo.png";
import logoAssises from "../../assets/logo_assises.png";

const LanguageSelector = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="page-container">
      <header className="header">
        <img
            src={logoAssises}
            alt="Logo Assises IA"
            className="assises-logo-header"
        />

        <img
            src={logo}
            alt="Logo principal"
            className="app-logo-header"
        />
        </header>


      <main className="content">
        {/* 🆕 Titre avec logo à gauche */}
        <div className="title-with-logo">
        <h1 className="main-title">Rapport de synthèse des Assises de l’IA</h1>
        </div>

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
