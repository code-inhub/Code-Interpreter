import React, { useEffect, useState } from "react";
import "./App.css";
import OpenAI from "./OpenAI";
import { api } from "./api";
import Landing from "./frontend/Landing.jsx";

function App() {
  const url = "https://github.com/code-inhub/Code-Interpreter";
  const [DATA, setDATA] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await api(url);
        // console.log(res);
        setDATA(res);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <>
      {/* <h1>Code Interpreter</h1> */}

      <Landing />

      {/* {DATA && DATA.length && <OpenAI data={DATA} />} */}
    </>
  );
}

export default App;
