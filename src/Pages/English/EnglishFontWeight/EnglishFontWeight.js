import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import EnglishHeader from "../../../Components/English/EnglishHeader/EnglishHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function EnglishFontWeight () {
  return (
    <div className="ColorBloc">
      <EnglishHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Font-weight</h2>
        <p className="font">For the "font-weight" css property, we have set all available font-weights.</p>
        <h2 className="bloc-title">Example list</h2>
        <ul className="ul-docu">
          <li className="li-docu">.font-weight-100 ( font-weight of 100 )</li>
          <li className="li-docu">.font-weight-300 ( font-weight of 300 )</li>
          <li className="li-docu">.font-weight-500 ( font-weight of 500 )</li>
          <li className="li-docu">.font-weight-600 ( font-weight of 600 )</li>
          <li className="li-docu">.font-weight-800 ( font-weight of 800 )</li>
        </ul>
        <h2 className="bloc-title">Explanations</h2>
        <p className="font">We have referenced all the font-weights available in css.</p>
        <h2 className="bloc-title">All font-weights</h2>
        <ul className="ul-docu">
          <li className="li-docu">font-weight-100</li>
          <li className="li-docu">font-weight-200</li>
          <li className="li-docu">font-weight-300</li>
          <li className="li-docu">font-weight-400</li>
          <li className="li-docu">font-weight-500</li>
          <li className="li-docu">font-weight-600</li>
          <li className="li-docu">font-weight-700</li>
          <li className="li-docu">font-weight-800</li>
          <li className="li-docu">font-weight-900</li>
        </ul>
        <h2 className="bloc-title">Use</h2>
        <p className="font">To be able to use them, add a class to your html element and write the one you have chosen.</p>
      </div>
      <Link to ="/DocumentationInEnglish" className="link-docu"><p className="link-to">Back to general documentation</p></Link>
      <Footer />
    </div>
  )
}