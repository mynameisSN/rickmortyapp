import React from "react";

const ImageItem = ({ item }) => {
  const {
    image,
    id,
    name,
    status,
    created,
    gender,
    species,
    origin,
    location,
  } = item;

  return (
    <div className="item-wrapper">
      <div className="inside-bg">
        <img src={image} alt={name} />
        <div className="item">
          <div className="item-title">
            <h2>{name}</h2>
            <div className="item-title-sub">
              <span>ID: {id}</span> <span> - created 2 years ago</span>
              <span className="hide"> - {created}</span>
            </div>
          </div>
          <div className="item-details">
            <p>
              <span className="item-details-heading">status</span>
              <span className="item-details-text">{status}</span>
            </p>
            <p>
              <span className="item-details-heading">species</span>
              <span className="item-details-text">{species}</span>
            </p>
            <p>
              <span className="item-details-heading">gender</span>
              <span className="item-details-text">{gender}</span>
            </p>
            <p>
              <span className="item-details-heading">origin</span>
              <span className="item-details-text">{origin.name}</span>
            </p>
            <p>
              <span className="item-details-heading">location</span>
              <span className="item-details-text">{location.name}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageItem;
