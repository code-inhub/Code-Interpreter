import React, { useEffect } from "react";
import { useAppContext } from "./frontend/Context/AppProvider.js";
// import Landing from "./frontend/Landing.jsx";
import { Configuration, OpenAIApi } from "openai";

// [Describe the issue or problem you are experiencing with the code. Be as specific as possible.]"


const OpenAI = () => {
 const val= process.env.REACT_APP_API_KEY;
  const API_KEY ="sk-"+ val;

  const { setResult, result, DATA, ClickButton, issue } = useAppContext();
  const configuration = new Configuration({
    organization: "org-G9nPL7iiS4o78lnLUvQDqtT1",
    apiKey: API_KEY,
  });
  console.log(API_KEY);
  const openai = new OpenAIApi(configuration);

  useEffect(() => {
    openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a code correction, completition, and explaining assistant. You need to provide the user appropiate and correct result after understanding its code and if neede provide the necessary code. You will be provided with all the file codes and their paths. Also you have to send all the response at once.",
          },
          {
            role: "user",
            content: `Code: ${DATA}`,
          },
          {
            role: "user",
            content: `Problem Description: ${issue}`,
          },
        ],
      })
      .then((response) => {
        setResult(response.data.choices[0].message.content);
        console.log(response.data.choices[0].message.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ClickButton]);
  // return <div>{result && <Landing />}</div>;
};
export default OpenAI;
