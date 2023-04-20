import React from "react";
import {Link} from "react-router-dom"
import Burger from "../../../media/burger.png";
import EnglishFlag from "../../../media/english.png";

export default function EnglishHeader () {
  return (
    <div className="header">
      <nav className="navbar container">
        <Link to="/"><h1>FrameUse</h1></Link>
        <input type="checkbox" id="toggler" />
        <label for="toggler"><img src={Burger} className="burgerLogo"></img></label>
        <div className="menu">
          <ul className="list">
            <Link to ="/"><img src={EnglishFlag} className="flag"/></Link>
            <li className="LiNavTop"><Link to="/HomeEng" className="LinkNav">Home</Link></li>
            <li className="LiNavTop"><Link to="/DocumentationInEnglish" className="LinkNav">Documentation</Link></li>
            <li className="LiNavTop"><Link to="/ExampleInEnglish" className="LinkNav">Example</Link></li>
            <li className="LiNavTop"><Link to="/UseInEnglish" className="LinkNav">Use</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}