import React from "react";

function Searchbar() {
  return (
    <>
      <div className=" ">
        <input
          type="url"
          className="border rounded-2xl w-[800px] mt-24 py-2 text-green-950  "
          placeholder="enter repo link"
        />
        <div className=" flex justi">
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md mr-2">
            Button 1
          </button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md">
            Button 2
          </button>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
