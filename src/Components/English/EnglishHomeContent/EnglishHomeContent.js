import React from "react";
import BackgroundFixed from "../../BackgroundFixed/BackgroundFixed";
import { Link } from "react-router-dom";
import LogoFU from "../../../media/FrameUse.png";

export default function EnglishHomeContent () {
  return (
    <div>
      <BackgroundFixed />
      <h2 className="first-title">Build your pages and css very quickly thanks to this Framework.</h2>
      <img src={LogoFU} className="frameUse" alt="Logo de FrameUse" />
      <div className="container-card">
        <div className="card">
          <h3>Simple</h3>
          <hr className="separator-card" />
          <p>Easy to use</p>
          <hr className="separator-card" />
          <p>Lots of CSS properties available</p>
          <hr className="separator-card" />
          <button className="btn-card"><Link to ="/DocumentationInEnglish">See more</Link></button>
        </div>
        <div className="card">
          <h3>Fast</h3>
          <hr className="separator-card" />
          <p>Just need to add css class to your HTML element</p>
          <hr className="separator-card" />
          <p>Customizable file</p>
          <hr className="separator-card" />
          <button className="btn-card"><Link to ="/DocumentationInEnglish">See more</Link></button>
        </div>
        <div className="card">
          <h3>Responsive</h3>
          <hr className="separator-card" />
          <p>100% Adaptive</p>
          <hr className="separator-card" />
          <p>Class for responsive</p>
          <hr className="separator-card" />
          <button className="btn-card"><Link to ="/DocumentationInEnglish">See more</Link></button>
        </div>
      </div>
    </div>
    
  )
}