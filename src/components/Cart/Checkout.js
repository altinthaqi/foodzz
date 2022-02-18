import styled from "styled-components";
import { useRef, useState } from "react";
import classes from "./Checkout.module.css";
const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

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
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  const nameControlClass = `${formInputsValidity.name ? "" : classes.invalid}`;
  const streetControlClass = `${
    formInputsValidity.street ? "" : classes.invalid
  }`;
  const cityControlClass = `${formInputsValidity.city ? "" : classes.invalid}`;
  const postalCodeControlClass = `${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;

  return (
    <Form onSubmit={confirmHandler}>
      <Control className={nameControlClass}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Enter a valid name</p>}
      </Control>
      <Control className={streetControlClass}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Enter a valid street</p>}
      </Control>
      <Control className={postalCodeControlClass}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Enter a valid Postal Code (5char)</p>
        )}
      </Control>
      <Control className={cityControlClass}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Enter a valid city</p>}
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

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

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

export default Checkout;
