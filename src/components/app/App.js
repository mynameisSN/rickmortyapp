import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateFrame from "../create-frame/CreateFrame";
import "./App.scss";

const rickandmortyapi = "https://rickandmortyapi.com/api/character/?page=1";

const App = () => {
  const [posts, setPosts] = useState({});
  const [listItems, setlistItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("hi");
    setLoading(true);
    axios.get(rickandmortyapi, {}).then((response) => {
      console.log("my response ", response.data);
      setPosts(response.data);
      setlistItems(response.data.results);
      setLoading(false);
    });
  }, []);
  console.log("post ", posts);

  const search = (searchValue) => {
    console.log("my search ", searchValue);
    setLoading(true);
    setErrorMessage(null);
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=1&name=${searchValue}`,
        {}
      )
      .then((response) => {
        console.log("my response ", response.data);
        setPosts(response.data);
        setlistItems(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Not good man :( ", err.response.data.error);
        setErrorMessage(err.response.data.error);
        setLoading(false);
        setlistItems(null);
        setIsOpen(true);
      });
  };

  console.log("App before return = isOpen ", isOpen);
  return (
    <div>
      {posts && (
        <CreateFrame
          posts={posts}
          loading={loading}
          listItems={listItems}
          searchTerm={search}
          errorMessage={errorMessage}
          isOpen={isOpen}
          onClose={(e) => {
            setIsOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default App;
