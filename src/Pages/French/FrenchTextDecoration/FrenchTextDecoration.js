import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function FrenchTextDecoration () {
  return (
    <div className="ColorBloc">
      <FrenchHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Text-decoration</h2>
        <p className="font">Pour la propriété css " text-decoration ", nous avons mit toutes les font-weight disponibles.</p>
        <h2 className="bloc-title">Liste d'exemple</h2>
        <ul className="ul-docu">
          <li className="li-docu">.text-decoration-dashed ( text-decoration dashed )</li>
          <li className="li-docu">.text-decoration-dotted ( text-decoration dotted )</li>
          <li className="li-docu">.text-decoration-double ( text-decoration double )</li>
          <li className="li-docu">.text-decoration-line-through ( text-decoration line-through )</li>
          <li className="li-docu">.text-decoration-none ( text-decoration none )</li>
        </ul>
        <h2 className="bloc-title">Explications</h2>
        <p className="font">On vous a référencer tous les text-decoration disponibles en css.</p>
        <h2 className="bloc-title">Tous les text-decoration</h2>
        <ul className="ul-docu">
          <li className="li-docu">.text-decoration-dashed</li>
          <li className="li-docu">.text-decoration-dotted</li>
          <li className="li-docu">.text-decoration-double</li>
          <li className="li-docu">.text-decoration-line-through</li>
          <li className="li-docu">.text-decoration-none</li>
          <li className="li-docu">.text-decoration-overline</li>
          <li className="li-docu">.text-decoration-solid</li>
          <li className="li-docu">.text-decoration-underline</li>
          <li className="li-docu">.text-decoration-wavy</li>
        </ul>
        <h2 className="bloc-title">Utilisation</h2>
        <p className="font">Pour pouvoir les utiliser, ajouter à votre élément html une classe et écrivez celle que vous avez choisi.</p>
      </div>
      <Link to ="/DocumentationEnFrancais" className="link-docu"><p className="link-to">Retour à la documentation générale</p></Link>
      <Footer />
    </div>
  )
}