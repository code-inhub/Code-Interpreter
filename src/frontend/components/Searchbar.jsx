import React from "react";

function Searchbar() {
  return (
    <>
      <div className=" ">
        <input
          type="url"
          className="border rounded-2xl w-[800px] mt-32 py-2 text-green-950 m-16 "
          placeholder="enter repo link"
        />
      </div>
    </>
  );
}

export default Searchbar;
