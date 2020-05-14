import React from "react";

const ApplyFilter = (props) => {
  const { cate, select } = props.filterCategory;
  console.log("filterCategory1 ", props);
  let content = (
    <div className="ui right labeled icon button">
      {cate}
      <i className="right window close icon" />
    </div>
  );
  if (!select) {
    content = null;
  }

  return (
    <div className="selected-item-wrapper">
      <div className="ui sizer vertical segment">
        <div className="ui huge header">Selected Filters</div>
      </div>
      {content}
    </div>
  );
};

export default ApplyFilter;
