import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";
import BouclePadding from "../../../Components/Boucle/BouclePadding/BouclePadding";
import BouclePaddingTop from "../../../Components/Boucle/BouclePadding/BouclePaddingTop";
import BouclePaddingRight from "../../../Components/Boucle/BouclePadding/BouclePaddingRight";
import BouclePaddingBottom from "../../../Components/Boucle/BouclePadding/BouclePaddingBottom";
import BouclePaddingLeft from "../../../Components/Boucle/BouclePadding/BouclePaddingLeft";

export default function FrenchPadding () {
  return (
    <div className="PaddingBloc">
      <FrenchHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Padding</h2>
        <p className="font">Pour la propriété css " padding ", nous avons mit un total de 400 classes différentes.</p>
        <h2 className="bloc-title">Liste d'exemple</h2>
        <ul className="ul-docu">
          <li className="li-docu">.padding10 ( padding général de 10px )</li>
          <li className="li-docu">.padding-top5 ( padding de 5px sur le haut )</li>
          <li className="li-docu">.padding-right30 ( padding de 30px sur la droite )</li>
          <li className="li-docu">.padding-bottom4 ( padding de 4px sur le bas )</li>
          <li className="li-docu">.padding-left68 ( padding de 68px sur la gauche )</li>
        </ul>
        <h2 className="bloc-title">Explications</h2>
        <p className="font">Donc nous avons crée un total de 400 classes, dont 5 " différents ", il y'a 80 classes pour chaque côtés, les classes vont de 1 à 80, donc de 1px jusqu'à 80px et ça pour chaque côtés, et aussi pour le padding général.</p>
        <h2 className="bloc-title">Tous les padding</h2>
        <BouclePadding />
        <h2 className="bloc-title">Tous les padding top</h2>
        <BouclePaddingTop />
        <h2 className="bloc-title">Tous les padding right</h2>
        <BouclePaddingRight />
        <h2 className="bloc-title">Tous les padding bottom</h2>
        <BouclePaddingBottom />
        <h2 className="bloc-title">Tous les padding left</h2>
        <BouclePaddingLeft />
        <li className="li-docu"></li>
        <h2 className="bloc-title">Utilisation</h2>
        <p className="font">Pour pouvoir les utiliser, ajouter à votre element html une classe et écrivez celle que vous avez choisi.</p>
      </div>
      <Link to ="/DocumentationEnFrancais" className="link-docu"><p className="link-to">Retour à la documentation générale</p></Link>
      <Footer />
    </div>
  )
}