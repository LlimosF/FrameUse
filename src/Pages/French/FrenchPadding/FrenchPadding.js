import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function FrenchPadding () {
  return (
    <div className="PaddingBloc">
      <FrenchHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Padding</h2>
        <p>Pour la propriété css " padding ", nous avons mit un total de 400 classes différentes.</p>
        <h2 className="bloc-title">Liste d'exemple</h2>
        <ul className="ul-docu">
          <li className="li-docu">.padding10 ( padding général de 10px )</li>
          <li className="li-docu">.padding-top5 ( padding de 5px sur le haut )</li>
          <li className="li-docu">.padding-right30 ( padding de 30px sur la droite )</li>
          <li className="li-docu">.padding-bottom4 ( padding de 4px sur le bas )</li>
          <li className="li-docu">.padding-left68 ( padding de 68px sur la gauche )</li>
        </ul>
        <h2 className="bloc-title">Explications</h2>
        <p>Donc nous avons crée un total de 400 classes, dont 5 " différents ", il y'a 80 classes pour chaque côtés, les classes vont de 1 à 80, donc de 1px jusqu'à 80px et ça pour chaque côtés, et aussi pour le padding général.</p>
        <h2 className="bloc-title">Utilisation</h2>
        <p>Pour pouvoir les utiliser, ajouter à votre element html une classe et écrivez celle que vous avez choisi.</p>
        <Link to ="/DocumentationEnFrancais" className="link-docu">Retour à la documentation générale</Link>
      </div>
    </div>
  )
}