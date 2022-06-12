import React from "react";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import ReactDom from "react-dom";
const Backdrop = (props) => {
  return <div onClick={props.closeModalHandler} className={classes.backdrop} />;
};
const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button title="Okay" onClick={props.closeModalHandler} />
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  const closeModalHandler = () => {
    props.setError("");
  };
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop closeModalHandler={closeModalHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          closeModalHandler={closeModalHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
