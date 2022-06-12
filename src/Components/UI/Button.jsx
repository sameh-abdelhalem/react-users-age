const Button = (props) => {
  return (
    <button onClick={props.onClick} type={props.type}>
      {props.title}
    </button>
  );
};

export default Button;
