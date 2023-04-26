import React from "react";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import "../FrenchUtilisation/FrenchUtilisation.css";
import Footer from "../../../Components/Footer/Footer";
import FrenchUtilisationContent from "../../../Components/French/FrenchUtilisationContent/FrenchUtilisationContent";

export default function FrenchUtilisation () {
  return (
    <div>
      <BackgroundFixed />
      <FrenchHeader />
      <FrenchUtilisationContent />
      <Footer />
    </div>
  )
}