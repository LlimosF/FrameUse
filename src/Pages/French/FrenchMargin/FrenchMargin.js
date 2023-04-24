import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

import BoucleMargin from "../../../Components/Boucle/BoucleMargin/BoucleMargin";
import BoucleMarginTop from "../../../Components/Boucle/BoucleMargin/BoucleMarginTop";
import BoucleMarginRight from "../../../Components/Boucle/BoucleMargin/BoucleMarginRight";
import BoucleMarginBottom from "../../../Components/Boucle/BoucleMargin/BoucleMarginBottom";
import BoucleMarginLeft from "../../../Components/Boucle/BoucleMargin/BoucleMarginLeft";

export default function FrenchMargin () {
  return (
    <div className="PaddingBloc">
      <FrenchHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Margin</h2>
        <p className="font">Pour la propriété css " margin ", nous avons mit un total de 400 classes différentes.</p>
        <h2 className="bloc-title">Liste d'exemple</h2>
        <ul className="ul-docu">
          <li className="li-docu">.margin10 ( margin général de 10px )</li>
          <li className="li-docu">.margin-top5 ( margin de 5px sur le haut )</li>
          <li className="li-docu">.margin-right30 ( margin de 30px sur la droite )</li>
          <li className="li-docu">.margin-bottom4 ( margin de 4px sur le bas )</li>
          <li className="li-docu">.margin-left68 ( margin de 68px sur la gauche )</li>
        </ul>
        <h2 className="bloc-title">Explications</h2>
        <p className="font">Donc nous avons crée un total de 400 classes, dont 5 " différents ", il y'a 80 classes pour chaque côtés, les classes vont de 1 à 80, donc de 1px jusqu'à 80px et ça pour chaque côtés, et aussi pour le padding général.</p>
        <h2 className="bloc-title">Tous les margin</h2>
        <BoucleMargin />
        <h2 className="bloc-title">Tous les margin top</h2>
        <BoucleMarginTop />
        <h2 className="bloc-title">Tous les margin right</h2>
        <BoucleMarginRight />
        <h2 className="bloc-title">Tous les margin bottom</h2>
        <BoucleMarginBottom />
        <h2 className="bloc-title">Tous les margin left</h2>
        <BoucleMarginLeft />
        <h2 className="bloc-title">Utilisation</h2>
        <p className="font">Pour pouvoir les utiliser, ajouter à votre element html une classe et écrivez celle que vous avez choisi.</p>
      </div>
      <Link to ="/DocumentationEnFrancais" className="link-docu"><p className="link-to">Retour à la documentation générale</p></Link>
      <Footer />
    </div>
  )
}