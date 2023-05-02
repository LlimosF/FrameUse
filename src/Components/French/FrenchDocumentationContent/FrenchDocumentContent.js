import React from "react";
import "../FrenchDocumentationContent/FrenchDocumentationContent.css";
import { Link } from "react-router-dom";

export default function FrenchDocumentationContent () {
  return (
    <div>
      <h2 className="docu-title">Documentation</h2>
      <p className="docu-text-info">Voici la liste de toutes les différentes pages pour vous documenter sur notre Framework.</p>
      <nav className="">
        <ul className="ul-docu">
          <Link to ="/PaddingEnFrancais"><li className="li-docu-link">Padding</li></Link>
          <Link to ="/MarginEnFrancais"><li className="li-docu-link">Margin</li></Link>
          <Link to ="/FontSizeEnFrancais"><li className="li-docu-link">Font-size</li></Link>
          <Link to ="/ColorEnFrancais"><li className="li-docu-link">Color</li></Link>
          <Link to ="/BackgroundEnFrancais"><li className="li-docu-link">Background-color</li></Link>
          <Link to ="/DisplayEnFrancais"><li className="li-docu-link">Display</li></Link>
          <Link to ="/PositionEnFrancais"><li className="li-docu-link">Position</li></Link>
          <Link to ="/TextAlignEnFrancais"><li className="li-docu-link">Text-align</li></Link>
          <Link to ="/FontWeightEnFrancais"><li className="li-docu-link">Font-weight</li></Link>
          <Link to ="/JustifyContentEnFrancais"><li className="li-docu-link">Justify-content</li></Link>
          <Link to ="/JustifySelfEnFrancais"><li className="li-docu-link">Justify-self</li></Link>
          <Link to ="/JustifyItemsEnFrancais"><li className="li-docu-link">Justify-items</li></Link>
          <Link to ="/TextTransformEnFrancais"><li className="li-docu-link">Text-transform</li></Link>
          <Link to ="/TextDecorationEnFrancais"><li className="li-docu-link">Text-decoration</li></Link>
          <Link to ="/GridEnFrancais"><li className="li-docu-link">Responsive / grid</li></Link>
          <Link to ="/BorderRadiusEnFrancais"><li className="li-docu-link">Border-radius</li></Link>
          <Link to ="/WidthEnFrancais"><li className="li-docu-link">Width</li></Link>
          <Link to ="/HeightEnFrancais"><li className="li-docu-link">Height</li></Link>
        </ul>
      </nav>
    </div>
  )
}