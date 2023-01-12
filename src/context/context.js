import { createContext, useContext, useState } from "react";

export const SearchContext = createContext({
  searchValue: "",
  setSearchValue: () => {},
});

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const value = {
    searchValue,
    setSearchValue,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearchContext = () => useContext(SearchContext);
