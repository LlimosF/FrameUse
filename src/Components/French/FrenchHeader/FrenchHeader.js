import React from "react";
import { Link } from "react-router-dom"
import "../FrenchHeader/FrenchHeader.css";
import burger from "../../../media/burger.png";
import FrenchFlag from "../../../media/french.png";

export default function FrenchHeader () {
  return (
    <div className="header">
      <nav className="navbar container">
        <Link to="/"><h1>FrameUse</h1></Link>
        <input type="checkbox" id="toggler" />
        <label for="toggler"><img src={burger} className="burgerLogo"></img></label>
        <div className="menu">
          <ul className="list">
            <Link to ="/HomeEng"><img src={FrenchFlag} className="flag"/></Link>
            <li className="LiNavTop"><Link to="/" className="LinkNav"></Link></li>
            <li className="LiNavTop"><Link to="/" className="LinkNav">Accueil</Link></li>
            <li className="LiNavTop"><Link to="/DocumentationEnFrancais" className="LinkNav">Documentation</Link></li>
            <li className="LiNavTop"><Link to="/ExemplesEnFrancais" className="LinkNav">Exemples</Link></li>
            <li className="LiNavTop"><Link to="/UtilisationEnFrancais" className="LinkNav">Utilisation</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}