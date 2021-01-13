import React from "react";
import "./nominations.scss";

function Nominations(props) {
  return (
    <div>
      <ul>
        <li className="movie-list" key={props.imdbID}>
          {props.title}
          {props.year}
          <button onClick={() => props.onClick(props)}>Remove</button>
        </li>
      </ul>
    </div>
  );
}

export default Nominations;
