import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";
import BoucleWidth from "../../../Components/Boucle/BoucleWidth/BoucleWidth";
import EnglishHeader from "../../../Components/English/EnglishHeader/EnglishHeader";

export default function EnglishWidth () {
  return (
    <div className="ColorBloc">
      <EnglishHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Width</h2>
        <p className="font">For the css "width" property, we put classes ranging from 5% to 100%, from 5 to 5.</p>
        <h2 className="bloc-title">Example list</h2>
        <ul className="ul-docu">
          <li className="li-docu">.width10 ( width 10% )</li>
          <li className="li-docu">.width20 ( width 20% )</li>
          <li className="li-docu">.width50 ( width 50% )</li>
          <li className="li-docu">.width85 ( width 85% )</li>
          <li className="li-docu">.width100 ( width 100% )</li>
        </ul>
        <h2 className="bloc-title">Explanations</h2>
        <p className="font">You have referenced many classes for the width.</p>
        <h2 className="bloc-title">All width</h2>
        <BoucleWidth />
        <h2 className="bloc-title">Use</h2>
        <p className="font">To be able to use them, add a class to your html element and write the one you have chosen.</p>
      </div>
      <Link to ="/DocumentationInEnglish" className="link-docu"><p className="link-to">Back to general documentation</p></Link>
      <Footer />
    </div>
  )
}