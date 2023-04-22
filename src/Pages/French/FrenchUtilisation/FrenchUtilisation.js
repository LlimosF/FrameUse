import React from "react";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import "../FrenchUtilisation/FrenchUtilisation.css";
import Footer from "../../../Components/Footer/Footer";

export default function FrenchUtilisation () {
  return (
    <div>
      <BackgroundFixed />
      <FrenchHeader />
      <h2 className="title-use">Comment utiliser ?</h2>
      <Footer />
    </div>
  )
}