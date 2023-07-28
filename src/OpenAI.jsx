import React, { useEffect, useState } from "react";
// import {config} from  "dotenv";
// [Describe the issue or problem you are experiencing with the code. Be as specific as possible.]"
// config();
// import dotenv from "dotenv";
// dotenv.config();

const api_key ="" ;
import Landing from "./frontend/Landing.jsx";
import { Configuration, OpenAIApi } from "openai";

const issue = "Tell me the error if any in the code is present and its summary";

const OpenAI = ({ data }) => {
  const [result, setResult] = useState("");
  const configuration = new Configuration({
    apiKey: api_key,
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
              "You are a code correction, completition, and explaining assistant.",
          },
          {
            role: "user",
            content: `Code: ${data}`,
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
        console.log(response.data.choices[0].message.content);
        // console.log(chat_completion);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>{result && <Landing />}</div>;
};
export default OpenAI;
