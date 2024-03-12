import { useEffect, useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    setCartItems((prevItems) => {
      const updatedCartItems = [...prevItems];

      const existingCartItemIndex = updatedCartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingCartItemIndex !== -1) {
        updatedCartItems[existingCartItemIndex].amount += item.amount;
      } else {
        updatedCartItems.push(item);
      }

      return updatedCartItems;
    });
  };

  const removeItemFromCartHandler = (id) => {
    const itemToRemove = cartItems.find((item) => item.id === id);

    if (itemToRemove.amount > 1) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === id ? { ...item, amount: item.amount - 1 } : item
      );
      setCartItems(updatedCartItems);
      console.log(updatedCartItems);
    }

    if (itemToRemove.amount === 1) {
      const updatedCartItems = cartItems.filter((item) => item.id !== id);

      setCartItems(updatedCartItems);
    }
  };

  useEffect(() => {
    const total = cartItems.reduce(
      (accumulator, item) => accumulator + item.price * item.amount,
      0
    );
    setTotalAmount(Math.floor(total));
  }, [cartItems]);

  const cartContext = {
    items: cartItems,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
