import React from "react";
import "../FrenchDocumentationContent/FrenchDocumentationContent.css";
import { Link } from "react-router-dom";

export default function FrenchDocumentationContent () {
  return (
    <div>
      <h2 className="docu-title">Documentation</h2>
      <nav>
        <ul>
          <Link to ="/PaddingEnFrancais"><li>Padding</li></Link>
          <Link to ="/MarginEnFrancais"><li>Margin</li></Link>
          <Link to ="/ColorEnFrancais"><li>Color</li></Link>
          <Link to ="/BackgroundColorEnFrancais"><li>BackgroundColor</li></Link>
          <Link to ="/DisplayEnFrancais"><li>Display</li></Link>
          <Link to ="/PositionEnFrancais"><li>Position</li></Link>
          <Link to ="/PositionEnFrancais"><li>Text-align</li></Link>
          <Link to ="/PositionEnFrancais"><li>Font-weight</li></Link>
          <Link to ="/PositionEnFrancais"><li>Justify-content</li></Link>
          <Link to ="/PositionEnFrancais"><li>Justify-self</li></Link>
          <Link to ="/PositionEnFrancais"><li>Justify-items</li></Link>
          <Link to ="/PositionEnFrancais"><li>Text-transform</li></Link>
          <Link to ="/PositionEnFrancais"><li>Text-decoration</li></Link>
          <Link to ="/PositionEnFrancais"><li>Responsive grid</li></Link>
        </ul>
      </nav>
    </div>
  )
}