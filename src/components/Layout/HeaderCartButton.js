import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import { Button } from "./HeaderCartButtonStyled";
import { RiShoppingCartLine } from "react-icons/ri";

function HeaderCartButton(props) {
  const [btnHighlight, setBtnHighlight] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (cartCtx.items.length === 0) return;
    setBtnHighlight(true);

    const timer = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <Button onClick={props.onClick} btnHighlight={btnHighlight}>
      <RiShoppingCartLine className="cartIcon" />

      <p>Your Cart</p>
      <p id="number">{numberOfCartItems}</p>
    </Button>
  );
}

export default HeaderCartButton;
