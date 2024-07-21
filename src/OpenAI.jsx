import React, { useEffect } from "react";
import { useAppContext } from "./frontend/Context/AppProvider.js";
// import Landing from "./frontend/Landing.jsx";
import { Configuration, OpenAIApi } from "openai";

const API_KEY = process.env.API_KEY;

const configuration = new Configuration({
  apiKey: API_KEY,
});
const openai = new OpenAIApi(configuration);


const OpenAIResult = () => {
  const { setResult, result, DATA, ClickButton, issue } = useAppContext();
  // console.log(API_KEY); 

  useEffect(() => {
    openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a code correction, completition, and explaining assistant. You need to provide the user appropiate and correct result after understanding its code and if neede provide the necessary code. You will be provided with all the file codes and their paths. Also you have to send all the response at once.",
          },
          {
            role: "user",
            content: `Problem Description: ${issue}`,
          },
          {
            role: "user",
            content: `Code: ${DATA}`,
          },
        ],
      })
      .then((response) => {
        console.log(response);
        setResult(response.data.choices[0].message.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ClickButton]);
};
export default OpenAIResult;
