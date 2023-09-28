import PropTypes from "prop-types";
import "../css/Button.css";

function Button(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.setText();
  };
  return <button className="add-button" onClick={handleClick}>{props.text}</button>;
}

Button.propTypes = {
  text: PropTypes.string,
  setText: PropTypes.func
};

export default Button;
