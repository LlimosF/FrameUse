import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import EnglishHeader from "../../../Components/English/EnglishHeader/EnglishHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function EnglishColor () {
  return (
    <div className="ColorBloc">
      <EnglishHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Color</h2>
        <p className="font">For the "color" css property, we have made all the colors available.</p>
        <h2 className="bloc-title">Example list</h2>
        <ul className="ul-docu">
          <li className="li-docu">.black ( color black )</li>
          <li className="li-docu">.blue ( color blue )</li>
          <li className="li-docu">.red ( color red )</li>
          <li className="li-docu">.crimson ( color crimson )</li>
          <li className="li-docu">.gray ( color gray )</li>
        </ul>
        <h2 className="bloc-title">Explanations</h2>
        <p className="font">We have referenced all the colors available in css.</p>
        <h2 className="bloc-title">All the colors</h2>
        <ul className="ul-docu">
          <li className="li-docu">blue</li>
          <li className="li-docu">aliceblue</li>
          <li className="li-docu">antiquewhite</li>
          <li className="li-docu">aqua</li>
          <li className="li-docu">azure</li>
          <li className="li-docu">beige</li>
          <li className="li-docu">bisque</li>
          <li className="li-docu">black</li>
          <li className="li-docu">blanchedalmond</li>
          <li className="li-docu">blueviolet</li>
          <li className="li-docu">brown</li>
          <li className="li-docu">burlywood</li>
          <li className="li-docu">cadetblue</li>
          <li className="li-docu">chartreuse</li>
          <li className="li-docu">chocolate</li>
          <li className="li-docu">coral</li>
          <li className="li-docu">cornflowerblue</li>
          <li className="li-docu">cornsilk</li>
          <li className="li-docu">crimson</li>
          <li className="li-docu">cyan</li>
          <li className="li-docu">darkblue</li>
          <li className="li-docu">darkcyan</li>
          <li className="li-docu">darkgoldenrod</li>
          <li className="li-docu">darkgray</li>
          <li className="li-docu">darkgreen</li>
          <li className="li-docu">darkgrey</li>
          <li className="li-docu">darkkhaki</li>
          <li className="li-docu">darkmagenta</li>
          <li className="li-docu">darkolivegreen</li>
          <li className="li-docu">darkorange</li>
          <li className="li-docu">darkorchid</li>
          <li className="li-docu">darkred</li>
          <li className="li-docu">darksalmon</li>
          <li className="li-docu">darkseagreen</li>
          <li className="li-docu">darkslateblue</li>
          <li className="li-docu">darkslategray</li>
          <li className="li-docu">darkslategrey</li>
          <li className="li-docu">darkturquoise</li>
          <li className="li-docu">darkviolet</li>
          <li className="li-docu">deeppink</li>
          <li className="li-docu">deepskyblue</li>
          <li className="li-docu">dimgray</li>
          <li className="li-docu">dimgrey</li>
          <li className="li-docu">dodgerblue</li>
          <li className="li-docu">firebrick</li>
          <li className="li-docu">floralwhite</li>
          <li className="li-docu">forestgreen</li>
          <li className="li-docu">fuchsia</li>
          <li className="li-docu">gainsboro</li>
          <li className="li-docu">ghostwhite</li>
          <li className="li-docu">gold</li>
          <li className="li-docu">goldenrod</li>
          <li className="li-docu">gray</li>
          <li className="li-docu">green</li>
          <li className="li-docu">greenyellow</li>
          <li className="li-docu">grey</li>
          <li className="li-docu">honeydew</li>
          <li className="li-docu">hotpink</li>
          <li className="li-docu">indianred</li>
          <li className="li-docu">indigo</li>
          <li className="li-docu">ivory</li>
          <li className="li-docu">khaki</li>
          <li className="li-docu">lavender</li>
          <li className="li-docu">lavenderblush</li>
          <li className="li-docu">lawngreen</li>
          <li className="li-docu">lemonchiffon</li>
          <li className="li-docu">lightblue</li>
          <li className="li-docu">lightcoral</li>
          <li className="li-docu">lightcyan</li>
          <li className="li-docu">lightgoldenrodyellow</li>
          <li className="li-docu">lightgray</li>
          <li className="li-docu">lightgreen</li>
          <li className="li-docu">lightgrey</li>
          <li className="li-docu">lightpink</li>
          <li className="li-docu">lightsalmon</li>
          <li className="li-docu">lightseagreen</li>
          <li className="li-docu">lightskyblue</li>
          <li className="li-docu">lightslategray</li>
          <li className="li-docu">lightslategrey</li>
          <li className="li-docu">lightsteelblue</li>
          <li className="li-docu">lightyellow</li>
          <li className="li-docu">lime</li>
          <li className="li-docu">limegreen</li>
          <li className="li-docu">linen</li>
          <li className="li-docu">magenta</li>
          <li className="li-docu">maroon</li>
          <li className="li-docu">mediumaquamarine</li>
          <li className="li-docu">mediumblue</li>
          <li className="li-docu">mediumorchid</li>
          <li className="li-docu">mediumpurple</li>
          <li className="li-docu">mediumseagreen</li>
          <li className="li-docu">mediumslateblue</li>
          <li className="li-docu">mediumspringgreen</li>
          <li className="li-docu">mediumturquoise</li>
          <li className="li-docu">mediumvioletred</li>
          <li className="li-docu">midnightblue</li>
          <li className="li-docu">mintcream</li>
          <li className="li-docu">mistyrose</li>
          <li className="li-docu">moccasin</li>
          <li className="li-docu">navajowhite</li>
          <li className="li-docu">navy</li>
          <li className="li-docu">oldlace</li>
          <li className="li-docu">olive</li>
          <li className="li-docu">olivedrab</li>
          <li className="li-docu">orange</li>
          <li className="li-docu">orangered</li>
          <li className="li-docu">orchid</li>
          <li className="li-docu">palegoldenrod</li>
          <li className="li-docu">palegreen</li>
          <li className="li-docu">paleturquoise</li>
          <li className="li-docu">palevioletred</li>
          <li className="li-docu">papayawhip</li>
          <li className="li-docu">peachpuff</li>
          <li className="li-docu">peru</li>
          <li className="li-docu">pink</li>
          <li className="li-docu">plum</li>
          <li className="li-docu">powderblue</li>
          <li className="li-docu">purple</li>
          <li className="li-docu">rebeccapurple</li>
          <li className="li-docu">red</li>
          <li className="li-docu">rosybrown</li>
          <li className="li-docu">royalblue</li>
          <li className="li-docu">saddlebrown</li>
          <li className="li-docu">salmon</li>
          <li className="li-docu">sandybrown</li>
          <li className="li-docu">seagreen</li>
          <li className="li-docu">seashell</li>
          <li className="li-docu">sienna</li>
          <li className="li-docu">silver</li>
          <li className="li-docu">skyblue</li>
          <li className="li-docu">slateblue</li>
          <li className="li-docu">slategray</li>
          <li className="li-docu">slategrey</li>
          <li className="li-docu">snow</li>
          <li className="li-docu">springgreen</li>
          <li className="li-docu">steelblue</li>
          <li className="li-docu">tan</li>
          <li className="li-docu">teal</li>
          <li className="li-docu">thistle</li>
          <li className="li-docu">tomato</li>
          <li className="li-docu">transparent</li>
          <li className="li-docu">turquoise</li>
          <li className="li-docu">violet</li>
          <li className="li-docu">wheat</li>
          <li className="li-docu">white</li>
          <li className="li-docu">whitesmoke</li>
          <li className="li-docu">yellow</li>
          <li className="li-docu">yellowgreen</li>
        </ul>
        <h2 className="bloc-title">Use</h2>
        <p className="font">To be able to use them, add a class to your html element and write the one you have chosen.</p>
      </div>
      <Link to ="/DocumentationInEnglish" className="link-docu"><p className="link-to">Back to general documentation</p></Link>
      <Footer />
    </div>
  )
}