import PropTypes from "prop-types";
import generateRandomKey from "../utils/random";

import "../css/Display.css";

function Display(props) {
  const handleClick = (event) => {
    let ele;
    let itemId = event.target.getAttribute("id");
    ele = document.getElementById(itemId);
    ele.className = "list-item-done";
  };

  return (
    <div className="list-display">
      <ul>
        {props.itens.map((item) => {
          return (
            <li
              key={generateRandomKey()}
              id={generateRandomKey()}
              onClick={handleClick}
              className="list-item"
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Display.propTypes = {
  itens: PropTypes.array,
};

export default Display;
