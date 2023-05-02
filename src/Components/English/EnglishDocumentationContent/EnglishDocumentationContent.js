import React from "react";
import "../../French/FrenchDocumentationContent/FrenchDocumentationContent.css";
import { Link } from "react-router-dom";

export default function EnglishDocumentationContent () {
  return (
    <div>
      <h2 className="docu-title">Documentation</h2>
      <p className="docu-text-info">Here is the list of all the different pages to document you on our Framework.</p>
      <nav className="">
        <ul className="ul-docu">
          <Link to ="/PaddingInEnglish"><li className="li-docu-link">Padding</li></Link>
          <Link to ="/MarginInEnglish"><li className="li-docu-link">Margin</li></Link>
          <Link to ="/FontSizeInEnglish"><li className="li-docu-link">Font-size</li></Link>
          <Link to ="/ColorInEnglish"><li className="li-docu-link">Color</li></Link>
          <Link to ="/BackgroundInEnglish"><li className="li-docu-link">Background-color</li></Link>
          <Link to ="/DisplayInEnglish"><li className="li-docu-link">Display</li></Link>
          <Link to ="/PositionInEnglish"><li className="li-docu-link">Position</li></Link>
          <Link to ="/TextAlignInEnglish"><li className="li-docu-link">Text-align</li></Link>
          <Link to ="/FontWeightInEnglish"><li className="li-docu-link">Font-weight</li></Link>
          <Link to ="/JustifyContentInEnglish"><li className="li-docu-link">Justify-content</li></Link>
          <Link to ="/JustifySelfInEnglish"><li className="li-docu-link">Justify-self</li></Link>
          <Link to ="/JustifyItemsInEnglish"><li className="li-docu-link">Justify-items</li></Link>
          <Link to ="/TextTransformInEnglish"><li className="li-docu-link">Text-transform</li></Link>
          <Link to ="/TextDecorationInEnglish"><li className="li-docu-link">Text-decoration</li></Link>
          <Link to ="/GridInEnglish"><li className="li-docu-link">Responsive / grid</li></Link>
          <Link to ="/BorderRadiusInEnglish"><li className="li-docu-link">Border-radius</li></Link>
          <Link to ="/WidthInEnglish"><li className="li-docu-link">Width</li></Link>
          <Link to ="/HeightInEnglish"><li className="li-docu-link">Height</li></Link>
        </ul>
      </nav>
    </div>
  )
}