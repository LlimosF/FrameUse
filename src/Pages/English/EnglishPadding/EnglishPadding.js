import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function EnglishPadding () {
  return (
    <div className="PaddingBloc">
      <FrenchHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Padding</h2>
        <p>For the " padding " css property, we put a total of 400 different classes.</p>
        <h2 className="bloc-title">Example list</h2>
        <ul className="ul-docu">
          <li className="li-docu">.padding10 ( general 10px padding )</li>
          <li className="li-docu">.padding-top5 ( padding de 5px sur le haut )</li>
          <li className="li-docu">.padding-right30 ( 30px padding on the right )</li>
          <li className="li-docu">.padding-bottom4 ( 4px padding on the bottom )</li>
          <li className="li-docu">.padding-left68 ( 68px padding on the left )</li>
        </ul>
        <h2 className="bloc-title">Explanations</h2>
        <p>So we created a total of 400 classes, including 5 "different", there are 80 classes for each side, the classes range from 1 to 80, so from 1px to 80px and that for each side, and also for general padding.</p>
        <h2 className="bloc-title">All padding</h2>
        <li className="li-docu"></li>
        <h2 className="bloc-title">Use</h2>
        <p>To be able to use them, add a class to your html element and write the one you have chosen.</p>
        <Link to ="/DocumentationInEnglish" className="link-docu">Back to general documentation</Link>
        <Footer />
      </div>
    </div>
  )
}