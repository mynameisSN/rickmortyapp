import React from "react";
import CardItem from "../card-item/CardItem";

const Cards = (props) => {
  const { listItems } = props;

  console.log("cards comp ", props);

  console.log("cards data imageitem ", listItems);
  const renderList = listItems.map((item, i) => {
    return (
      <li className="album-veiw-item" key={i}>
        <CardItem item={item} />
      </li>
    );
  });
  return <ul className="album-veiw">{renderList}</ul>;
};

export default Cards;
