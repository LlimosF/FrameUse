import React from "react";
import { Link } from "react-router-dom";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import Footer from "../../../Components/Footer/Footer";
import "../../../Components/French/FrenchDocumentationContent/FrenchDocumentationContent.css";

export default function EnglishGrid () {
  return (
    <div className="ColorBloc">
      <FrenchHeader />
      <BackgroundFixed />
      <div className="bloc-docu">
        <h2 className="bloc-title">Responsive grid</h2>
        <p className="font">
          For responsive, we offer GRID CSS. For each screen width, we have created classes from 1 to columns
          to maximize the flexibility of grid and your desires.
        </p>
        <h2 className="bloc-title">Example list</h2>
        <ul className="ul-docu">
          <li className="li-docu">.col11-1400 ( at 1400px screen width there will be 11 columns. )</li>
          <li className="li-docu">.col8-800 ( at 800px screen width there will be 8 columns. )</li>
          <li className="li-docu">.col6-1900 ( at 1900px screen width there will be 6 columns.)</li>
          <li className="li-docu">.col2-600 ( at 600px screen width there will be 6 columns. )</li>
          <li className="li-docu">.col7-1100 ( at 1100px screen width there will be 7 columns. )</li>
        </ul>
        <h2 className="bloc-title">Explications</h2>
        <p className="font">
          We wrote you the maximum of "templates" possible, with the minimum, and the maximum
          grid by screen size. Screen sizes are in width and range from
          300px to 2000px.
        </p>
        <h2 className="bloc-title">Grid CSS</h2>
        <h3 className="title-grid"><span className="pink">@media</span><span className="orange"> screen </span> and <span className="yellow">(</span><span className="blue"> min-width: </span><span className="green">300px </span><span className="yellow">)</span></h3>
        <ul className="ul-docu">
          <li className="li-docu">.col2-300</li>
          <li className="li-docu">.col3-300</li>
          <li className="li-docu">.col4-300</li>
          <li className="li-docu">.col5-300</li>
          <li className="li-docu">.col6-300</li>
          <li className="li-docu">.col7-300</li>
          <li className="li-docu">.col8-300</li>
          <li className="li-docu">.col9-300</li>
          <li className="li-docu">.col10-300</li>
          <li className="li-docu">.col11-300</li>
          <li className="li-docu">.col12-300</li>
        </ul>
        <h3 className="title-grid"><span className="pink">@media</span><span className="orange"> screen </span> and <span className="yellow">(</span><span className="blue"> min-width: </span><span className="green">400px </span><span className="yellow">)</span></h3>
        <ul className="ul-docu">
          <li className="li-docu">.col2-400</li>
          <li className="li-docu">.col3-400</li>
          <li className="li-docu">.col4-400</li>
          <li className="li-docu">.col5-400</li>
          <li className="li-docu">.col6-400</li>
          <li className="li-docu">.col7-400</li>
          <li className="li-docu">.col8-400</li>
          <li className="li-docu">.col9-400</li>
          <li className="li-docu">.col10-400</li>
          <li className="li-docu">.col11-400</li>
          <li className="li-docu">.col12-400</li>
        </ul>
        <h3 className="title-grid"><span className="pink">@media</span><span className="orange"> screen </span> and <span className="yellow">(</span><span className="blue"> min-width: </span><span className="green">500px </span><span className="yellow">)</span></h3>
        <ul className="ul-docu">
          <li className="li-docu">.col2-500</li>
          <li className="li-docu">.col3-500</li>
          <li className="li-docu">.col4-500</li>
          <li className="li-docu">.col5-500</li>
          <li className="li-docu">.col6-500</li>
          <li className="li-docu">.col7-500</li>
          <li className="li-docu">.col8-500</li>
          <li className="li-docu">.col9-500</li>
          <li className="li-docu">.col10-500</li>
          <li className="li-docu">.col11-500</li>
          <li className="li-docu">.col12-500</li>
        </ul>
        <h3 className="title-grid"><span className="pink">@media</span><span className="orange"> screen </span> and <span className="yellow">(</span><span className="blue"> min-width: </span><span className="green">600px </span><span className="yellow">)</span></h3>
        <ul className="ul-docu">
          <li className="li-docu">.col2-600</li>
          <li className="li-docu">.col3-600</li>
          <li className="li-docu">.col4-600</li>
          <li className="li-docu">.col5-600</li>
          <li className="li-docu">.col6-600</li>
          <li className="li-docu">.col7-600</li>
          <li className="li-docu">.col8-600</li>
          <li className="li-docu">.col9-600</li>
          <li className="li-docu">.col10-600</li>
          <li className="li-docu">.col11-600</li>
          <li className="li-docu">.col12-600</li>
        </ul>
        <h3 className="title-grid"><span className="pink">@media</span><span className="orange"> screen </span> and <span className="yellow">(</span><span className="blue"> min-width: </span><span className="green">700px </span><span className="yellow">)</span></h3>
        <ul className="ul-docu">
          <li className="li-docu">.col2-700</li>
          <li className="li-docu">.col3-700</li>
          <li className="li-docu">.col4-700</li>
          <li className="li-docu">.col5-700</li>
          <li className="li-docu">.col6-700</li>
          <li className="li-docu">.col7-700</li>
          <li className="li-docu">.col8-700</li>
          <li className="li-docu">.col9-700</li>
          <li className="li-docu">.col10-700</li>
          <li className="li-docu">.col11-700</li>
          <li className="li-docu">.col12-700</li>
        </ul>
        <h3 className="title-grid"><span className="pink">@media</span><span className="orange"> screen </span> and <span className="yellow">(</span><span className="blue"> min-width: </span><span className="green">800px </span><span className="yellow">)</span></h3>
        <ul className="ul-docu">
          <li className="li-docu">.col2-800</li>
          <li className="li-docu">.col3-800</li>
          <li className="li-docu">.col4-800</li>
          <li className="li-docu">.col5-800</li>
          <li className="li-docu">.col6-800</li>
          <li className="li-docu">.col7-800</li>
          <li className="li-docu">.col8-800</li>
          <li className="li-docu">.col9-800</li>
          <li className="li-docu">.col10-800</li>
          <li className="li-docu">.col11-800</li>
          <li className="li-docu">.col12-800</li>
        </ul>
        <h3 className="title-grid"><span className="pink">@media</span><span className="orange"> screen </span> and <span className="yellow">(</span><span className="blue"> min-width: </span><span className="green">900px </span><span className="yellow">)</span></h3>
        <ul className="ul-docu">
          <li className="li-docu">.col2-900</li>
          <li className="li-docu">.col3-900</li>
          <li className="li-docu">.col4-900</li>
          <li className="li-docu">.col5-900</li>
          <li className="li-docu">.col6-900</li>
          <li className="li-docu">.col7-900</li>
          <li className="li-docu">.col8-900</li>
          <li className="li-docu">.col9-900</li>
          <li className="li-docu">.col10-900</li>
          <li className="li-docu">.col11-900</li>
          <li className="li-docu">.col12-900</li>
        </ul>
        <h3 className="title-grid"><span className="pink">@media</span><span className="orange"> screen </span> and <span className="yellow">(</span><span className="blue"> min-width: </span><span className="green">1000px </span><span className="yellow">)</span></h3>
        <ul className="ul-docu">
          <li className="li-docu">.col2-1000</li>
          <li className="li-docu">.col3-1000</li>
          <li className="li-docu">.col4-1000</li>
          <li className="li-docu">.col5-1000</li>
          <li className="li-docu">.col6-1000</li>
          <li className="li-docu">.col7-1000</li>
          <li className="li-docu">.col8-1000</li>
          <li className="li-docu">.col9-1000</li>
          <li className="li-docu">.col10-1000</li>
          <li className="li-docu">.col11-1000</li>
          <li className="li-docu">.col12-1000</li>
        </ul>
        <h3 className="title-grid"><span className="pink">@media</span><span className="orange"> screen </span> and <span className="yellow">(</span><span className="blue"> min-width: </span><span className="green">1100px </span><span className="yellow">)</span></h3>
        <ul className="ul-docu">
          <li className="li-docu">.col2-1100</li>
          <li className="li-docu">.col3-1100</li>
          <li className="li-docu">.col4-1100</li>
          <li className="li-docu">.col5-1100</li>
          <li className="li-docu">.col6-1100</li>
          <li className="li-docu">.col7-1100</li>
          <li className="li-docu">.col8-1100</li>
          <li className="li-docu">.col9-1100</li>
          <li className="li-docu">.col10-1100</li>
          <li className="li-docu">.col11-1100</li>
          <li className="li-docu">.col12-1100</li>
        </ul>
        <h3 className="title-grid"><span className="pink">@media</span><span className="orange"> screen </span> and <span className="yellow">(</span><span className="blue"> min-width: </span><span className="green">1200px </span><span className="yellow">)</span></h3>
        <ul className="ul-docu">
          <li className="li-docu">.col2-1200</li>
          <li className="li-docu">.col3-1200</li>
          <li className="li-docu">.col4-1200</li>
          <li className="li-docu">.col5-1200</li>
          <li className="li-docu">.col6-1200</li>
          <li className="li-docu">.col7-1200</li>
          <li className="li-docu">.col8-1200</li>
          <li className="li-docu">.col9-1200</li>
          <li className="li-docu">.col10-1200</li>
          <li className="li-docu">.col11-1200</li>
          <li className="li-docu">.col12-1200</li>
        </ul>
        <h3 className="title-grid"><span className="pink">@media</span><span className="orange"> screen </span> and <span className="yellow">(</span><span className="blue"> min-width: </span><span className="green">1300px </span><span className="yellow">)</span></h3>
        <ul className="ul-docu">
          <li className="li-docu">.col2-1300</li>
          <li className="li-docu">.col3-1300</li>
          <li className="li-docu">.col4-1300</li>
          <li className="li-docu">.col5-1300</li>
          <li className="li-docu">.col6-1300</li>
          <li className="li-docu">.col7-1300</li>
          <li className="li-docu">.col8-1300</li>
          <li className="li-docu">.col9-1300</li>
          <li className="li-docu">.col10-1300</li>
          <li className="li-docu">.col11-1300</li>
          <li className="li-docu">.col12-1300</li>
        </ul>
        <h3 className="title-grid"><span className="pink">@media</span><span className="orange"> screen </span> and <span className="yellow">(</span><span className="blue"> min-width: </span><span className="green">1400px </span><span className="yellow">)</span></h3>
        <ul className="ul-docu">
          <li className="li-docu">.col2-1400</li>
          <li className="li-docu">.col3-1400</li>
          <li className="li-docu">.col4-1400</li>
          <li className="li-docu">.col5-1400</li>
          <li className="li-docu">.col6-1400</li>
          <li className="li-docu">.col7-1400</li>
          <li className="li-docu">.col8-1400</li>
          <li className="li-docu">.col9-1400</li>
          <li className="li-docu">.col10-1400</li>
          <li className="li-docu">.col11-1400</li>
          <li className="li-docu">.col12-1400</li>
        </ul>
        <h3 className="title-grid"><span className="pink">@media</span><span className="orange"> screen </span> and <span className="yellow">(</span><span className="blue"> min-width: </span><span className="green">1500px </span><span className="yellow">)</span></h3>
        <ul className="ul-docu">
          <li className="li-docu">.col2-1500</li>
          <li className="li-docu">.col3-1500</li>
          <li className="li-docu">.col4-1500</li>
          <li className="li-docu">.col5-1500</li>
          <li className="li-docu">.col6-1500</li>
          <li className="li-docu">.col7-1500</li>
          <li className="li-docu">.col8-1500</li>
          <li className="li-docu">.col9-1500</li>
          <li className="li-docu">.col10-1500</li>
          <li className="li-docu">.col11-1500</li>
          <li className="li-docu">.col12-1500</li>
        </ul>
        <h3 className="title-grid"><span className="pink">@media</span><span className="orange"> screen </span> and <span className="yellow">(</span><span className="blue"> min-width: </span><span className="green">1600px </span><span className="yellow">)</span></h3>
        <ul className="ul-docu">
          <li className="li-docu">.col2-1600</li>
          <li className="li-docu">.col3-1600</li>
          <li className="li-docu">.col4-1600</li>
          <li className="li-docu">.col5-1600</li>
          <li className="li-docu">.col6-1600</li>
          <li className="li-docu">.col7-1600</li>
          <li className="li-docu">.col8-1600</li>
          <li className="li-docu">.col9-1600</li>
          <li className="li-docu">.col10-1600</li>
          <li className="li-docu">.col11-1600</li>
          <li className="li-docu">.col12-1600</li>
        </ul>
        <h3 className="title-grid"><span className="pink">@media</span><span className="orange"> screen </span> and <span className="yellow">(</span><span className="blue"> min-width: </span><span className="green">1700px </span><span className="yellow">)</span></h3>
        <ul className="ul-docu">
          <li className="li-docu">.col2-1700</li>
          <li className="li-docu">.col3-1700</li>
          <li className="li-docu">.col4-1700</li>
          <li className="li-docu">.col5-1700</li>
          <li className="li-docu">.col6-1700</li>
          <li className="li-docu">.col7-1700</li>
          <li className="li-docu">.col8-1700</li>
          <li className="li-docu">.col9-1700</li>
          <li className="li-docu">.col10-1700</li>
          <li className="li-docu">.col11-1700</li>
          <li className="li-docu">.col12-1700</li>
        </ul>
        <h3 className="title-grid"><span className="pink">@media</span><span className="orange"> screen </span> and <span className="yellow">(</span><span className="blue"> min-width: </span><span className="green">1800px </span><span className="yellow">)</span></h3>
        <ul className="ul-docu">
          <li className="li-docu">.col2-1800</li>
          <li className="li-docu">.col3-1800</li>
          <li className="li-docu">.col4-1800</li>
          <li className="li-docu">.col5-1800</li>
          <li className="li-docu">.col6-1800</li>
          <li className="li-docu">.col7-1800</li>
          <li className="li-docu">.col8-1800</li>
          <li className="li-docu">.col9-1800</li>
          <li className="li-docu">.col10-1800</li>
          <li className="li-docu">.col11-1800</li>
          <li className="li-docu">.col12-1800</li>
        </ul>
        <h3 className="title-grid"><span className="pink">@media</span><span className="orange"> screen </span> and <span className="yellow">(</span><span className="blue"> min-width: </span><span className="green">1900px </span><span className="yellow">)</span></h3>
        <ul className="ul-docu">
          <li className="li-docu">.col2-1900</li>
          <li className="li-docu">.col3-1900</li>
          <li className="li-docu">.col4-1900</li>
          <li className="li-docu">.col5-1900</li>
          <li className="li-docu">.col6-1900</li>
          <li className="li-docu">.col7-1900</li>
          <li className="li-docu">.col8-1900</li>
          <li className="li-docu">.col9-1900</li>
          <li className="li-docu">.col10-1900</li>
          <li className="li-docu">.col11-1900</li>
          <li className="li-docu">.col12-1900</li>
        </ul>
        <h3 className="title-grid"><span className="pink">@media</span><span className="orange"> screen </span> and <span className="yellow">(</span><span className="blue"> min-width: </span><span className="green">2000px </span><span className="yellow">)</span></h3>
        <ul className="ul-docu">
          <li className="li-docu">.col2-2000</li>
          <li className="li-docu">.col3-2000</li>
          <li className="li-docu">.col4-2000</li>
          <li className="li-docu">.col5-2000</li>
          <li className="li-docu">.col6-2000</li>
          <li className="li-docu">.col7-2000</li>
          <li className="li-docu">.col8-2000</li>
          <li className="li-docu">.col9-2000</li>
          <li className="li-docu">.col10-2000</li>
          <li className="li-docu">.col11-2000</li>
          <li className="li-docu">.col12-2000</li>
        </ul>
        <h2 className="bloc-title">Use</h2>
        <p className="font">To be able to use them, add a class to your html element and write the one you have chosen.</p>
      </div>
      <Link to ="/DocumentationInEnglish" className="link-docu"><p className="link-to">Back to general documentation</p></Link>
      <Footer />
    </div>
  )
}