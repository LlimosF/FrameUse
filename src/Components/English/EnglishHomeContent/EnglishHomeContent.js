import React from "react";
import BackgroundFixed from "../../BackgroundFixed/BackgroundFixed";
import { Link } from "react-router-dom";
import "../../French/FrenchHomeContent/FrenchHomeContent.css";

import LogoFU from "../../../media/FrameUse.png";
import screen1 from "../../../media/screen1.png";
import screen2 from "../../../media/screen2.png";
import screen3 from "../../../media/screen3.png";
import screen4 from "../../../media/screen4.png";
import Florian from "../../../media/florian.jpg";

export default function EnglishHomeContent () {
  return (
    <div className="home">
      <BackgroundFixed />
      <h2 className="first-title">Build your pages and css very quickly thanks to this Framework.</h2>
      <div className="center">
        <img src={LogoFU} className="frameUse" alt="Logo de FrameUse" />
      </div>
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
        <h4 className="frameuse-title">FrameUse</h4>
        <div className="about-fu">
          <p>
            FrameUse is a css framework that aims to help web / mobile web developers design their websites quickly and efficiently. Our framework has a lot of class
              css for html element customization.
              All css classes are listed in a classic css file, we have implemented css classes for most of the css elements available on our favorite IDE.
              There are classes to put a display, change the position of an element, change the font size, text color and so on. Everything is filled in the
              official documentation available directly on our website.
          </p>
          <div className="screen-container">
          <div className="screen1">
              <img src={screen1} className="screen"/>
              <p>
                For this example, we put a display flex and background-color gray on our parent, on the title, a font-size of 30px, a padding of 20px and a red color.
                For the text, we put a margin of 20px, a font-size of 18px, and a maganta color.
              </p>
            </div>
            <div className="screen1">
              <img src={screen2} className="screen"/>
              <p>
                For this example, we have on the div, put a display grid with 3 columns. Inside, 3 images which all have a border-radius of 15px. Image 1 and 2 have size
                of 60% relative to the parent, image 2 has a size of 60%.
              </p>
            </div>
            <div className="screen1">
              <img src={screen3} className="screen"/>
              <p>
                For this example, we have created a button template, which will be black on a white background, with a slight border-radius.
              </p>
            </div>
            <div className="screen1">
              <img src={screen4} className="screen"/>
              <p>
                Por this example, it's an image that will have a border-radius of 100% so it will be round. It also has a 15px box-shadow of blur in black, and it will be centered
                in the middle of the screen regardless of its size.
              </p>
            </div>
          </div>
        </div>
        <div className="creator">
        <h4 className="frameuse-title">Creator</h4>
        <div className="creator-container">
          <div className="center">
            <img src={Florian} alt="" className="creator-pic" />
          </div>
          <p className="creator-name">Florian Llimos</p>
          <div className="center">
            <a href="https://florianllimos.netlify.app/" target="_blank" className="link-creator">Personnal web site</a>
          </div>
        </div>
      </div>
    </div>
  )
}