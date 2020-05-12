import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const callSearchFunction = (e) => {
    console.log("ee ", e);
    e.preventDefault();
    props.search(searchValue);
  };

  return (
    <div className="search-form">
      <form className="ui form">
        <div className="field">
          <label>Search by Name</label>
          <input
            type="text"
            className="search-field"
            onChange={handleSearchInputChanges}
            value={searchValue}
          />
          <div className="button-wrapper">
            <input
              className="ui primary button"
              onClick={callSearchFunction}
              type="submit"
              value="SEARCH"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Search;
