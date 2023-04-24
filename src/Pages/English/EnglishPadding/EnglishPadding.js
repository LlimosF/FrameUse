import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import EnglishHeader from "../../../Components/English/EnglishHeader/EnglishHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

import BouclePadding from "../../../Components/Boucle/BouclePadding/BouclePadding";
import BouclePaddingTop from "../../../Components/Boucle/BouclePadding/BouclePaddingTop";
import BouclePaddingRight from "../../../Components/Boucle/BouclePadding/BouclePaddingRight";
import BouclePaddingBottom from "../../../Components/Boucle/BouclePadding/BouclePaddingBottom";
import BouclePaddingLeft from "../../../Components/Boucle/BouclePadding/BouclePaddingLeft";

export default function EnglishPadding () {
  return (
    <div className="PaddingBloc">
      <EnglishHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Padding</h2>
        <p className="font">For the " padding " css property, we put a total of 400 different classes.</p>
        <h2 className="bloc-title">Example list</h2>
        <ul className="ul-docu">
          <li className="li-docu">.padding10 ( general 10px padding )</li>
          <li className="li-docu">.padding-top5 ( padding de 5px sur le haut )</li>
          <li className="li-docu">.padding-right30 ( 30px padding on the right )</li>
          <li className="li-docu">.padding-bottom4 ( 4px padding on the bottom )</li>
          <li className="li-docu">.padding-left68 ( 68px padding on the left )</li>
        </ul>
        <h2 className="bloc-title">Explanations</h2>
        <p className="font">So we created a total of 400 classes, including 5 "different", there are 80 classes for each side, the classes range from 1 to 80, so from 1px to 80px and that for each side, and also for general padding.</p>
        <h2 className="bloc-title">All padding</h2>
        <BouclePadding />
        <h2 className="bloc-title">All padding top</h2>
        <BouclePaddingTop />
        <h2 className="bloc-title">All padding right</h2>
        <BouclePaddingRight />
        <h2 className="bloc-title">All padding bottom</h2>
        <BouclePaddingBottom />
        <h2 className="bloc-title">All padding left</h2>
        <BouclePaddingLeft />
        <li className="li-docu"></li>
        <h2 className="bloc-title">Use</h2>
        <p className="font">To be able to use them, add a class to your html element and write the one you have chosen.</p>
      </div>
      <Link to ="/DocumentationInEnglish" className="link-docu"><p className="link-to">Back to general documentation</p></Link>
      <Footer />
    </div>
  )
}