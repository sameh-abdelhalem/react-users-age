import Card from "../../UI/Card";

const UserGreeting = (props) => {
  const onDeleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <Card>
      <div onClick={onDeleteHandler}>
        {props.name} ({props.age} years old.)
      </div>
    </Card>
  );
};

export default UserGreeting;
