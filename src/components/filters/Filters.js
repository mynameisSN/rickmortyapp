import React, { useState, useEffect } from "react";

const Filters = (props) => {
  const [speciesState, setSpeciesState] = useState([]);
  const [genderState, setGenderState] = useState([]);

  // when componet will load first time. it will load this

  useEffect(() => {
    let speciesState = [
      { id: "1", category: "species", name: "human" },
      { id: "2", category: "species", name: "mytholog" },
    ];

    let genderState = [
      { id: "1", category: "gender", name: "male" },
      { id: "2", category: "gender", name: "female" },
      { id: "3", category: "gender", name: "genderless" },
      { id: "4", category: "gender", name: "unknown" },
    ];

    setSpeciesState(
      speciesState.map((item) => {
        return {
          select: false,
          category: item.category,
          name: item.name,
          id: item.id,
        };
      })
    );

    setGenderState(
      genderState.map((item) => {
        return {
          select: false,
          category: item.category,
          name: item.name,
          id: item.id,
        };
      })
    );
    // setFilterState(filterState);
  }, []);

  return (
    <div className="filter-item">
      <div className="ui sizer vertical segment">
        <div className="ui huge header">Filter</div>
      </div>
      <form>
        <div className="ui form segment">
          <h4 className="ui header">Species</h4>
          <div className="grouped fields">
            {speciesState.map((item, id) => {
              return (
                <div className="field" key={`${item.category}-${id}`}>
                  <div className="ui checkbox">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        item.select = e.target.checked;
                        props.filterItem(item.category, item.name, item.select);
                        setSpeciesState(
                          speciesState.map((data) => {
                            if (item.id === data.id) {
                              data.select = item.select;
                            }
                            return data;
                          })
                        );
                      }}
                      checked={item.select}
                    />
                    <label>{item.name}</label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ui form segment">
          <h4 className="ui header">Gender</h4>
          <div className="grouped fields">
            {genderState.map((item, id) => {
              return (
                <div className="field" key={`${item.category}-${id}`}>
                  <div className="ui checkbox">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        item.select = e.target.checked;

                        props.filterItem(item.category, item.name, item.select);

                        setGenderState(
                          genderState.map((data) => {
                            if (item.id === data.id) {
                              data.select = item.select;
                            }
                            return data;
                          })
                        );
                      }}
                      checked={item.select}
                    />

                    <label>{item.name}</label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filters;
