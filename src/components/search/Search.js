import React, { useState } from "react";

const Search = (props) => {
  console.log("Search comp ", props);

  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };
  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
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
          {/* <Button /> */}
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
