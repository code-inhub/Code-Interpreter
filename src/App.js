import React, { useState } from 'react';
import ApiGithub from './ApiGithub';
import './App.css';
import OpenAI from './OpenAI';

function App() {
  const url = "https://github.com/code-inhub/HackerMan";
  const[DATA, setDATA] = useState('');
  const [showComponentTwo, setShowComponentTwo] = useState(false);

  // const handleComponentOneComplete = () => {
  // };
  
  const handleData=(completeData)=>{
    setDATA(completeData)
    setShowComponentTwo(true);
  }
  console.log(DATA)
  
  return (
    <>
    
    <ApiGithub repo_url={url} onData={handleData}   />
     {/* {showComponentTwo && <p>{ DATA }</p> }  */}
    
     {showComponentTwo && <OpenAI data= {DATA} /> }
    </>
  );
}

export default App;
