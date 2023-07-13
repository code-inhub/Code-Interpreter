import React, { useEffect, useState } from "react";

function ApiGithub({ repo_url, onData }) {
  const [url, setUrl] = useState("");
  let DATA = "";

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
            console.log(DATA);
            console.log("DATA");
            onData(DATA);
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

    const filePromises = files.map((item) => {
      if (item.type === "file") {
        const dataUrl = item.download_url;
        return fetchFileData(dataUrl);
      } else if (item.type === "dir") {
        const subRepoUrl = item.url;
        return fetchDataForDirectory(subRepoUrl);
      }
      return null;
    });

    const fileData = await Promise.all(filePromises);

    const completeData = fileData.join("");
    DATA += completeData;
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


