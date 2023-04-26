import React from "react";
import "../../../Pages/French/FrenchUtilisation/FrenchUtilisation.css";
import DownloadButton from "../../../Components/Download/Download";
import CopyButton from "../../Copy/Copy";
import "../FrenchUtilisationContent/FrenchUtilisationContent.css";

export default function FrenchUtilisationContent () {
  return (
    <div>
      <h2 className="title-use">Guide sur l'utilisation du Framework</h2>
      <div className="card-container">
        <div className="card">
            <h3>Copier / coller</h3>
            <hr className="separator-card" />
            <p>100% sécurisé</p>
            <hr className="separator-card" />
            <p>Modifiable</p>
          </div>
          <div className="card">
            <h3>Téléchargement</h3>
            <hr className="separator-card" />
            <p>Téléchargement sécurisé</p>
            <hr className="separator-card" />
            <p>Modifiable</p>
          </div>
        </div>
        <div className="use">
          <div className="use1">
            <h4 className="title-utilisation">Copier / coller</h4>
            <p className="text">
              Pour utiliser cette solution, créer vous un fichier nommé " framework.css ". Cliquez sur le bouton au dessous et coller juste tout le texte dans ce fichier. Il ne vous restera
              plus cas intégrer ce fichier css dans votre page html.
            </p>
            <CopyButton />
          </div>
          <div className="use2">
            <h4 className="title-utilisation">Téléchargement</h4>
            <p className="text">
              Pour cette solution, vous avez juste besoin de cliquer sur le boutton en dessous, ça vous téléchargera le fichier css, 
              glissez le dans votre projet et lié le a votre page html.
            </p>
            <DownloadButton />
          </div>
        </div>
    </div>
  )
}