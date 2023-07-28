import React from "react";
import Result from "./components/Result";
import Searchbar from "./components/Searchbar";

function Landing() {
  return (
    <>
      <div className="bg-gray-300  min-h-screen flex flex-col  items-center  ">
        {/* <Navbar /> */}
        <header className=" text-3xl mx-">Code Interpreter</header>

        <Searchbar />
        <Result />
      </div>
    </>
  );
}
export default Landing;
