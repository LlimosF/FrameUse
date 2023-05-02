import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";
import BoucleWidth from "../../../Components/Boucle/BoucleWidth/BoucleWidth";

export default function FrenchWidth () {
  return (
    <div className="ColorBloc">
      <FrenchHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Width</h2>
        <p className="font">Pour la propriété css " width ", nous avons mit des classes allant de 5% à 100%, de 5 en 5.</p>
        <h2 className="bloc-title">Liste d'exemple</h2>
        <ul className="ul-docu">
          <li className="li-docu">.width10 ( width 10% )</li>
          <li className="li-docu">.width20 ( width 20% )</li>
          <li className="li-docu">.width50 ( width 50% )</li>
          <li className="li-docu">.width85 ( width 85% )</li>
          <li className="li-docu">.width100 ( width 100% )</li>
        </ul>
        <h2 className="bloc-title">Explications</h2>
        <p className="font">On vous à référencé beaucoup de classes pour la largeur.</p>
        <h2 className="bloc-title">Toutes les width</h2>
        <BoucleWidth />
        <h2 className="bloc-title">Utilisation</h2>
        <p className="font">Pour pouvoir les utiliser, ajouter à votre élément html une classe et écrivez celle que vous avez choisi.</p>
      </div>
      <Link to ="/DocumentationEnFrancais" className="link-docu"><p className="link-to">Retour à la documentation générale</p></Link>
      <Footer />
    </div>
  )
}