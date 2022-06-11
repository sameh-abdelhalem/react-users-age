const Button = (props) => {
  return (
    <button onClick={props.onClick} type={props.type}>
      Add User
    </button>
  );
};

export default Button;
