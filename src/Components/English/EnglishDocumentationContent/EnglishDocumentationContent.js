import React from "react";
import "../../French/FrenchDocumentationContent/FrenchDocumentationContent.css";
import { Link } from "react-router-dom";

export default function EnglishDocumentationContent () {
  return (
    <div>
      <h2 className="docu-title">Documentation</h2>
      <nav>
        <ul>
          <Link to ="/PaddingInEnglish"><li>Padding</li></Link>
          <Link to ="/MarginInEnglish"><li>Margin</li></Link>
          <Link to ="/ColorInEnglish"><li>Color</li></Link>
          <Link to ="/BackgroundColorInEnglish"><li>BackgroundColor</li></Link>
          <Link to ="/DisplayInEnglish"><li>Display</li></Link>
          <Link to ="/PositionInEnglish"><li>Position</li></Link>
        </ul>
      </nav>
    </div>
  )
}