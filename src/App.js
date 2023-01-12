import { Route, Routes } from "react-router-dom";

import { SearchProvider } from "./context/context";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <SearchProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>
    </SearchProvider>
  );
}

export default App;
