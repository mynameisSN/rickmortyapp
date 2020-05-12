import React from "react";
import CardItem from "../card-item/CardItem";

const Cards = (props) => {
  const { listItems, sortItems } = props;
  console.log("sortItems ", sortItems);

  if (sortItems === "Descending") {
    listItems.sort((a, b) => b.id - a.id);
  } else if (sortItems === "Ascending") {
    listItems.sort((a, b) => a.id - b.id);
  }

  const renderList = listItems.map((item, index) => {
    return (
      <li className="album-veiw-item" key={`item-${index}`}>
        <CardItem item={item} />
      </li>
    );
  });

  return <ul className="album-veiw">{renderList}</ul>;
};

export default Cards;
