import React from "react";
import EnglishHeader from "../../../Components/English/EnglishHeader/EnglishHeader";
import EnglishExempleContent from "../../../Components/English/EnglishExampleContent/EnglishExampleContent";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";
import Footer from "../../../Components/Footer/Footer";

export default function EnglishExample () {
  return (
    <div>
      <EnglishHeader />
      <BackgroundFixed />
      <EnglishExempleContent />
      <Footer />
    </div>
  )
}