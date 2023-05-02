import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import EnglishHeader from "../../../Components/English/EnglishHeader/EnglishHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function EnglishTextTransform () {
  return (
    <div className="ColorBloc">
      <EnglishHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Text-transform</h2>
        <p className="font">For the "text-transform" css property, we have set all available text-transforms.</p>
        <h2 className="bloc-title">Example list</h2>
        <ul className="ul-docu">
          <li className="li-docu">.text-transform-capitalize ( text-transform capitalize )</li>
          <li className="li-docu">.text-transform-lowercase ( text-transform lowercase )</li>
          <li className="li-docu">.text-transform-uppercase ( text-transform uppercase )</li>
          <li className="li-docu">.text-transform-none ( text-transform none )</li>
          <li className="li-docu">.text-transform-unset ( text-transform unset )</li>
        </ul>
        <h2 className="bloc-title">Explanations</h2>
        <p className="font">We have referenced all the text-transform available in css.</p>
        <h2 className="bloc-title">All text-transform</h2>
        <ul className="ul-docu">
          <li className="li-docu">.text-transform-capitalize</li>
          <li className="li-docu">.text-transform-lowercase</li>
          <li className="li-docu">.text-transform-uppercase</li>
          <li className="li-docu">.text-transform-none</li>
          <li className="li-docu">.text-transform-inherit</li>
          <li className="li-docu">.text-transform-initial</li>
          <li className="li-docu">.text-transform-unset</li>
        </ul>
        <h2 className="bloc-title">Use</h2>
        <p className="font">To be able to use them, add a class to your html element and write the one you have chosen.</p>
      </div>
      <Link to ="/DocumentationInEnglish" className="link-docu"><p className="link-to">Back to general documentation</p></Link>
      <Footer />
    </div>
  )
}