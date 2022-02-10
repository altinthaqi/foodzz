import React from "react";
import styled from "styled-components";

function Checkout(props) {
  const confirmHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={confirmHandler}>
      <div>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>

      <div>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>

      <div>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
      </div>

      <div>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>

      <button onClick={props.onCancel} type="button">
        Cancel
      </button>
      <button>Confirm</button>
    </Form>
  );
}

const Form = styled.form``;

export default Checkout;
