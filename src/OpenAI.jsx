import React, { useState } from "react";
// import {config} from  "dotenv";
// [Describe the issue or problem you are experiencing with the code. Be as specific as possible.]"
// config();

// const api_key = process.env.api_key;

import { Configuration, OpenAIApi } from "openai";

const issue = "Tell me the error if any in the code is present and its summary";
const OpenAI = ({ data }) => {
  const [result, setResult] = useState("");
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  // const chat_completion =
  // await
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

  return (
    <div>
      {/* {data} <br/> */}
      {/* {chat_completion} */}
      {result}
    </div>
  );
};
export default OpenAI;
