import "./App.css";
import UsersForm from "./Components/Users/UsersForm/UsersForm";
import UsersList from "./Components/Users/UsersList/UsersList";
import { useState } from "react";

function App() {
  const onClickHandler = (enteredValues) => {
    const userData = { ...enteredValues, id: Math.random().toString() };
    setUserInput([...userInput, userData]);
  };
  const onDeleteHandler = (id) => {
    setUserInput((prevState) => {
      const updatedUsers = prevState.filter((user) => user.id !== id);
      return updatedUsers;
    });
  };
  const [userInput, setUserInput] = useState([
    {
      name: "Sameh",
      age: "26",
      id: Math.random().toString(),
    },
  ]);

  return (
    <div className="App">
      <UsersForm onClick={onClickHandler} />
      <UsersList userInput={userInput} onDelete={onDeleteHandler} />
    </div>
  );
}
export default App;
