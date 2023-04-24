import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function FrenchDisplay () {
  return (
    <div className="ColorBloc">
      <FrenchHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Display</h2>
        <p className="font">Pour la propriété css " display ", nous avons mit tous les display disponibles.</p>
        <h2 className="bloc-title">Liste d'exemple</h2>
        <ul className="ul-docu">
          <li className="li-docu">.flex ( display flex )</li>
          <li className="li-docu">.grid ( display grid )</li>
          <li className="li-docu">.inline ( display inline )</li>
          <li className="li-docu">.block ( block )</li>
          <li className="li-docu">.none ( display none )</li>
        </ul>
        <h2 className="bloc-title">Explications</h2>
        <p className="font">On vous a référencer tous les display disponibles en css.</p>
        <h2 className="bloc-title">Tous les display</h2>
        <ul className="ul-docu">
          <li className="li-docu">block</li>
          <li className="li-docu">contents</li>
          <li className="li-docu">flex</li>
          <li className="li-docu">flexbox</li>
          <li className="li-docu">flow-root</li>
          <li className="li-docu">grid</li>
          <li className="li-docu">inline</li>
          <li className="li-docu">inline-block</li>
          <li className="li-docu">inline-flex</li>
          <li className="li-docu">inline-flexbox</li>
          <li className="li-docu">inline-table</li>
          <li className="li-docu">list-item</li>
          <li className="li-docu">none</li>
          <li className="li-docu">ruby</li>
          <li className="li-docu">ruby-base</li>
          <li className="li-docu">ruby-base-container</li>
          <li className="li-docu">ruby-text</li>
          <li className="li-docu">ruby-text-container</li>
          <li className="li-docu">run-in</li>
          <li className="li-docu">table</li>
          <li className="li-docu">table-caption</li>
          <li className="li-docu">table-cell</li>
          <li className="li-docu">table-column</li>
          <li className="li-docu">table-column-group</li>
          <li className="li-docu">table-footer-group</li>
          <li className="li-docu">table-header-group</li>
          <li className="li-docu">table-row</li>
          <li className="li-docu">table-row-group</li>
        </ul>
        <h2 className="bloc-title">Utilisation</h2>
        <p className="font">Pour pouvoir les utiliser, ajouter à votre élément html une classe et écrivez celle que vous avez choisi.</p>
      </div>
      <Link to ="/DocumentationEnFrancais" className="link-docu"><p className="link-to">Retour à la documentation générale</p></Link>
      <Footer />
    </div>
  )
}