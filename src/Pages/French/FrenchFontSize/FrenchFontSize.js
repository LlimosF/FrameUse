import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import Footer from "../../../Components/Footer/Footer";
import BoucleFontSize from "../../../Components/Boucle/BoucleFontSize/BoucleFontSize";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function FrenchFontSize () {
  return (
    <div className="ColorBloc">
      <FrenchHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Font-size</h2>
        <p className="font">Pour la propriété css " font-size ", nous avons mit toutes les font-size disponibles.</p>
        <h2 className="bloc-title">Liste d'exemple</h2>
        <ul className="ul-docu">
          <li className="li-docu">.fs19 ( font-size de 19px )</li>
          <li className="li-docu">.fs22 ( font-size de 22px )</li>
          <li className="li-docu">.fs45 ( font-size de 45px )</li>
          <li className="li-docu">.fs12 ( font-size de 12px )</li>
          <li className="li-docu">.fs8 ( font-size de 8px )</li>
        </ul>
        <h2 className="bloc-title">Explications</h2>
        <p className="font">On vous a référencer toutes les font-size disponibles en css.</p>
        <h2 className="bloc-title">Toutes les font-size</h2>
        <BoucleFontSize />
        <h2 className="bloc-title">Utilisation</h2>
        <p className="font">Pour pouvoir les utiliser, ajouter à votre élément html une classe et écrivez celle que vous avez choisi.</p>
      </div>
      <Link to ="/DocumentationEnFrancais" className="link-docu"><p className="link-to">Retour à la documentation générale</p></Link>
      <Footer />
    </div>
  )
}