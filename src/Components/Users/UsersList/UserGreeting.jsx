import Card from "../../UI/Card";

const UserGreeting = (props) => {
  const onDeleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <Card>
      <li onClick={onDeleteHandler}>
        {props.name} ({props.age} years old.)
      </li>
    </Card>
  );
};

export default UserGreeting;
