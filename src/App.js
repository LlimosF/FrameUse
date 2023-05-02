import './App.css';
import {Routes, Route} from "react-router-dom";

import FrenchHome from './Pages/French/FrenchHome/FrenchHome';
import FrenchDocumentation from './Pages/French/FrenchDocumentation/FrenchDocumentation';
import FrenchExemples from './Pages/French/FrenchExemples/FrenchExemples';
import FrenchUtilisation from './Pages/French/FrenchUtilisation/FrenchUtilisation';

import EnglishHome from './Pages/English/EnglishHome/EnglishHome';
import EnglishDocumentation from './Pages/English/EnglishDocumentation/EnglishDocumentation';
import EnglishExample from './Pages/English/EnglishExample/EnglishExample';
import EnglishUse from './Pages/English/EnglishUse/EnglishUse';

import FrenchPadding from './Pages/French/FrenchPadding/FrenchPadding';
import FrenchMargin from './Pages/French/FrenchMargin/FrenchMargin';
import FrenchColor from './Pages/French/FrenchColor/FrenchColor';
import FrenchBgColor from './Pages/French/FrenchBgColor/FrenchBgColor';
import FrenchDisplay from './Pages/French/FrenchDisplay/FrenchDisplay';
import FrenchPosition from './Pages/French/FrenchPosition/FrenchPosition';
import FrenchFontWeight from './Pages/French/FrenchFontWeight/FrenchFontWeight';
import FrenchJustifySelf from './Pages/French/FrenchJustifySelf/FrenchJustifySelf';
import FrenchJustifyItems from './Pages/French/FrenchJustifyItems/FrenchJustifyItems';
import FrenchTextDecoration from './Pages/French/FrenchTextDecoration/FrenchTextDecoration';
import FrenchTextAlign from './Pages/French/FrenchTextAlign/FrenchTextAlign';
import FrenchJustifyContent from './Pages/French/FrenchJustifyContent/FrenchJustifyContent';
import FrenchTextTransform from './Pages/French/FrenchTextTransform/FrenchTextTransform';
import FrenchGrid from './Pages/French/FrenchGrid/FrenchGrid';
import FrenchBorderRadius from './Pages/French/FrenchBorderRadius/FrenchBorderRadius';
import FrenchWidth from './Pages/French/FrenchWidth/FrenchWidth';
import FrenchHeight from './Pages/French/FrenchHeight/FrenchHeight';
import FrenchFontSize from './Pages/French/FrenchFontSize/FrenchFontSize';

import EnglishPadding from './Pages/English/EnglishPadding/EnglishPadding';
import EnglishMargin from './Pages/English/EnglishMargin/EnglishMargin';
import EnglishBgColor from './Pages/English/EnglishBgColor/EnglishBgColor';
import EnglishColor from './Pages/English/EnglishColor/EnglishColor';
import EnglishDisplay from './Pages/English/EnglishDisplay/EnglishDisplay';
import EnglishPosition from './Pages/English/EnglishPosition/EnglishPosition';
import EnglishTextAlign from './Pages/English/EnglishTextAlign/EnglishTextAlign';
import EnglishFontWeight from './Pages/English/EnglishFontWeight/EnglishFontWeight';
import EnglishJustifyContent from './Pages/English/EnglishJustifyContent/EnglishJustifyContent';
import EnglishJustifySelf from './Pages/English/EnglishJustifySelf/EnglishJustifySelf';
import EnglishJustifyItems from './Pages/English/EnglishJustifyItems/EnglishJustifyItems';
import EnglishTextDecoration from './Pages/English/EnglishTextDecoration/EnglishTextDecoration';
import EnglishTextTransform from './Pages/English/EnglishTextTransform/EnglishTextTransform';
import EnglishGrid from './Pages/English/EnglishGrid/EnglishGrid';
import EnglishBorderRadius from './Pages/English/EnglishBorderRadius/EnglishBorderRadius';
import EnglishWidth from './Pages/English/EnglishWidth/EnglishWidth';
import EnglishHeight from './Pages/English/EnglishHeight/EnglishHeight';
import EnglishFontSize from './Pages/English/EnglishFontSize/EnglishFontSize';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FrenchHome />} />
        <Route path="/DocumentationEnFrancais" element={<FrenchDocumentation />} />
        <Route path="/ExemplesEnFrancais" element={<FrenchExemples />} />
        <Route path="/UtilisationEnFrancais" element={<FrenchUtilisation />} />

        <Route path="/HomeEng" element={<EnglishHome />} />
        <Route path="/DocumentationInEnglish" element={<EnglishDocumentation />} />
        <Route path="/ExampleInEnglish" element={<EnglishExample />} />
        <Route path="/UseInEnglish" element={<EnglishUse />} />

        <Route path="/PaddingEnFrancais" element={<FrenchPadding />} />
        <Route path="/MarginEnFrancais" element={<FrenchMargin />} />
        <Route path="/ColorEnFrancais" element={<FrenchColor />} />
        <Route path="/BackgroundColorEnFrancais" element={<FrenchBgColor />} />
        <Route path="/DisplayEnFrancais" element={<FrenchDisplay />} />
        <Route path="/PositionEnFrancais" element={<FrenchPosition />} />
        <Route path="/FontWeightEnFrancais" element={<FrenchFontWeight />} />
        <Route path="/JustifyContentEnFrancais" element={<FrenchJustifyContent />} />
        <Route path="/JustifySelfEnFrancais" element={<FrenchJustifySelf />} />
        <Route path="/JustifyItemsEnFrancais" element={<FrenchJustifyItems />} />
        <Route path="/TextTransformEnFrancais" element={<FrenchTextTransform />} />
        <Route path="/TextDecorationEnFrancais" element={<FrenchTextDecoration />} />
        <Route path="/TextAlignEnFrancais" element={<FrenchTextAlign />} />
        <Route path="/GridEnFrancais" element={<FrenchGrid />} />
        <Route path="/BorderRadiusEnFrancais" element={<FrenchBorderRadius />} />
        <Route path="/WidthEnFrancais" element={<FrenchWidth />} />
        <Route path="/HeightEnFrancais" element={<FrenchHeight />} />
        <Route path="/FontSizeEnFrancais" element={<FrenchFontSize />} />

        <Route path="/PaddingInEnglish" element={<EnglishPadding />} />
        <Route path="/MarginInEnglish" element={<EnglishMargin />} />
        <Route path="/ColorInEnglish" element={<EnglishColor />} />
        <Route path="/BackgroundColorInEnglish" element={<EnglishBgColor />} />
        <Route path="/DisplayInEnglish" element={<EnglishDisplay />} />
        <Route path="/PositionInEnglish" element={<EnglishPosition />} />
        <Route path="/TextAlignInEnglish" element={<EnglishTextAlign />} />
        <Route path="/FontWeightInEnglish" element={<EnglishFontWeight />} />
        <Route path="/JustifyContentInEnglish" element={<EnglishJustifyContent />} />
        <Route path="/JustifySelfInEnglish" element={<EnglishJustifySelf />} />
        <Route path="/JustifyItemsInEnglish" element={<EnglishJustifyItems />} />
        <Route path="/TextTransformInEnglish" element={<EnglishTextTransform />} />
        <Route path="/TextDecorationInEnglish" element={<EnglishTextDecoration />} />
        <Route path="/GridInEnglish" element={<EnglishGrid />} />
        <Route path="/BorderRadiusInEnglish" element={<EnglishBorderRadius />} />
        <Route path="/WidthInEnglish" element={<EnglishWidth />} />
        <Route path="/HeightInEnglish" element={<EnglishHeight />} />
        <Route path="/FontSizeInEnglish" element={<EnglishFontSize />} />
      </Routes>
    </div>
  );
}

export default App;
