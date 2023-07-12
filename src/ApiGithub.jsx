import React, { useEffect, useState } from "react";

function ApiGithub({ repo_url, onData }) {
  const [DATA, setDATA] = useState("");
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   // Simulating async operation
  //   const timer = setTimeout(() => {
  //     console.log("Component One executed");
  //     onComplete();
  //   }, 5000);

  //   // Cleanup function
  //   return () => clearTimeout(timer);
  // }, [onComplete]);

  useEffect(() => {
    const pattern = /github\.com\/([\w-]+)\/([\w-]+)/;
    const match = repo_url.match(pattern);

    if (match) {
      const username = match[1];
      const repo = match[2];
      setUrl(`https://api.github.com/repos/${username}/${repo}/contents`);
    }
  }, [repo_url]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (url) {
          const response = await fetch(url);
          if (response.ok) {
            const jsonData = await response.json();
            setData(jsonData);
            processFiles(jsonData);
          } else {
            throw new Error("Error fetching data from the API.");
          }
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [url]);

  useEffect(() => {
    setTimeout(() => {
      onData(DATA);
    }, 5000);
  }, [DATA]);

  const processFiles = async (files) => {
    const excludedExtensions = [
      "jpg",
      "jpeg",
      "png",
      "gfg",
      "gif",
      "ico",
      "svg",
      "md",
    ];

    for (const item of files) {
      const fileExtension = item.name.split(".").pop().toLowerCase();

      if (
        item.name !== ".gitignore" &&
        item.name !== "package-lock.json" &&
        !excludedExtensions.includes(fileExtension)
      ) {
        if (item.type === "file") {
          const data_url = item.download_url;
          try {
            const data_file = await fetch(data_url).then((res) => res.text());
            setDATA(
              (prevData) =>
                prevData +
                `${" "} File path : ${item.path} ` +
                "   " +
                data_file
            );
            console.log(DATA);
          } catch (err) {
            console.log(err);
          }
        } else if (item.type === "dir") {
          const subRepoUrl = item.url;
          fetchDataForDirectory(subRepoUrl);
          //  await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }
    }
    // console.log(DATA);
    // onData(setDATA);
  };

  const fetchDataForDirectory = async (directoryUrl) => {
    try {
      const response = await fetch(directoryUrl);
      if (response.ok) {
        const jsonData = await response.json();
        processFiles(jsonData);
      } else {
        throw new Error("Error fetching data from the API.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return;
}

export default ApiGithub;
