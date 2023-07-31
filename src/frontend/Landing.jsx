import React  from "react";
import Result from "./components/Result";
import Searchbar from "./components/Searchbar";
import { useAppContext } from "./Context/AppProvider";

function Landing() {;
 const {summary}= useAppContext();

  return (
    <>
      <div className="bg-gray-300 min-h-screen flex flex-col items-center">
        {/* <Navbar /> */}
        <header className="text-3xl mx-">Code Interpreter</header>
        
          <Searchbar  />
        

        {summary && <Result />}
      </div>
    </>
  );
}
export default Landing;
