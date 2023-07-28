import React from "react";
import Result from "./components/Result";
import Searchbar from "./components/Searchbar";
import Navbar from "./components/Navbar";

function Landing() {
  return (
    <>
      <div className="bg-gray-300  min-h-screen flex flex-col  items-center  ">
        <Navbar />
       
        <Searchbar />
        <Result />
      </div>
    </>
  );
}
export default Landing;
