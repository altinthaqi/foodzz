import { ItemContainer, Summary, Actions } from "./CartItemStyled";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <ItemContainer>
      <div>
        <h2>{props.name}</h2>
        <Summary>
          <span className="price">{price}</span>
          <span className="amount">x {props.amount}</span>
        </Summary>
      </div>
      <Actions>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </Actions>
    </ItemContainer>
  );
};

export default CartItem;
