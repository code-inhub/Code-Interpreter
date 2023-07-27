import React, { useEffect, useState } from "react";
import "./App.css";
import OpenAI from "./OpenAI";
import { api } from "./api";

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
return <>{DATA && DATA.length && <OpenAI data={DATA} />}</>;
}

export default App;
