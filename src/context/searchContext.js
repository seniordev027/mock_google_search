import { createContext, useContext, useState } from "react";

export const SearchContext = createContext({
  inputValue: "",
  searchData: [],
  setInputValue: () => {},
  setSearchData: () => {},
  voiceMode: false,
  setVoiceMode: () => {},
  backgrounds: [],
  background: {},
  setBackground: () => {},
});

export const SearchProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [voiceMode, setVoiceMode] = useState(false);

  const value = {
    inputValue,
    searchData,
    setInputValue,
    setSearchData,
    voiceMode,
    setVoiceMode,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
