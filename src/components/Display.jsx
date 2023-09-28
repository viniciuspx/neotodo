import PropTypes from "prop-types";
import generateRandomKey from "../utils/random";


import "../css/Display.css";

function Display(props) {
  return (
    <div className="list-display">
      <ul>
        {props.itens.map((item) => {
          return <li key={generateRandomKey()}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

Display.propTypes = {
  itens: PropTypes.array,
};

export default Display;
