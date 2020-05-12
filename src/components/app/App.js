import React, { useReducer, useEffect, useState } from "react";
import Search from "../search/Search";
import Cards from "../cards/Cards";
import Modal from "../modal/Modal";
import Sorting from "../sorting/Sorting";
import Filters from "../filters/Filters";
import ApplyFilter from "../apply-filter/ApplyFilter";

import axios from "axios";
import "./App.scss";

const API_URL = "https://rickandmortyapi.com/api/character/?page=1";

const initialState = {
  loading: true,
  // appData: {},
  listItems: [],
  errorMessage: null,
  isModalOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_ITEMS_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null,
        isModalOpen: false,
      };
    case "SEARCH_ITEMS_SUCCESS":
      return {
        ...state,
        loading: false,
        // appData: action.appPayload,
        listItems: action.payload,
      };
    case "SEARCH_ITEMS_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

// set array for dropdown
const orderList = ["Ascending", "Descending"];

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isOpen, setIsOpen] = useState(false);
  const [sortOrder, SortDropdown] = Sorting("", "", orderList);

  useEffect(() => {
    axios.get(API_URL, {}).then((jsonResponse) => {
      dispatch({
        type: "SEARCH_ITEMS_SUCCESS",
        payload: jsonResponse.data.results,
      });
    });
  }, []);

  const search = (term) => {
    console.log(`${API_URL}&name=${term}`);
    dispatch({
      type: "SEARCH_ITEMS_REQUEST",
    });
    axios
      .get(`${API_URL}&name=${term}`, {})
      .then((jsonResponse) => {
        dispatch({
          type: "SEARCH_ITEMS_SUCCESS",
          payload: jsonResponse.data.results,
        });
      })
      .catch((err) => {
        console.log("error ", err.response.data.error);
        dispatch({
          type: "SEARCH_ITEMS_FAILURE",
          error: err.response.data.error,
        });
        setIsOpen(true);
      });
  };

  const { listItems, errorMessage, loading } = state;

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
            <Search search={search} isOpen={isOpen} />
          </div>
          <div className="sorting ui">
            <div className="ui dropdown">
              <SortDropdown />
            </div>
          </div>
        </div>

        <div className="album">
          {loading && !errorMessage ? (
            <div className="ui segment loading">
              <div className="ui active dimmer">
                <div className="ui massive text loader">Loading</div>
              </div>
            </div>
          ) : errorMessage ? (
            <Modal
              errorMessage={errorMessage}
              isOpen={isOpen}
              onClose={(e) => {
                setIsOpen(false);
              }}
            />
          ) : (
            <Cards listItems={listItems} sortItems={sortOrder} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
