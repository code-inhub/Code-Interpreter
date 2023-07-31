import React from "react";
import { useState } from "react";
import { useAppContext } from "../Context/AppProvider";

function Searchbar() {
  const [error, setError] = useState(false);
  const {
    setUrl,
    setSummary,
    setResult,
    setClickButton,
    ClickButton,
    setIssue,
  } = useAppContext();

  const Summary = () => {
    const url = document.querySelector("input").value;
    setSummary(true);
    setError(false);
    setUrl(url);
    setResult("");
    setClickButton(!ClickButton);
  };

  const Error = () => {
    setSummary(true);
    setError(true);
  };

  const ErrorGO = () => {
    const issue = document.querySelector("textarea").value;
     setIssue(issue);
     setResult("");
    setClickButton(!ClickButton);
    }

  return (
    <>
      <div className=" ">
        <input
          type="url"
          name="url"
          className="border rounded-2xl w-[800px] mt-20 py-2 text-green-950  "
          placeholder="enter repo link"
        />
        <div className="flex justify-center mb-8">
          <span className="mt-6">
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-md mr-8"
              onClick={Summary}
            >
              SUMMARY
            </button>
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-md "
              onClick={Error}
            >
              ERROR
            </button>
          </span>

          <div className="mt-6 relative ">
            <div className="absolute ml-16 mt-3  ">
              {error && (
                <div>
                  <textarea
                    name=""
                    id="" 
                    cols="40"
                    rows="2"
                    placeholder="enter you problem"
                    className="border rounded-xl"
                  ></textarea>

                  <button className="bg-green-400 text-black px-4  ml-72 rounded-md " onClick={ErrorGO} > GO</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
