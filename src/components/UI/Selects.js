import React from "react";

const Selects = ({ options, defOpt = "def", ...props }) => {
  return (
    // (el) => {<option className="select__opt">{el}</option>}
    <select {...props} className="select" defaultValue={defOpt}>
      <option key={0} className="select__opt" disabled value={defOpt}>
        {defOpt}
      </option>
      {options.map((el) => {
        return (
          <option key={el} className="select__opt">
            {el}
          </option>
        );
      })}
    </select>
  );
};

export default Selects;
