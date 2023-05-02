import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";
import BoucleHeight from "../../../Components/Boucle/BoucleHeight/BoucleHeight";
import EnglishHeader from "../../../Components/English/EnglishHeader/EnglishHeader";

export default function EnglishHeight () {
  return (
    <div className="ColorBloc">
      <EnglishHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Height</h2>
        <p className="font">For the "height" css property, we put classes ranging from 5% to 100%, from 5 to 5.</p>
        <h2 className="bloc-title">Example list</h2>
        <ul className="ul-docu">
          <li className="li-docu">.height10 ( height 10vh )</li>
          <li className="li-docu">.height20 ( height 20vh )</li>
          <li className="li-docu">.height50 ( height 50vh )</li>
          <li className="li-docu">.height85 ( height 85vh )</li>
          <li className="li-docu">.height100 ( height 100vh )</li>
        </ul>
        <h2 className="bloc-title">Explanations</h2>
        <p className="font">You have referenced many classes for height.</p>
        <h2 className="bloc-title">Allheight</h2>
        <BoucleHeight />
        <h2 className="bloc-title">Use</h2>
        <p className="font">To be able to use them, add a class to your html element and write the one you have chosen.</p>
      </div>
      <Link to ="/DocumentationInEnglish" className="link-docu"><p className="link-to">Back to general documentation</p></Link>
      <Footer />
    </div>
  )
}