import React from "react";
import "../FrenchHomeContent/FrenchHomeContent.css";
import BackgroundFixed from "../../BackgroundFixed/BackgroundFixed";
import { Link } from "react-router-dom";
import LogoFU from "../../../media/FrameUse.png";
import screen1 from "../../../media/screen1.png";
import screen2 from "../../../media/screen2.png";
import screen3 from "../../../media/screen3.png";
import screen4 from "../../../media/screen4.png";
import Florian from "../../../media/florian.jpg";

export default function FrenchHomeContent () {
  return (
    <div className="home">
      <BackgroundFixed />
      <h2 className="first-title">Construisez très rapidement vos pages et le css grâce à ce Framework.</h2>
      <div className="center">
        <img src={LogoFU} className="frameUse" alt="Logo de FrameUse" />
      </div>
      <div className="container-card">
        <div className="card">
          <h3>Simple</h3>
          <hr className="separator-card" />
          <p>Facile d'utilisation</p>
          <hr className="separator-card" />
          <p>Beaucoup de propriétées CSS mises à disposition</p>
          <hr className="separator-card" />
          <button className="btn-card"><Link to ="/DocumentationEnFrancais">Voir plus</Link></button>
        </div>
        <div className="card">
          <h3>Rapide</h3>
          <hr className="separator-card" />
          <p>Juste besoin d'ajouter la classe css a votre élément HTML</p>
          <hr className="separator-card" />
          <p>Fichier personnalisable</p>
          <hr className="separator-card" />
          <button className="btn-card"><Link to ="/DocumentationEnFrancais">Voir plus</Link></button>
        </div>
        <div className="card">
          <h3>Responsive</h3>
          <hr className="separator-card" />
          <p>100% Adaptatif</p>
          <hr className="separator-card" />
          <p>Classe pour le responsive</p>
          <hr className="separator-card" />
          <button className="btn-card"><Link to ="/DocumentationEnFrancais">Voir plus</Link></button>
        </div>
      </div>
      <h4 className="frameuse-title">FrameUse</h4>
      <div className="about-fu">
        <p>FrameUse est un framework css qui à pour but d'aider les développeurs web / web mobile a concevoir leurs sites internet rapidement et efficacement. Notre framework comporte énormément de classe 
          css pour la personnalisation de élément html.
          Toutes les classes css sont répertorié dans un fichier css classique, nous avons mit en place des classes css pour la plus part des éléments css disposition sur nos IDE préféré.
          Il y'a des classes pour mettre un display, changer la position d'un élément, changer la taille de police, couleur de texte et j'en passe. Tout est renseigné dans la 
          documentation officielle disponible directement sur notre site web.
        </p>
        <h4 className="frameuse-title">Exemples</h4>
        <div className="screen-container">
        <div className="screen1">
            <img src={screen1} className="screen"/>
            <p>Pour cet exemple, nous avons mit un display flex et background-color gray sur notre parent, sur le titre, un font-size de 30px, un padding de 20px et une couleur rouge.
              Pour le texte, on a mit un margin de 20px, un font-size de 18px, et une couleur maganta.
            </p>
          </div>
          <div className="screen1">
            <img src={screen3} className="screen"/>
            <p>Pour cet exemple, nous avons crée une template de boutton, qui sera de couleur noir sur fond blanc, avec un léger border-radius.
            </p>
          </div>
        </div>
      </div>
      <div className="creator">
        <h4 className="frameuse-title">Createur</h4>
        <div className="creator-container">
          <div className="center">
            <img src={Florian} alt="" className="creator-pic" />
          </div>
          <p className="creator-name">Florian Llimos</p>
          <div className="center">
            <a href="https://florianllimos.netlify.app/" target="_blank" className="link-creator">Site personnel</a>
          </div>
        </div>
      </div>
    </div>
    
  )
}