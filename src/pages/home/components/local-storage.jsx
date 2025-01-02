import React, { useState, useEffect } from "react";

const LocalStorageSync = () => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem("myValue") || "";
  });

  useEffect(() => {
    localStorage.setItem("myValue", value);
  }, [value]); // Syncs with localStorage whenever `value` changes

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Type and refresh the page"
    />
  );
};

export default LocalStorageSync;
