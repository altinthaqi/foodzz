import styled from "styled-components";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim().length === "";
const isFiveChars = (value) => value.trim().length !== 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }
  };

  return (
    <Form onSubmit={confirmHandler}>
      <Control>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Enter a valid name</p>}
      </Control>
      <Control>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
      </Control>
      <Control>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
      </Control>
      <Control>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </Control>
      <Actions>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="submit">Confirm</button>
      </Actions>
    </Form>
  );
};

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  .invalid label {
    color: #ca3e51;
  }

  .invalid input {
    border-color: #aa0b20;
    background-color: #ffeff1;
  }

  button {
    font: inherit;
    color: #5a1a01;
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-radius: 25px;
    padding: 0.5rem 2rem;
  }

  button:hover,
  button:active {
    background-color: #ffe6dc;
  }

  .submit {
    border: 1px solid #5a1a01;
    background-color: #5a1a01;
    color: white;
  }

  .submit:hover,
  .submit:active {
    background-color: #7a2706;
  }
`;

export const Control = styled.div`
  label {
    font-weight: bold;
    display: block;
  }

  input {
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 20rem;
    max-width: 100%;
  }
`;

export const Form = styled.form`
  margin: 0rem 0;
  height: 12rem;
  overflow: auto;
`;

export default Checkout;
