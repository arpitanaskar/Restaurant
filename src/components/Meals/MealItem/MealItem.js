import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cart = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addItemHandler = (amount) => {
    const item = {
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    };

    cart.addItem(item);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddItem={addItemHandler} />
      </div>
    </li>
  );
};

export default MealItem;
