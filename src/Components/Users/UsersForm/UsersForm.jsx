import { useState } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import ErrorModal from "../../UI/ErrorModal";
import styles from "./UsersForm.module.css";
const UsersForm = (props) => {
  const [enteredValues, setEnteredValues] = useState({ name: "", age: "" });
  const [error, setError] = useState();
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

    if (enteredValues.name.trim().length > 0 && +enteredValues.age > 0) {
      props.onClick(enteredValues);
      setEnteredValues({ name: "", age: "" });
    } else if (enteredValues.name.length <= 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid Name and Age (non-empty values). ",
      });
    } else {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid Age. ",
      });
    }
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          setError={setError}
        />
      )}
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
          <Button
            enteredValues={enteredValues}
            type="submit"
            title="Add User"
          ></Button>
        </form>
      </Card>
    </div>
  );
};

export default UsersForm;
