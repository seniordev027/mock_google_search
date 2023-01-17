import { createContext, useContext, useState } from "react";

import { backgroundImages } from "data/backgroundImages";

export const BackgroundContext = createContext({
  backgrounds: [],
  currentBackground: {},
  setBackground: () => {},
});

export const BackgroundProvider = ({ children }) => {
  const [ backgrounds ] = useState(backgroundImages);
  const [ currentBackground, setCurrentBackground ] = useState(
    backgroundImages[0]
  );

  const value = {
    backgrounds,
    currentBackground,
    setCurrentBackground,
  };

  return (
    <BackgroundContext.Provider value={value}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackgroundContext = () => useContext(BackgroundContext);
