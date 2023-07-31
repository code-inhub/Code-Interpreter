import React from "react";
import { useAppContext } from "../Context/AppProvider";

function Result() {
const{result}=useAppContext();

  return (
    <div className="w-[1000px] rounded text-xl bg-white h-96 px-4 mt-8 overflow-y-auto">
      {result}
    
    </div>
  );
}

export default Result;
