import { useState, useRef } from "react";
import Wrapper from "../../Helpers/Wrapper";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import ErrorModal from "../../UI/ErrorModal";
import styles from "./UsersForm.module.css";

const UsersForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [enteredValues, setEnteredValues] = useState({ name: "", age: "" });
  const [error, setError] = useState();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length > 0 && +enteredAge > 0) {
      props.onClick({ name: enteredName, age: enteredAge });
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    } else if (enteredName.length <= 0) {
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
    <>
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
          <input ref={nameInputRef} type="text" id="username" />
          <label htmlFor="userage">Age</label>
          <input ref={ageInputRef} type="text" id="userage" />
          <Button
            enteredValues={enteredValues}
            type="submit"
            title="Add User"
          ></Button>
        </form>
      </Card>
    </>
  );
};

export default UsersForm;
