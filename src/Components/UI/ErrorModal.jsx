import React from "react";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import Wrapper from "../Helpers/Wrapper";

const ErrorModal = (props) => {
  const closeModalHandler = () => {
    props.setError("");
  };
  return (
    <Wrapper>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button title="Okay" onClick={closeModalHandler} />
        </footer>
      </Card>
    </Wrapper>
  );
};

export default ErrorModal;
