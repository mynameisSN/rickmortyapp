import React, { useState, useEffect } from "react";

const Filters = () => {
  const [speciesState, setSpeciesState] = useState([]);
  const [genderState, setGenderState] = useState([]);

  // when componet will load first time. it will load useEffect and if rerender if anythng update
  useEffect(() => {
    let speciesState = [
      { id: "1", firstName: "Human" },
      { id: "2", firstName: "Mytholog" },
      { id: "3", firstName: "Other Species" },
    ];

    let genderState = [
      { id: "1", gender: "Male" },
      { id: "2", gender: "Female" },
    ];

    setSpeciesState(
      speciesState.map((item) => {
        return { select: false, firstName: item.firstName, id: item.id };
      })
    );

    setGenderState(
      genderState.map((item) => {
        return { select: false, gender: item.gender, id: item.id };
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
                <div className="field" key={`species-${id}`}>
                  <div className="ui checkbox">
                    <input
                      type="checkbox"
                      checked={item.select}
                      onChange={(e) => {
                        let checked = e.target.checked;
                        setSpeciesState(
                          speciesState.map((data) => {
                            if (item.id === data.id) {
                              data.select = checked;
                            }
                            return data;
                          })
                        );
                      }}
                    />{" "}
                    <label>{item.firstName}</label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ui form segment">
          <h4 className="ui header">Gender</h4>
          <div className="grouped fields">
            {genderState.map((item, i) => {
              return (
                <div className="field" key={`gender-${i}`}>
                  <div className="ui checkbox">
                    <input
                      type="checkbox"
                      checked={item.select}
                      onChange={(e) => {
                        let checked = e.target.checked;
                        setGenderState(
                          genderState.map((data) => {
                            if (item.id === data.id) {
                              data.select = checked;
                            }
                            return data;
                          })
                        );
                      }}
                    />

                    <label>{item.gender}</label>
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
