import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cart = useContext(CartContext);

  const increaseAmount = (item) => {
    cart.addItem({ ...item, amount: 1 });
  };
  const decreaseAmount = (id) => {
    cart.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cart.items.map((item) => (
        <li key={item.id} className={classes["list-items"]}>
          <div className={classes.addone}>
            <div className={classes["item-detail"]}>
              <div className={classes.name}>{item.name}</div>
              <div className={classes.price}>${item.price}</div>
            </div>

            <div className={classes.amount}>x{item.amount}</div>
          </div>

          <div className={classes.actions}>
            <button
              className={classes["button--alt"]}
              onClick={() => decreaseAmount(item.id)}
            >
              -
            </button>
            <button
              className={classes.button}
              onClick={() => increaseAmount(item)}
            >
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cart.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          close
        </button>
        <button className={classes.button}>order</button>
      </div>
    </Modal>
  );
};

export default Cart;
