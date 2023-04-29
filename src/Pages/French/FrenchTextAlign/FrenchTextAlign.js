import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function FrenchTextAlign () {
  return (
    <div className="ColorBloc">
      <FrenchHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Text-align</h2>
        <p className="font">Pour la propriété css " text-align ", nous avons mit toutes les font-weight disponibles.</p>
        <h2 className="bloc-title">Liste d'exemple</h2>
        <ul className="ul-docu">
          <li className="li-docu">.text-align-center ( text-align center )</li>
          <li className="li-docu">.text-align-end ( text-align end )</li>
          <li className="li-docu">.text-align-justify ( text-align justify )</li>
          <li className="li-docu">.text-align-left ( text-align left )</li>
          <li className="li-docu">.text-align-right ( text-align right )</li>
        </ul>
        <h2 className="bloc-title">Explications</h2>
        <p className="font">On vous a référencer tous les text-align disponibles en css.</p>
        <h2 className="bloc-title">Tous les text-align</h2>
        <ul className="ul-docu">
          <li className="li-docu">.text-align-center</li>
          <li className="li-docu">.text-align-end</li>
          <li className="li-docu">.text-align-justify</li>
          <li className="li-docu">.text-align-left</li>
          <li className="li-docu">.text-align-right</li>
          <li className="li-docu">.text-align-start</li>
          <li className="li-docu">.text-align-inherit</li>
          <li className="li-docu">.text-align-initial</li>
          <li className="li-docu">.text-align-unset</li>
        </ul>
        <h2 className="bloc-title">Utilisation</h2>
        <p className="font">Pour pouvoir les utiliser, ajouter à votre élément html une classe et écrivez celle que vous avez choisi.</p>
      </div>
      <Link to ="/DocumentationEnFrancais" className="link-docu"><p className="link-to">Retour à la documentation générale</p></Link>
      <Footer />
    </div>
  )
}