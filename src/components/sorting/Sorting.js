import React, { useState } from "react";

const Sorting = (label, defaultstate, options) => {
  const [state, setState] = useState(defaultstate);

  const dropDownMaker = () => (
    <label htmlFor={label} className="default text">
      {label}

      <select
        id={label}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={!options.length}
        className="ui search selection dropdown"
      >
        <option className="item">Sort by ID</option>
        {options.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </label>
  );

  return [state, dropDownMaker, setState];
};

export default Sorting;
