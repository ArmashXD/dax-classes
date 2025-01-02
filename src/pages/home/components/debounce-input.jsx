import React, { useState, useEffect } from "react";

const DebouncedInput = () => {
  const [input, setInput] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(input);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [input]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};

export default DebouncedInput;
