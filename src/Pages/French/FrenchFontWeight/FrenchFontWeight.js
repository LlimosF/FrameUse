import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function FrenchFontWeight () {
  return (
    <div className="ColorBloc">
      <FrenchHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Font-weight</h2>
        <p className="font">Pour la propriété css " font-weight ", nous avons mit toutes les font-weight disponibles.</p>
        <h2 className="bloc-title">Liste d'exemple</h2>
        <ul className="ul-docu">
          <li className="li-docu">.font-weight-100 ( font-weight de 100 )</li>
          <li className="li-docu">.font-weight-300 ( font-weight de 300 )</li>
          <li className="li-docu">.font-weight-500 ( font-weight de 500 )</li>
          <li className="li-docu">.font-weight-600 ( font-weight de 600 )</li>
          <li className="li-docu">.font-weight-800 ( font-weight de 800 )</li>
        </ul>
        <h2 className="bloc-title">Explications</h2>
        <p className="font">On vous a référencer toutes les font-weight disponibles en css.</p>
        <h2 className="bloc-title">Toutes les font-weight</h2>
        <ul className="ul-docu">
          <li className="li-docu">font-weight-100</li>
          <li className="li-docu">font-weight-200</li>
          <li className="li-docu">font-weight-300</li>
          <li className="li-docu">font-weight-400</li>
          <li className="li-docu">font-weight-500</li>
          <li className="li-docu">font-weight-600</li>
          <li className="li-docu">font-weight-700</li>
          <li className="li-docu">font-weight-800</li>
          <li className="li-docu">font-weight-900</li>
        </ul>
        <h2 className="bloc-title">Utilisation</h2>
        <p className="font">Pour pouvoir les utiliser, ajouter à votre élément html une classe et écrivez celle que vous avez choisi.</p>
      </div>
      <Link to ="/DocumentationEnFrancais" className="link-docu"><p className="link-to">Retour à la documentation générale</p></Link>
      <Footer />
    </div>
  )
}