import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function FrenchPosition () {
  return (
    <div className="ColorBloc">
      <FrenchHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Position</h2>
        <p className="font">Pour la propriété css " position ", nous avons mit tous les display disponibles.</p>
        <h2 className="bloc-title">Liste d'exemple</h2>
        <ul className="ul-docu">
          <li className="li-docu">.absolute ( position absolute )</li>
          <li className="li-docu">.fixed ( position fixed )</li>
          <li className="li-docu">.relative ( position relative )</li>
          <li className="li-docu">.static ( position static )</li>
          <li className="li-docu">.sticky ( position sticky )</li>
        </ul>
        <h2 className="bloc-title">Explications</h2>
        <p className="font">On vous a référencer tous les positions disponibles en css.</p>
        <h2 className="bloc-title">Toutes les positions</h2>
        <ul className="ul-docu">
          <li className="li-docu">absolute</li>
          <li className="li-docu">fixed</li>
          <li className="li-docu">relative</li>
          <li className="li-docu">static</li>
          <li className="li-docu">sticky-root</li>
          <li className="li-docu">-ms-page</li>
          <li className="li-docu">-webkit-sticky</li>
          <li className="li-docu">inherit</li>
          <li className="li-docu">initial</li>
          <li className="li-docu">unset</li>
        </ul>
        <h2 className="bloc-title">Utilisation</h2>
        <p className="font">Pour pouvoir les utiliser, ajouter à votre élément html une classe et écrivez celle que vous avez choisi.</p>
      </div>
      <Link to ="/DocumentationEnFrancais" className="link-docu"><p className="link-to">Retour à la documentation générale</p></Link>
      <Footer />
    </div>
  )
}