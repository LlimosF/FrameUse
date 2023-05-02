import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import EnglishHeader from "../../../Components/English/EnglishHeader/EnglishHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function EnglishJustifyItems () {
  return (
    <div className="ColorBloc">
      <EnglishHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Justify-items</h2>
        <p className="font">For the "justify-items" css property, we have set all the justify-items available.</p>
        <h2 className="bloc-title">Example list</h2>
        <ul className="ul-docu">
          <li className="li-docu">.justify-items-auto ( justify items auto )</li>
          <li className="li-docu">.justify-items-center ( justify items center )</li>
          <li className="li-docu">.justify-items-end ( justify items end )</li>
          <li className="li-docu">.justify-items-left ( justify items left )</li>
          <li className="li-docu">.justify-items-normal ( justify items normal )</li>
        </ul>
        <h2 className="bloc-title">Explanations</h2>
        <p className="font">We have referenced all the justify-items available in css.</p>
        <h2 className="bloc-title">All justify-items</h2>
        <ul className="ul-docu">
          <li className="li-docu">.justify-items-auto</li>
          <li className="li-docu">.justify-items-baseline</li>
          <li className="li-docu">.justify-items-center</li>
          <li className="li-docu">.justify-items-end</li>
          <li className="li-docu">.justify-items-first-baseline</li>
          <li className="li-docu">.justify-items-flex-end</li>
          <li className="li-docu">.justify-items-flex-start</li>
          <li className="li-docu">.justify-items-last-baseline</li>
          <li className="li-docu">.justify-items-left</li>
          <li className="li-docu">.justify-items-normal</li>
          <li className="li-docu">.justify-items-right</li>
          <li className="li-docu">.justify-items-safe</li>
          <li className="li-docu">.justify-items-self-end</li>
          <li className="li-docu">.justify-items-self-start</li>
          <li className="li-docu">.justify-items-start</li>
          <li className="li-docu">.justify-items-stretch</li>
          <li className="li-docu">.justify-items-unsafe</li>
          <li className="li-docu">.justify-items-inherit</li>
          <li className="li-docu">.justify-items-initial</li>
          <li className="li-docu">.justify-items-unset</li>
        </ul>
        <h2 className="bloc-title">Use</h2>
        <p className="font">To be able to use them, add a class to your html element and write the one you have chosen.</p>
      </div>
      <Link to ="/DocumentationInEnglish" className="link-docu"><p className="link-to">Back to general documentation</p></Link>
      <Footer />
    </div>
  )
}