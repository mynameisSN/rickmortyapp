import React from "react";

import Sorting from "../sorting/Sorting";
import Filters from "../filters/Filters";
import Cards from "../cards/Cards";
import Search from "../search/Search";

import ApplyFilter from "../apply-filter/ApplyFilter";
import Modal from "../modal/Modal";

// set array for dropdown
const orderList = ["Ascending", "Descending"];

const onTermSubmit = (term) => {
  console.log("Search term ", term);
};

const CreateFrame = (props) => {
  const {
    loading,
    posts,
    listItems,
    searchTerm,
    errorMessage,
    isOpen,
    onClose,
  } = props;
  console.log("CreateFrame render ", props);
  console.log("CreateFrame render isOpen ", isOpen);
  // const {listItems} = props;

  // console.log ('listItems  ', listItems);
  const [sortOrder, SortDropdown] = Sorting("", "", orderList);
  //   const [results, setCount] = useState (data);
  // dataItem = { setCount(results) }
  // console.log('dataItem ', setCount(results));
  //   console.log ('data results ', data && data.results);

  if (loading) {
    return (
      <div className="ui segment loading">
        <div className="ui active dimmer">
          <div className="ui massive text loader">Loading</div>
        </div>
      </div>
    );
  }

  return (
    <div className="main">
      <div className="filter left-col ui segment">
        <Filters />
      </div>
      <div className="right-col">
        <div className="selected-filter ui segment">
          <ApplyFilter />
        </div>
        <div className="search">
          <div className="search-bar ui">
            <Search onFormSubmit={onTermSubmit} search={searchTerm} />
          </div>
          <div className="sorting ui">
            <div className="ui dropdown">
              <SortDropdown />
            </div>
          </div>
        </div>

        <div className="album">
          {isOpen && (
            <Modal
              errorMessage={errorMessage}
              isOpen={isOpen}
              onClose={onClose}
            />
          )}
          {listItems && (
            <Cards listItems={listItems} posts={posts} loading={loading} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateFrame;
