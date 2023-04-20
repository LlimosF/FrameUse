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
      </Routes>
    </div>
  );
}

export default App;
