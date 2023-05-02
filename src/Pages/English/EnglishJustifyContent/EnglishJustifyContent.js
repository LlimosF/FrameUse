import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import EnglishHeader from "../../../Components/English/EnglishHeader/EnglishHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function EnglishJustifyContent () {
  return (
    <div className="ColorBloc">
      <EnglishHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Justify-content</h2>
        <p className="font">For the "justify-content" css property, we have set all available justifu-content.</p>
        <h2 className="bloc-title">Example list</h2>
        <ul className="ul-docu">
          <li className="li-docu">.justify-content-baseline ( justify content baseline )</li>
          <li className="li-docu">.justify-content-center ( justify content center )</li>
          <li className="li-docu">.justify-content-flex-end ( justify content flex-end )</li>
          <li className="li-docu">.justify-content-left ( justify content left )</li>
          <li className="li-docu">.justify-content-right ( justify content left )</li>
        </ul>
        <h2 className="bloc-title">Explanations</h2>
        <p className="font">We have referenced all the justify-content available in css.</p>
        <h2 className="bloc-title">All justify-content</h2>
        <ul className="ul-docu">
          <li className="li-docu">.justify-content-baseline</li>
          <li className="li-docu">.justify-content-center</li>
          <li className="li-docu">.justify-content-end</li>
          <li className="li-docu">.justify-content-first-baseline</li>
          <li className="li-docu">.justify-content-flex-end</li>
          <li className="li-docu">.justify-content-flex-start</li>
          <li className="li-docu">.justify-content-last-baseline</li>
          <li className="li-docu">.justify-content-left</li>
          <li className="li-docu">.justify-content-right</li>
          <li className="li-docu">.justify-content-safe</li>
          <li className="li-docu">.justify-content-space-around</li>
          <li className="li-docu">.justify-content-space-between</li>
          <li className="li-docu">.justify-content-space-evenly</li>
          <li className="li-docu">.justify-content-stretch</li>
          <li className="li-docu">.justify-content-unsafe</li>
          <li className="li-docu">.justify-content-inherit</li>
          <li className="li-docu">.justify-conten-initial</li>
          <li className="li-docu">.justify-content-unset</li>
        </ul>
        <h2 className="bloc-title">Use</h2>
        <p className="font">To be able to use them, add a class to your html element and write the one you have chosen.</p>
      </div>
      <Link to ="/DocumentationInEnglish" className="link-docu"><p className="link-to">Back to general documentation</p></Link>
      <Footer />
    </div>
  )
}