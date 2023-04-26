import React from "react";
import "../../French/FrenchExempleContent/FrenchExempleContent.css";
import Example from "../../../media/portable.png"

export default function EnglishExempleContent () {
  return (
    <div>
      <h2 className="title-top">Examples</h2>
      <div className="center">
        <img src={Example} alt="" className="example-pic"></img>
      </div>
      <p className="text">We have created elements in pre-personalized html, to allow you to have some personalized elements very quickly. All these elements are responsive and will adapt to all types of screens.</p>
      <h3 className="title-exemple">Button</h3>
      <div className="exemple">
        <div className="exemple1">
          <button className="btn1">Button 1</button>
          <p className="text">.btn1</p>
        </div>
        <div className="exemple2">
          <button className="btn2">Button 2</button>
          <p className="text">.btn2</p>
        </div>
        <div className="exemple3">
          <button className="btn3">Button 3</button>
          <p className="text">.btn3</p>
        </div>
        <div className="exemple4">
          <button className="btn4">Button 4</button>
          <p className="text">.btn4</p>
        </div>
        <div className="exemple5">
          <button className="btn5">Button 5</button>
          <p className="text">.btn5</p>
        </div>
        <div className="exemple6">
          <button className="btn6">Button 6</button>
          <p className="text">.btn6</p>
        </div>
      </div>
    </div>
  )
}