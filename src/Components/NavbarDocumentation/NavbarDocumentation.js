import React from "react";
import "../NavbarDocumentation/NavbarDocumentation.css";
import { Link } from "react-router-dom";

export default function NavbarDocumentation () {
  return (
    <div className="nav-docu">
      <Link to ="/PaddingEnFrancais"><li className="li-docu">Padding</li></Link>
      <Link to ="/MarginEnFrancais"><li className="li-docu">Margin</li></Link>
      <Link to ="/FontSizeEnFrancais"><li className="li-docu">Font-size</li></Link>
      <Link to ="/ColorEnFrancais"><li className="li-docu">Color</li></Link>
      <Link to ="/BackgroundEnFrancais"><li className="li-docu">Background</li></Link>
      <Link to ="/DisplayEnFrancais"><li className="li-docu">Display</li></Link>
      <Link to ="/PositionEnFrancais"><li className="li-docu">Position</li></Link>
      <Link to ="/TextAlignEnFrancais"><li className="li-docu">Text-align</li></Link>
      <Link to ="/FontWeightEnFrancais"><li className="li-docu">Font-weight</li></Link>
      <Link to ="/JustifyContentEnFrancais"><li className="li-docu">Justify-content</li></Link>
      <Link to ="/JustifySelfEnFrancais"><li className="li-docu">Justify-self</li></Link>
      <Link to ="/JustifyItemsEnFrancais"><li className="li-docu">Justify-items</li></Link>
      <Link to ="/TextTransformEnFrancais"><li className="li-docu">Text-transform</li></Link>
      <Link to ="/TextDecorationEnFrancais"><li className="li-docu">Text-decoration</li></Link>
      <Link to ="/PositionEnFrancais"><li className="li-docu">Responsive grid</li></Link>
    </div>
  )
}