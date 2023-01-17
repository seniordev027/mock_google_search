import { Route, Routes } from "react-router-dom";

import { SearchProvider } from "context/searchContext";
import { VoiceModeWindow } from "components";
import { Home } from "pages/Home";
import { SearchResult } from "pages/SearchResult";
import { BackgroundProvider } from "context/backgroundContext";

function App() {
  return (
    <SearchProvider>
      <VoiceModeWindow />
      
      <BackgroundProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>
      </BackgroundProvider>
    </SearchProvider>
  );
}

export default App;
