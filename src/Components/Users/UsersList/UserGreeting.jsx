const UserGreeting = (props) => {
  const onDeleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <div onClick={onDeleteHandler}>
      {props.name} ({props.age} years old.)
    </div>
  );
};

export default UserGreeting;
