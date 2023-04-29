import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function FrenchJustifySelf () {
  return (
    <div className="ColorBloc">
      <FrenchHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Justify-self</h2>
        <p className="font">Pour la propriété css " justify-self ", nous avons mit toutes les font-weight disponibles.</p>
        <h2 className="bloc-title">Liste d'exemple</h2>
        <ul className="ul-docu">
          <li className="li-docu">.justify-self-baseline ( justify self baseline )</li>
          <li className="li-docu">.justify-self-center ( justify self center )</li>
          <li className="li-docu">.justify-self-flex-end ( justify self flex-end )</li>
          <li className="li-docu">.justify-self-left ( justify self left )</li>
          <li className="li-docu">.justify-self-right ( justify self left )</li>
        </ul>
        <h2 className="bloc-title">Explications</h2>
        <p className="font">On vous a référencer tous les justifyself disponibles en css.</p>
        <h2 className="bloc-title">Tous les justify-self</h2>
        <ul className="ul-docu">
          <li className="li-docu">.justify-self-auto</li>
          <li className="li-docu">.justify-self-baseline</li>
          <li className="li-docu">.justify-self-center</li>
          <li className="li-docu">.justify-self-end</li>
          <li className="li-docu">.justify-self-first-baseline</li>
          <li className="li-docu">.justify-self-flex-end</li>
          <li className="li-docu">.justify-self-flex-start</li>
          <li className="li-docu">.justify-self-last-baseline</li>
          <li className="li-docu">.justify-self-left</li>
          <li className="li-docu">.justify-self-normal</li>
          <li className="li-docu">.justify-self-right</li>
          <li className="li-docu">.justify-self-save</li>
          <li className="li-docu">.justify-self-self-end</li>
          <li className="li-docu">.justify-self-self-start</li>
          <li className="li-docu">.justify-self-start</li>
          <li className="li-docu">.justify-self-stretch</li>
          <li className="li-docu">.justify-self-unsave</li>
          <li className="li-docu">.justify-self-inherit</li>
          <li className="li-docu">.justify-self-initial</li>
          <li className="li-docu">.justify-self-unset</li>
        </ul>
        <h2 className="bloc-title">Utilisation</h2>
        <p className="font">Pour pouvoir les utiliser, ajouter à votre élément html une classe et écrivez celle que vous avez choisi.</p>
      </div>
      <Link to ="/DocumentationEnFrancais" className="link-docu"><p className="link-to">Retour à la documentation générale</p></Link>
      <Footer />
    </div>
  )
}