import { useContext, useEffect, useState, createContext } from "react";
import primaryLangData from "../pages/api/res_primaryLanguage";
import secondaryLangData from "../pages/api/res_secondaryLanguage";
import portfolioSharedData from "../pages/api/portfolio_shared_data";

const DataContext = createContext({});

export function useData() {
  return useContext(DataContext);
}

const DataProvider = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const sharedData = portfolioSharedData;
  const primaryLang = primaryLangData;
  const secondaryLang = secondaryLangData;
  const [currentLang, setCurrentLang] = useState(primaryLang);

  const setLang = (lang) => {
    window.localStorage.setItem("lang", lang);
    lang == "primary" && setCurrentLang(primaryLang);
    lang == "secondary" && setCurrentLang(secondaryLang);
  };

  useEffect(() => {
    const localLang = window.localStorage.getItem("lang");
    localLang == "primary" && setCurrentLang(primaryLang);
    localLang == "secondary" && setCurrentLang(secondaryLang);
    setIsMounted(true);
  }, [primaryLang, secondaryLang]);

  const value = {
    sharedData,
    currentLang,
    primaryLang,
    secondaryLang,
    setLang,
  };

  return (
    <DataContext.Provider value={value}>
      {isMounted && children}
    </DataContext.Provider>
  );
};

export default DataProvider;
