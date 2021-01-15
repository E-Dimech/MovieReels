import React from "react";
import "./nominations.scss";

function Nominations(props) {
  return (
    <div className="nominations">
      <ul>
        <li className="nominations__movie-list" key={props.imdbID}>
          {props.title} {"  "} {props.year}
          <button
            className="nominations__remove-btn"
            onClick={() => props.onClick(props.id)}
          >
            <i class="nominations__remove-icon fas fa-minus-circle"></i>
          </button>
          {/* {props.title} {"  "} {props.year} */}
        </li>
      </ul>
    </div>
  );
}

export default Nominations;
