import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import { ModalContainer, BackdropContainer } from "./ModalStyled";

function Backdrop(props) {
  return <BackdropContainer onClick={props.onClose}></BackdropContainer>;
}

function ModalOverlay(props) {
  return (
    <ModalContainer>
      <div>{props.children}</div>
    </ModalContainer>
  );
}

const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
