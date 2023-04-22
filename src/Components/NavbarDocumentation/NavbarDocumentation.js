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
    </div>
  )
}