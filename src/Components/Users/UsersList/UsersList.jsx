import UserGreeting from "./UserGreeting";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  const onDeleteHandler = (id) => {
    props.onDelete(id);
  };
  return (
    <div>
      {props.userInput.map((user) => {
        return (
          <UserGreeting
            name={user.name}
            age={user.age}
            key={user.id}
            id={user.id}
            onDelete={onDeleteHandler}
          />
        );
      })}
    </div>
  );
};

export default UsersList;
