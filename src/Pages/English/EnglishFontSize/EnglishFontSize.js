import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import EnglishHeader from "../../../Components/English/EnglishHeader/EnglishHeader";
import Footer from "../../../Components/Footer/Footer";
import BoucleFontSize from "../../../Components/Boucle/BoucleFontSize/BoucleFontSize";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function EnglishFontSize () {
  return (
    <div className="ColorBloc">
      <EnglishHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Font-size</h2>
        <p className="font">For the "font-size" css property, we have set all available font-sizes.</p>
        <h2 className="bloc-title">Example list</h2>
        <ul className="ul-docu">
          <li className="li-docu">.fs19 ( font-size of 19px )</li>
          <li className="li-docu">.fs22 ( font-size of 22px )</li>
          <li className="li-docu">.fs45 ( font-size of 45px )</li>
          <li className="li-docu">.fs12 ( font-size of 12px )</li>
          <li className="li-docu">.fs8 ( font-size of 8px )</li>
        </ul>
        <h2 className="bloc-title">Explanations</h2>
        <p className="font">We have referenced all the font-sizes available in css.</p>
        <h2 className="bloc-title">All font-size</h2>
        <BoucleFontSize />
        <h2 className="bloc-title">Use</h2>
        <p className="font">To be able to use them, add a class to your html element and write the one you have chosen.</p>
      </div>
      <Link to ="/DocumentationInEnglish" className="link-docu"><p className="link-to">Back to general documentation</p></Link>
      <Footer />
    </div>
  )
}