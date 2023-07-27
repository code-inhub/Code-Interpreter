import React, { useEffect, useState } from "react";

function ApiGithub({ repo_url, onData }) {
  const [url, setUrl] = useState("");
  const [DATA, setDATA] = useState("");

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
            processFiles(jsonData);
            onData(DATA);
            console.log("try data");
            console.log(DATA);
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

  const processFiles = async (files) => {
    const fetchFileData = async (dataUrl) => {
      try {
        const response = await fetch(dataUrl);
        if (response.ok) {
          const data = await response.text();
          return data;
        } else {
          throw new Error("Error fetching data from the API.");
        }
      } catch (err) {
        console.log(err);
      }
    };

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
          const dataUrl = item.download_url;
          try {
            const data = await fetchFileData(dataUrl);
            setDATA(
              (prevData) =>
                prevData + `${" "} File path : ${item.path} ` + "   " + data
            );
            // console.log(DATA);
          } catch (err) {
            console.log(err);
          }
        } else if (item.type === "dir") {
          const subRepoUrl = item.url;
          await fetchDataForDirectory(subRepoUrl);
        }
      }
    }
  };

  const fetchDataForDirectory = async (directoryUrl) => {
    try {
      const response = await fetch(directoryUrl);
      if (response.ok) {
        const jsonData = await response.json();
        await processFiles(jsonData);
      } else {
        throw new Error("Error fetching data from the API.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return null;
}

export default ApiGithub;
