import styled from "styled-components";
import { useRef, useState } from "react";
import classes from "./Checkout.module.css";
import { Actions } from "./CartStyled";

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
        {!formInputsValidity.name && <ErrorText>Enter a valid name</ErrorText>}
      </Control>
      <Control className={streetControlClass}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && (
          <ErrorText>Enter a valid street</ErrorText>
        )}
      </Control>
      <Control className={postalCodeControlClass}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && (
          <ErrorText>Enter a valid Postal Code (5 char +)</ErrorText>
        )}
      </Control>
      <Control className={cityControlClass}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <ErrorText>Enter a valid city</ErrorText>}
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

export const ErrorText = styled.p`
  color: ${(props) => props.theme.grayText};
`;

export const Control = styled.div`
  label {
    font-weight: medium;
    display: block;
    color: ${(props) => props.theme.text};
  }

  input {
    font: inherit;
    border: 1px solid ${(props) => props.theme.orderTitle};
    border-radius: 4px;
    width: 20rem;
    max-width: 100%;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
  }
`;

export const Form = styled.form`
  margin: 0rem 0;
  height: 12rem;
  overflow: auto;
`;

export default Checkout;
