import React from "react";

const Input = ({ placeholer = "", className }) => {
  const [input, setInput] = React.useState("");

  return (
    <>
      <input
        placeholder={placeholer}
        className={className}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
};

export default Input;
