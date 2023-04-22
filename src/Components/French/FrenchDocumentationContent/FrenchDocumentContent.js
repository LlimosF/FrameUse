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
          <li>Display</li>
          <li>Position</li>
        </ul>
      </nav>
    </div>
  )
}