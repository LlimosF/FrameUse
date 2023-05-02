import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import EnglishHeader from "../../../Components/English/EnglishHeader/EnglishHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";
import BoucleBorderRadius from "../../../Components/Boucle/BoucleBorderRadius/BoucleBorderRadius";

export default function EnglishBorderRadius () {
  return (
    <div className="ColorBloc">
      <EnglishHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Border-radius</h2>
        <p className="font">For the css attribute "border-radius", we have set up classes ranging from 1 to 100px.</p>
        <h2 className="bloc-title">Example list</h2>
        <ul className="ul-docu">
          <li className="li-docu">.border-radius10 ( border-radius of 10px )</li>
          <li className="li-docu">.border-radius15 ( border-radius of 15px )</li>
          <li className="li-docu">.border-radius33 ( border-radius of 33px )</li>
          <li className="li-docu">.border-radius57 ( border-radius of 57px )</li>
          <li className="li-docu">.border-radius100 ( border-radius of 100px )</li>
        </ul>
        <h2 className="bloc-title">Explanations</h2>
        <p className="font">We have created button "templates" to have a solid base during your creations.</p>
        <h2 className="bloc-title">All les border-radius</h2>
        <BoucleBorderRadius />
        <h2 className="bloc-title">Use</h2>
        <p className="font">Pour pouvoir les utiliser, ajouter à votre élément html une classe et écrivez celle que vous avez choisi.</p>
      </div>
      <Link to ="/DocumentationInEnglish" className="link-docu"><p className="link-to">Back to general documentation</p></Link>
      <Footer />
    </div>
  )
}