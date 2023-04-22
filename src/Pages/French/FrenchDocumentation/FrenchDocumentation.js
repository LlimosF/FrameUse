import React from "react";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import FrenchDocumentationContent from "../../../Components/French/FrenchDocumentationContent/FrenchDocumentContent";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import Footer from "../../../Components/Footer/Footer";

export default function FrenchDocumentation () {
  return (
    <div>
      <FrenchHeader />
      <BackgroundFixed />
      <FrenchDocumentationContent />
      <Footer />
    </div>
  )
}