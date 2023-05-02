import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";
import BoucleHeight from "../../../Components/Boucle/BoucleHeight/BoucleHeight";

export default function FrenchHeight () {
  return (
    <div className="ColorBloc">
      <FrenchHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Height</h2>
        <p className="font">Pour la propriété css " height ", nous avons mit des classes allant de 5% à 100%, de 5 en 5.</p>
        <h2 className="bloc-title">Liste d'exemple</h2>
        <ul className="ul-docu">
          <li className="li-docu">.height10 ( height 10% )</li>
          <li className="li-docu">.height20 ( height 20% )</li>
          <li className="li-docu">.height50 ( height 50% )</li>
          <li className="li-docu">.height85 ( height 85% )</li>
          <li className="li-docu">.height100 ( height 100% )</li>
        </ul>
        <h2 className="bloc-title">Explications</h2>
        <p className="font">On vous à référencé beaucoup de classes pour la hauteur.</p>
        <h2 className="bloc-title">Toutes les height</h2>
        <BoucleHeight />
        <h2 className="bloc-title">Utilisation</h2>
        <p className="font">Pour pouvoir les utiliser, ajouter à votre élément html une classe et écrivez celle que vous avez choisi.</p>
      </div>
      <Link to ="/DocumentationEnFrancais" className="link-docu"><p className="link-to">Retour à la documentation générale</p></Link>
      <Footer />
    </div>
  )
}