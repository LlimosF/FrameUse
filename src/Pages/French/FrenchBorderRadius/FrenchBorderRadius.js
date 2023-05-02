import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";
import BoucleBorderRadius from "../../../Components/Boucle/BoucleBorderRadius/BoucleBorderRadius";

export default function FrenchBorderRadius () {
  return (
    <div className="ColorBloc">
      <FrenchHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Border-radius</h2>
        <p className="font">Pour l'attribut css " border-radius ", on a mit en place des classes allant de 1 à 100px.</p>
        <h2 className="bloc-title">Liste d'exemple</h2>
        <ul className="ul-docu">
          <li className="li-docu">.border-radius10 ( border-radius de 10px )</li>
          <li className="li-docu">.border-radius15 ( border-radius de 15px )</li>
          <li className="li-docu">.border-radius33 ( border-radius de 33px )</li>
          <li className="li-docu">.border-radius57 ( border-radius de 57px )</li>
          <li className="li-docu">.border-radius100 ( border-radius de 100px )</li>
        </ul>
        <h2 className="bloc-title">Explications</h2>
        <p className="font">Nous avons créé des " templates " de boutton pour avoir un base solide lors de vos créations.</p>
        <h2 className="bloc-title">Tous les border-radius</h2>
        <BoucleBorderRadius />
        <h2 className="bloc-title">Utilisation</h2>
        <p className="font">Pour pouvoir les utiliser, ajouter à votre élément html une classe et écrivez celle que vous avez choisi.</p>
      </div>
      <Link to ="/DocumentationEnFrancais" className="link-docu"><p className="link-to">Retour à la documentation générale</p></Link>
      <Footer />
    </div>
  )
}