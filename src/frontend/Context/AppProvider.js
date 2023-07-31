import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {

  
  const [result, setResult] = useState("");
  const [summary,setSummary]=useState(false);
  const [url, setUrl] = useState();
  const [DATA, setData] = useState("");
  const [ClickButton, setClickButton] = useState(false);
 const [issue,setIssue] = useState("Give summary of the code provide.");

  return (
    <AppContext.Provider
      value={{
        url,
        setUrl,
        DATA,
        setData,
        summary,
        setSummary,
        result,
        setResult,
        ClickButton,
        setClickButton,
        issue,
        setIssue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
  

}
