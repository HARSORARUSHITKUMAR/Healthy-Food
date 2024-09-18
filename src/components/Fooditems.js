import { Button } from "bootstrap";
import Items from "./Items";
import { useState } from "react";

const FoodItems = ({ items }) => {
  // let foodItems = ["Dal", "Green Vegatables", "Roti", "Salad", "Milk", "Ghee"];

  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Items
          key={item}
          foodItems={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}
        ></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
