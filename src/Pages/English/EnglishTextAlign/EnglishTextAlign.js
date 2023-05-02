import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import EnglishHeader from "../../../Components/English/EnglishHeader/EnglishHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function EnglishTextAlign () {
  return (
    <div className="ColorBloc">
      <EnglishHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Text-align</h2>
        <p className="font">For the "text-align" css property, we set all available text-align.</p>
        <h2 className="bloc-title">Example list</h2>
        <ul className="ul-docu">
          <li className="li-docu">.text-align-center ( text-align center )</li>
          <li className="li-docu">.text-align-end ( text-align end )</li>
          <li className="li-docu">.text-align-justify ( text-align justify )</li>
          <li className="li-docu">.text-align-left ( text-align left )</li>
          <li className="li-docu">.text-align-right ( text-align right )</li>
        </ul>
        <h2 className="bloc-title">Explanations</h2>
        <p className="font">We have referenced all the text-align available in css.</p>
        <h2 className="bloc-title">All text-align</h2>
        <ul className="ul-docu">
          <li className="li-docu">.text-align-center</li>
          <li className="li-docu">.text-align-end</li>
          <li className="li-docu">.text-align-justify</li>
          <li className="li-docu">.text-align-left</li>
          <li className="li-docu">.text-align-right</li>
          <li className="li-docu">.text-align-start</li>
          <li className="li-docu">.text-align-inherit</li>
          <li className="li-docu">.text-align-initial</li>
          <li className="li-docu">.text-align-unset</li>
        </ul>
        <h2 className="bloc-title">Use</h2>
        <p className="font">To be able to use them, add a class to your html element and write the one you have chosen.</p>
      </div>
      <Link to ="/DocumentationInEnglish" className="link-docu"><p className="link-to">Back to general documentation</p></Link>
      <Footer />
    </div>
  )
}