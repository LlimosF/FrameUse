import React from "react";
import "../FrenchHomeContent/FrenchHomeContent.css";
import BackgroundFixed from "../../BackgroundFixed/BackgroundFixed";
import { Link } from "react-router-dom";

export default function FrenchHomeContent () {
  return (
    <div>
      <BackgroundFixed />
      <h2 className="first-title">Construisez très rapidement vos pages et le css grâce à ce Framework. </h2>
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
    </div>
    
  )
}