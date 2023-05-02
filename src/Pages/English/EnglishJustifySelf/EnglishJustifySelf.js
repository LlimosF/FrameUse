import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import EnglishHeader from "../../../Components/English/EnglishHeader/EnglishHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function EnglishJustifySelf () {
  return (
    <div className="ColorBloc">
      <EnglishHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Justify-self</h2>
        <p className="font">For the "justify-self" css property, we have made all the justify-self available.</p>
        <h2 className="bloc-title">Example list</h2>
        <ul className="ul-docu">
          <li className="li-docu">.justify-self-baseline ( justify self baseline )</li>
          <li className="li-docu">.justify-self-center ( justify self center )</li>
          <li className="li-docu">.justify-self-flex-end ( justify self flex-end )</li>
          <li className="li-docu">.justify-self-left ( justify self left )</li>
          <li className="li-docu">.justify-self-right ( justify self left )</li>
        </ul>
        <h2 className="bloc-title">Explanations</h2>
        <p className="font">We have referenced all the justify-self available in css.</p>
        <h2 className="bloc-title">All justify-self</h2>
        <ul className="ul-docu">
          <li className="li-docu">.justify-self-auto</li>
          <li className="li-docu">.justify-self-baseline</li>
          <li className="li-docu">.justify-self-center</li>
          <li className="li-docu">.justify-self-end</li>
          <li className="li-docu">.justify-self-first-baseline</li>
          <li className="li-docu">.justify-self-flex-end</li>
          <li className="li-docu">.justify-self-flex-start</li>
          <li className="li-docu">.justify-self-last-baseline</li>
          <li className="li-docu">.justify-self-left</li>
          <li className="li-docu">.justify-self-normal</li>
          <li className="li-docu">.justify-self-right</li>
          <li className="li-docu">.justify-self-save</li>
          <li className="li-docu">.justify-self-self-end</li>
          <li className="li-docu">.justify-self-self-start</li>
          <li className="li-docu">.justify-self-start</li>
          <li className="li-docu">.justify-self-stretch</li>
          <li className="li-docu">.justify-self-unsave</li>
          <li className="li-docu">.justify-self-inherit</li>
          <li className="li-docu">.justify-self-initial</li>
          <li className="li-docu">.justify-self-unset</li>
        </ul>
        <h2 className="bloc-title">Use</h2>
        <p className="font">To be able to use them, add a class to your html element and write the one you have chosen.</p>
      </div>
      <Link to ="/DocumentationInEnglish" className="link-docu"><p className="link-to">Back to general documentation</p></Link>
      <Footer />
    </div>
  )
}