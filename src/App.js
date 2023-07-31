import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import OpenAI from "./OpenAI";
import { api } from "./api";
import Landing from "./frontend/Landing.jsx";
import { useAppContext } from "./frontend/Context/AppProvider";

function App() {
  
  const API_KEY = process.env.REACT_APP_API_KEY;
  const { url, setData, DATA, ClickButton } = useAppContext();
  // const url = "https://github.com/code-inhub/Code-Interpreter";

  useEffect(() => {
    (async () => {
      try {
        console.log("getting url in effet");
        console.log(url);
        console.log(API_KEY);
        const res = await api(url);
        // console.log(res);
        setData(res);
        console.log(ClickButton);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [ClickButton]);
  return (
    <>
      <Landing />

      {DATA && DATA.length && <OpenAI />}
    </>
  );
}

export default App;
