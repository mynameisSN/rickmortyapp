import React from "react";

const ApplyFilter = () => {
  return (
    <div className="selected-item-wrapper">
      <div className="ui sizer vertical segment">
        <div className="ui huge header">Selected Filters</div>
      </div>
      <div className="ui right labeled icon button">
        Human
        <i className="right window close icon" />
      </div>
    </div>
  );
};

export default ApplyFilter;
