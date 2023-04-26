import React from "react";
import EnglishHeader from "../../../Components/English/EnglishHeader/EnglishHeader";
import EnglishUseContent from "../../../Components/English/EnglishUseContent/EnglishUseContent";
import Footer from "../../../Components/Footer/Footer";
import BackgroundFixed from "../../../Components/BackgroundFixed/BackgroundFixed";

export default function EnglishUse () {
  return (
    <div>
      <EnglishHeader />
      <BackgroundFixed />
      <EnglishUseContent />
      <Footer />
    </div>
  )
}