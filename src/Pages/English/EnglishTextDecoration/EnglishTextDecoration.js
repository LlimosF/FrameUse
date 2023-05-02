import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import EnglishHeader from "../../../Components/English/EnglishHeader/EnglishHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function EnglishTextDecoration () {
  return (
    <div className="ColorBloc">
      <EnglishHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Text-decoration</h2>
        <p className="font">For the "text-decoration" css property, we set all text-decoration available.</p>
        <h2 className="bloc-title">Example list</h2>
        <ul className="ul-docu">
          <li className="li-docu">.text-decoration-dashed ( text-decoration dashed )</li>
          <li className="li-docu">.text-decoration-dotted ( text-decoration dotted )</li>
          <li className="li-docu">.text-decoration-double ( text-decoration double )</li>
          <li className="li-docu">.text-decoration-line-through ( text-decoration line-through )</li>
          <li className="li-docu">.text-decoration-none ( text-decoration none )</li>
        </ul>
        <h2 className="bloc-title">Explanations</h2>
        <p className="font">We have referenced all the text-decoration available in css.</p>
        <h2 className="bloc-title">All text-decoration</h2>
        <ul className="ul-docu">
          <li className="li-docu">.text-decoration-dashed</li>
          <li className="li-docu">.text-decoration-dotted</li>
          <li className="li-docu">.text-decoration-double</li>
          <li className="li-docu">.text-decoration-line-through</li>
          <li className="li-docu">.text-decoration-none</li>
          <li className="li-docu">.text-decoration-overline</li>
          <li className="li-docu">.text-decoration-solid</li>
          <li className="li-docu">.text-decoration-underline</li>
          <li className="li-docu">.text-decoration-wavy</li>
        </ul>
        <h2 className="bloc-title">Use</h2>
        <p className="font">To be able to use them, add a class to your html element and write the one you have chosen.</p>
      </div>
      <Link to ="/DocumentationEnFrancais" className="link-docu"><p className="link-to">Back to general documentation</p></Link>
      <Footer />
    </div>
  )
}