import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function FrenchJustifyItems () {
  return (
    <div className="ColorBloc">
      <FrenchHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Justify-items</h2>
        <p className="font">Pour la propriété css " justify-items ", nous avons mit toutes les font-weight disponibles.</p>
        <h2 className="bloc-title">Liste d'exemple</h2>
        <ul className="ul-docu">
          <li className="li-docu">.justify-items-auto ( justify items auto )</li>
          <li className="li-docu">.justify-items-center ( justify items center )</li>
          <li className="li-docu">.justify-items-end ( justify items end )</li>
          <li className="li-docu">.justify-items-left ( justify items left )</li>
          <li className="li-docu">.justify-items-normal ( justify items normal )</li>
        </ul>
        <h2 className="bloc-title">Explications</h2>
        <p className="font">On vous a référencer tous les justify-items disponibles en css.</p>
        <h2 className="bloc-title">Tous les justify-items</h2>
        <ul className="ul-docu">
          <li className="li-docu">.justify-items-auto</li>
          <li className="li-docu">.justify-items-baseline</li>
          <li className="li-docu">.justify-items-center</li>
          <li className="li-docu">.justify-items-end</li>
          <li className="li-docu">.justify-items-first-baseline</li>
          <li className="li-docu">.justify-items-flex-end</li>
          <li className="li-docu">.justify-items-flex-start</li>
          <li className="li-docu">.justify-items-last-baseline</li>
          <li className="li-docu">.justify-items-left</li>
          <li className="li-docu">.justify-items-normal</li>
          <li className="li-docu">.justify-items-right</li>
          <li className="li-docu">.justify-items-safe</li>
          <li className="li-docu">.justify-items-self-end</li>
          <li className="li-docu">.justify-items-self-start</li>
          <li className="li-docu">.justify-items-start</li>
          <li className="li-docu">.justify-items-stretch</li>
          <li className="li-docu">.justify-items-unsafe</li>
          <li className="li-docu">.justify-items-inherit</li>
          <li className="li-docu">.justify-items-initial</li>
          <li className="li-docu">.justify-items-unset</li>
        </ul>
        <h2 className="bloc-title">Utilisation</h2>
        <p className="font">Pour pouvoir les utiliser, ajouter à votre élément html une classe et écrivez celle que vous avez choisi.</p>
      </div>
      <Link to ="/DocumentationEnFrancais" className="link-docu"><p className="link-to">Retour à la documentation générale</p></Link>
      <Footer />
    </div>
  )
}