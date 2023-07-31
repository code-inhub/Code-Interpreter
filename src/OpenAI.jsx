import React, { useEffect } from "react";
import { useAppContext } from "./frontend/Context/AppProvider.js";
import Landing from "./frontend/Landing.jsx";
import { Configuration, OpenAIApi } from "openai";
// import {config} from  "dotenv";
// [Describe the issue or problem you are experiencing with the code. Be as specific as possible.]"
// config();
// import dotenv from "dotenv";
// dotenv.config();

// const api_key = "";


const OpenAI = () => {
  const { setResult, result, DATA ,ClickButton,issue} = useAppContext();
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  // const chat_completion =
  // await
  useEffect(() => {
    openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a code correction, completition, and explaining assistant. You need to provide the user appropiate and correct result after understanding its code and if neede provide the necessary code. You will be provided with all the file codes and their paths.",
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
  return <div>{result && <Landing />}</div>;
};
export default OpenAI;
