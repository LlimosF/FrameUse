import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import EnglishHeader from "../../../Components/English/EnglishHeader/EnglishHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function EnglishPosition () {
  return (
    <div className="ColorBloc">
      <EnglishHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Position</h2>
        <p className="font">For the "position" css property, we have set all available displays.</p>
        <h2 className="bloc-title">Example list</h2>
        <ul className="ul-docu">
          <li className="li-docu">.absolute ( position absolute )</li>
          <li className="li-docu">.fixed ( position fixed )</li>
          <li className="li-docu">.relative ( position relative )</li>
          <li className="li-docu">.static ( position static )</li>
          <li className="li-docu">.sticky ( position sticky )</li>
        </ul>
        <h2 className="bloc-title">Explanations</h2>
        <p className="font">We have referenced all the positions available in css.</p>
        <h2 className="bloc-title">All positions</h2>
        <ul className="ul-docu">
          <li className="li-docu">absolute</li>
          <li className="li-docu">fixed</li>
          <li className="li-docu">relative</li>
          <li className="li-docu">static</li>
          <li className="li-docu">sticky-root</li>
          <li className="li-docu">-ms-page</li>
          <li className="li-docu">-webkit-sticky</li>
          <li className="li-docu">inherit</li>
          <li className="li-docu">initial</li>
          <li className="li-docu">unset</li>
        </ul>
        <h2 className="bloc-title">Use</h2>
        <p className="font">To be able to use them, add a class to your html element and write the one you have chosen.</p>
      </div>
      <Link to ="/DocumentationEnFrancais" className="link-docu"><p className="link-to">Back to general documentation</p></Link>
      <Footer />
    </div>
  )
}