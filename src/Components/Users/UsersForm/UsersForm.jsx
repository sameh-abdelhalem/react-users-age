import { useState } from "react";
import Button from "../../UI/Button";
import styles from "./UsersForm.module.css";
const UsersForm = (props) => {
  const [enteredValues, setEnteredValues] = useState({ name: "", age: "" });
  const onUserChangeHandler = (event) => {
    setEnteredValues((prevState) => {
      return { ...prevState, name: event.target.value };
    });
  };
  const onAgeChangeHandler = (event) => {
    setEnteredValues((prevState) => {
      return { ...prevState, age: event.target.value };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredValues((prevState) => {
      return { ...prevState, id: Math.random().toString() };
    });

    props.onClick(enteredValues);
  };

  return (
    <form className={styles["form-control"]} onSubmit={formSubmitHandler}>
      <label>User</label>
      <input type="text" onChange={onUserChangeHandler} />
      <label>Age</label>
      <input type="text" onChange={onAgeChangeHandler} />
      <Button enteredValues={enteredValues} type="submit">
        Add User
      </Button>
    </form>
  );
};

export default UsersForm;
