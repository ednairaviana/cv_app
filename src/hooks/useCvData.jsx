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

  function handleAddFieldsetClone(path) {
    setCvData((prev) => {
      const cvClone = structuredClone(prev);
      const currentArray = path.reduce((acc, key) => acc?.[key], cvClone);

      const newItem = {
        id: crypto.randomUUID(),
        fieldID: crypto.randomUUID(),
        ...currentArray?.[0],
      };

      currentArray.push(newItem);
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

  return { currentCvData, handleCvDataChange, handleAddFieldsetClone };
}

export default useCvData;
