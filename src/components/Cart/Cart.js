import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const totalAmount = `$${cartctx.totalAmount.toFixed(2)}`;
  const hasItems = cartctx.items.length > 0;
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  // Create a new object to keep track of the quantity of each item
  // const itemQuantity = {};
  // for (const item of cartcntxt.items) {
  //   if (!itemQuantity[item.id]) {
  //     itemQuantity[item.id] = {
  //       ...item,
  //       quantity: 0,
  //     };
  //   }
  //   itemQuantity[item.id].quantity += item.quantity;
  // }

  // // Convert the itemQuantity object into an array
  // const cartItems = Object.values(itemQuantity).map((item) => (
  //   <li key={item.id}>
  //     Name: {item.name} Price : {item.price} Quantity : {item.quantity}
  //   </li>
  // ));

  // // Calculate the total amount of the items in the cart
  // const totalAmount = cartcntxt.items.reduce(
  //   (acc, item) => acc + item.price * item.quantity,
  //   0
  // );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
