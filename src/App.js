// import React, { Fragment } from "react";
import Fooditems from "./components/Fooditems";
import ErrorMsg from "./components/ErrorMsg";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
import "./App.css";

function App() {
  // let foodItems = [
  //   "Dal",
  //   "Fruits",
  //   "Green Vegatables",
  //   "Roti",
  //   "Salad",
  //   "Milk",
  //   "Ghee",
  // ];

  // USING STATE
  // let textStateArr = useState("Food Item Entered By User");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  // console.log(`Current value of textState:${textToShow}`);

  // destructuring
  // let [textToShow, setTextState] = useState();
  // console.log(`Current value of textState:${textToShow}`);
  let [foodItems,setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === 'Enter'){
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems,newFoodItem];
      setFoodItems(newItems);
      // console.log("Food value entered is " + newFoodItem);
    }
    // console.log(event);
    // setTextState(event.target.value);
  };
  // let foodItems = [];

  // IF ELSE STATEMENT

  // if (foodItems.length === 0) {
  //   return <h3>I Am Still Hungry</h3>;
  // }

  // ternary operator
  // let emptyItems = foodItems.length === 0 ? <h3>I Am Still Hungry</h3> : null

  return (
    // SHORT TO USE THE FRAGMENT.    <>
    // <React.Fragment>

    //  USE MAP METHOD
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        {/* {emptyItems} */}

        {/* TERNARY OPERATOR */}
        {/* {foodItems.length === 0 ? <h3>I Am Still Hungry</h3> : null} */}

        {/* LOGICAL OPERATOR */}
        <FoodInput handleKeyDown={onKeyDown} />
        {/* <p>{textToShow}</p> */}
        <ErrorMsg items={foodItems} />


        <Fooditems items={foodItems} />

        {/* </React.Fragment> */}
      </Container>
      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container>
    </>
  );
}

export default App;
