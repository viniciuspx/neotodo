import PropTypes from "prop-types";

import "../css/Input.css";

function Input(props) {
  const handleInput = (event) => {
    props.setText(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit();
  }

  return (
    <form className="input-form">
      <input
        className="input-text"
        placeholder="Add..."
        onChange={handleInput}
        onSubmit={handleSubmit}
      ></input>
      <button onClick={handleSubmit} className="empty-button"></button>
    </form>
  );
}

Input.propTypes = {
  setText: PropTypes.func,
  submit: PropTypes.func
};

export default Input;
