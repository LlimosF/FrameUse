import React from "react";
import FrenchHeader from "../../../Components/French/FrenchHeader/FrenchHeader";
import FrenchDocumentationContent from "../../../Components/French/FrenchDocumentationContent/FrenchDocumentContent";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";

export default function FrenchDocumentation () {
  return (
    <div>
      <FrenchHeader />
      <BackgroundFixed />
      <FrenchDocumentationContent />
    </div>
  )
}