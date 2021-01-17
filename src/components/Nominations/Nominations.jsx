import React from "react";
import "./nominations.scss";

function Nominations(props) {
  return (
    <div className="nominations" key={props.imdbID}>
      <ul className="nominations__ul">
        <li className="nominations__movie-list">
          <img
            className="nominations__movie-poster"
            src={props.poster}
            alt={props.title}
          />

          <span className="nominations__movie-title">{props.title}</span>
          <span>{"   "}</span>
          <span className="nominations__movie-year"> {props.year} </span>
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
