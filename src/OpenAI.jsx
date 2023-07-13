import React, { useState } from "react";
// import {config} from  "dotenv";
// [Describe the issue or problem you are experiencing with the code. Be as specific as possible.]"
// config();

// const api_key = process.env.api_key;


import { Configuration, OpenAIApi } from "openai";

const issue = "summarize this code for me "
const OpenAI= ({ data })=> {
    
  const [result,setResult] = useState("");
  const configuration = new Configuration({
    apiKey: "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",
  });

    const openai = new OpenAIApi(configuration);
    
    // const chat_completion = 
    // await
     openai.createChatCompletion({
         model: "gpt-3.5-turbo",
         messages: [
           { role: "system", content: "You are a code correction, completition, and explaining assistant. If their was some problem provide the corrected code" },
           {
             role: "user",
             content:`Code: ${data}`
           },
           {
             role: "user",
             content:
               `Problem Description: ${issue}`,
           },
         ],
       })
       .then((response) => {
        setResult( response.data.choices[0].message.content);
         console.log(response.data.choices[0].message.content );
         // console.log(chat_completion);
       }).catch((err)=>{ console.log(err);})  ;

  return <div>
    {/* {data} <br/> */}
    {/* {chat_completion} */}
    {result}
    </div>;
}
export default OpenAI;
