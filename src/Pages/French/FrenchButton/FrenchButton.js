import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function FrenchButton () {
  return (
    <div className="ColorBloc">
      <FrenchHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Button</h2>
        <p className="font">Pour les buttons, nous créé des exemples de bouttons que vous pouvez utiliser.</p>
        <h2 className="bloc-title">Liste d'exemple</h2>
        <ul className="ul-docu">
          <li className="li-docu">.btn1 ( button style numéro 1 )</li>
          <li className="li-docu">.btn2 ( button style numéro 2 )</li>
          <li className="li-docu">.btn3 ( button style numéro 3 )</li>
          <li className="li-docu">.btn4 ( button style numéro 4 )</li>
          <li className="li-docu">.btn5 ( button style numéro 5 )</li>
        </ul>
        <h2 className="bloc-title">Explications</h2>
        <p className="font">Nous avons créé des " templates " de boutton pour avoir un base solide lors de vos créations.</p>
        <h2 className="bloc-title">Tous nos buttons</h2>
        <ul className="ul-docu">
          <li className="li-docu">.btn1</li>
          <li className="li-docu">.btn2</li>
          <li className="li-docu">.btn3</li>
          <li className="li-docu">.btn4</li>
          <li className="li-docu">.btn5</li>
          <li className="li-docu">.btn6</li>
        </ul>
        <h2 className="bloc-title">Utilisation</h2>
        <p className="font">Pour pouvoir les utiliser, ajouter à votre élément html une classe et écrivez celle que vous avez choisi.</p>
      </div>
      <Link to ="/DocumentationEnFrancais" className="link-docu"><p className="link-to">Retour à la documentation générale</p></Link>
      <Footer />
    </div>
  )
}