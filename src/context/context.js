import { createContext, useContext, useState } from "react";

export const SearchContext = createContext({
  inputValue: "",
  searchData: [],
  setInputValue: () => {},
  setSearchData: () => {},
  isModal: false,
  setIsModal: () => {},
});

export const SearchProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [isModal, setIsModal] = useState(false);

  const value = {
    inputValue,
    searchData,
    setInputValue,
    setSearchData,
    isModal,
    setIsModal,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
