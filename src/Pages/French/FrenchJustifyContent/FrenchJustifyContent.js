import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function FrenchJustifyContent () {
  return (
    <div className="ColorBloc">
      <FrenchHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Justify-content</h2>
        <p className="font">Pour la propriété css " justify-content ", nous avons mit toutes les font-weight disponibles.</p>
        <h2 className="bloc-title">Liste d'exemple</h2>
        <ul className="ul-docu">
          <li className="li-docu">.justify-content-baseline ( justify content baseline )</li>
          <li className="li-docu">.justify-content-center ( justify content center )</li>
          <li className="li-docu">.justify-content-flex-end ( justify content flex-end )</li>
          <li className="li-docu">.justify-content-left ( justify content left )</li>
          <li className="li-docu">.justify-content-right ( justify content left )</li>
        </ul>
        <h2 className="bloc-title">Explications</h2>
        <p className="font">On vous a référencer tous les justify-content disponibles en css.</p>
        <h2 className="bloc-title">Tous les justify-content</h2>
        <ul className="ul-docu">
          <li className="li-docu">.justify-content-baseline</li>
          <li className="li-docu">.justify-content-center</li>
          <li className="li-docu">.justify-content-end</li>
          <li className="li-docu">.justify-content-first-baseline</li>
          <li className="li-docu">.justify-content-flex-end</li>
          <li className="li-docu">.justify-content-flex-start</li>
          <li className="li-docu">.justify-content-last-baseline</li>
          <li className="li-docu">.justify-content-left</li>
          <li className="li-docu">.justify-content-right</li>
          <li className="li-docu">.justify-content-safe</li>
          <li className="li-docu">.justify-content-space-around</li>
          <li className="li-docu">.justify-content-space-between</li>
          <li className="li-docu">.justify-content-space-evenly</li>
          <li className="li-docu">.justify-content-stretch</li>
          <li className="li-docu">.justify-content-unsafe</li>
          <li className="li-docu">.justify-content-inherit</li>
          <li className="li-docu">.justify-conten-initial</li>
          <li className="li-docu">.justify-content-unset</li>
        </ul>
        <h2 className="bloc-title">Utilisation</h2>
        <p className="font">Pour pouvoir les utiliser, ajouter à votre élément html une classe et écrivez celle que vous avez choisi.</p>
      </div>
      <Link to ="/DocumentationEnFrancais" className="link-docu"><p className="link-to">Retour à la documentation générale</p></Link>
      <Footer />
    </div>
  )
}