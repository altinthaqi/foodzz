import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import { Actions, CartItems, Total } from "./CartStyled";
import Checkout from "./Checkout";

function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const modalActions = (
    <Actions>
      <button onClick={props.onClose}>Close</button>
      {hasItems && <button onClick={orderHandler}>Order</button>}
    </Actions>
  );

  const cartItems = (
    <CartItems>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </CartItems>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <Total>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </Total>

      {isCheckout && <Checkout onCancel={props.onClose} />}
      {!isCheckout && modalActions}
    </Modal>
  );
}

export default Cart;
