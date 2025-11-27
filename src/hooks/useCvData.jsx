import { useState } from "react";
import cvData from "../data/cvData";

function useCvData() {
  const [currentCvData, setCvData] = useState(cvData);

  function handleCvDataChange(path, value) {
    setCvData((prev) => {
      const cvClone = structuredClone(prev);
      setByPath(cvClone, path, value);
      return cvClone;
    });
  }

  function setByPath(obj, keys, value) {
    let current = obj;

    keys.forEach((key, index) => {
      if (index === keys.length - 1) {
        current[key] = value;
      } else {
        if (!current[key]) current[key] = {};
        current = current[key];
      }
    });
  }

  return { currentCvData, handleCvDataChange };
}

export default useCvData;
