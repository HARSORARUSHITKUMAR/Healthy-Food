const ErrorMsg = ( {items}) => {
  // let foodItems = ["Dal", "Green Vegatables", "Roti", "Salad", "Milk", "Ghee"];

  return <>{items.length === 0 && <h3>I Am Still Hungry</h3>}</>;
};

export default ErrorMsg;
