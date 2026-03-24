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

  function handleCloneDataChange(path, cloneId, fieldId, value) {
    setCvData((prev) => {
      const cvClone = structuredClone(prev);
      const currentArray = path.reduce((acc, key) => acc?.[key], cvClone);
      const item = currentArray.find((item) => item.id === cloneId);
      item[fieldId] = value;

      return cvClone;
    });
  }

  function handleRemoveFieldsetClone(path, id) {
    setCvData((prev) => {
      const cvClone = structuredClone(prev);
      const currentArray = path.reduce((acc, key) => acc?.[key], cvClone);
      const filtered = currentArray.filter((item) => item.id !== id);
      setByPath(cvClone, path, filtered);
      return cvClone;
    });
  }

  function handleAddFieldsetClone(path) {
    setCvData((prev) => {
      const cvClone = structuredClone(prev);
      const currentArray = path.reduce((acc, key) => acc?.[key], cvClone);

      const newItem = {
        id: crypto.randomUUID(),
        title: "Untitled",
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

  return {
    currentCvData,
    handleCvDataChange,
    handleAddFieldsetClone,
    handleRemoveFieldsetClone,
    handleCloneDataChange,
  };
}

export default useCvData;
