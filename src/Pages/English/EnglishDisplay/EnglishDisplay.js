import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import EnglishHeader from "../../../Components/English/EnglishHeader/EnglishHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function EnglishDisplay () {
  return (
    <div className="ColorBloc">
      <EnglishHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Display</h2>
        <p className="font">For the css "display" property, we have set all available displays.</p>
        <h2 className="bloc-title">Example list</h2>
        <ul className="ul-docu">
          <li className="li-docu">.flex ( display flex )</li>
          <li className="li-docu">.grid ( display grid )</li>
          <li className="li-docu">.inline ( display inline )</li>
          <li className="li-docu">.block ( display block )</li>
          <li className="li-docu">.none ( display none )</li>
        </ul>
        <h2 className="bloc-title">Explanations</h2>
        <p className="font">We have referenced all the displays available in css.</p>
        <h2 className="bloc-title">All display</h2>
        <ul className="ul-docu">
          <li className="li-docu">block</li>
          <li className="li-docu">contents</li>
          <li className="li-docu">flex</li>
          <li className="li-docu">flexbox</li>
          <li className="li-docu">flow-root</li>
          <li className="li-docu">grid</li>
          <li className="li-docu">inline</li>
          <li className="li-docu">inline-block</li>
          <li className="li-docu">inline-flex</li>
          <li className="li-docu">inline-flexbox</li>
          <li className="li-docu">inline-table</li>
          <li className="li-docu">list-item</li>
          <li className="li-docu">none</li>
          <li className="li-docu">ruby</li>
          <li className="li-docu">ruby-base</li>
          <li className="li-docu">ruby-base-container</li>
          <li className="li-docu">ruby-text</li>
          <li className="li-docu">ruby-text-container</li>
          <li className="li-docu">run-in</li>
          <li className="li-docu">table</li>
          <li className="li-docu">table-caption</li>
          <li className="li-docu">table-cell</li>
          <li className="li-docu">table-column</li>
          <li className="li-docu">table-column-group</li>
          <li className="li-docu">table-footer-group</li>
          <li className="li-docu">table-header-group</li>
          <li className="li-docu">table-row</li>
          <li className="li-docu">table-row-group</li>
        </ul>
        <h2 className="bloc-title">Use</h2>
        <p className="font">To be able to use them, add a class to your html element and write the one you have chosen.</p>
      </div>
      <Link to ="/DocumentationInEnglish" className="link-docu"><p className="link-to">Back to general documentation</p></Link>
      <Footer />
    </div>
  )
}