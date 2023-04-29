import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function FrenchTextTransform () {
  return (
    <div className="ColorBloc">
      <FrenchHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Text-transform</h2>
        <p className="font">Pour la propriété css " text-transform ", nous avons mit toutes les font-weight disponibles.</p>
        <h2 className="bloc-title">Liste d'exemple</h2>
        <ul className="ul-docu">
          <li className="li-docu">.text-transform-capitalize ( text-transform capitalize )</li>
          <li className="li-docu">.text-transform-lowercase ( text-transform lowercase )</li>
          <li className="li-docu">.text-transform-uppercase ( text-transform uppercase )</li>
          <li className="li-docu">.text-transform-none ( text-transform none )</li>
          <li className="li-docu">.text-transform-unset ( text-transform unset )</li>
        </ul>
        <h2 className="bloc-title">Explications</h2>
        <p className="font">On vous a référencer tous les text-transform disponibles en css.</p>
        <h2 className="bloc-title">Tous les text-transform</h2>
        <ul className="ul-docu">
          <li className="li-docu">.text-transform-capitalize</li>
          <li className="li-docu">.text-transform-lowercase</li>
          <li className="li-docu">.text-transform-uppercase</li>
          <li className="li-docu">.text-transform-none</li>
          <li className="li-docu">.text-transform-inherit</li>
          <li className="li-docu">.text-transform-initial</li>
          <li className="li-docu">.text-transform-unset</li>
        </ul>
        <h2 className="bloc-title">Utilisation</h2>
        <p className="font">Pour pouvoir les utiliser, ajouter à votre élément html une classe et écrivez celle que vous avez choisi.</p>
      </div>
      <Link to ="/DocumentationEnFrancais" className="link-docu"><p className="link-to">Retour à la documentation générale</p></Link>
      <Footer />
    </div>
  )
}