import UserGreeting from "./UserGreeting";

const UsersList = (props) => {
  const onDeleteHandler = (id) => {
    props.onDelete(id);
  };
  return (
    <ul style={{ padding: 0, margin: 0 }}>
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
    </ul>
  );
};

export default UsersList;
