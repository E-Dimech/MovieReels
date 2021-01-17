import React from "react";
import "./nominations.scss";

function Nominations(props) {
  return (
    <div className="nominations" key={props.imdbID}>
      <ul>
        <li className="nominations__movie-list">
          {props.title} {"  "} {props.year}
          <button
            className="nominations__remove-btn"
            onClick={() => props.onClick(props.id)}
          >
            <i class="nominations__remove-icon fas fa-minus-circle"></i>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Nominations;
