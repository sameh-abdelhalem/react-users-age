import { useState } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
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

    if (enteredValues.name.length > 0 && enteredValues.age > 0) {
      props.onClick(enteredValues);
      setEnteredValues({ name: "", age: "" });
    } else if (enteredValues.name.length <= 0) {
      console.log("Please enter a valid Name ");
    } else {
      console.log("Please enter a valid Age ");
    }
  };

  return (
    <Card>
      <form className={styles["form-control"]} onSubmit={formSubmitHandler}>
        <label htmlFor="username">User</label>
        <input
          type="text"
          id="username"
          value={enteredValues.name}
          onChange={onUserChangeHandler}
        />
        <label htmlFor="userage">Age</label>
        <input
          type="text"
          id="userage"
          value={enteredValues.age}
          onChange={onAgeChangeHandler}
        />
        <Button enteredValues={enteredValues} type="submit">
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default UsersForm;
