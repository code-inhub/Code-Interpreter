import React, { useState } from 'react';
import ApiGithub from './ApiGithub';
import './App.css';
import OpenAI from './OpenAI';

function App() {
  const url = "https://github.com/code-inhub/Code-Interpreter";
  const[DATA, setDATA] = useState('');
  const [showComponentTwo, setShowComponentTwo] = useState(false);

  // const handleComponentOneComplete = () => {
  // };
  
  const handleData=(completeData)=>{
    setDATA(completeData)
    // setShowComponentTwo(true);
    console.log(DATA)
  }
  
  return (
    <>
      <ApiGithub repo_url={url} onData={handleData} />

      <h1> {DATA} </h1>

      {showComponentTwo && <OpenAI data={DATA} />}
    </>
  );
}

export default App;
