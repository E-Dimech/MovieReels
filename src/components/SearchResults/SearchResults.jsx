import React from "react";
import "./searchResults.scss";

function SearchResults(props) {
  console.log(props);
  return (
    <>
      <div>
        <ul>
          <li className="movie-list" key={props.imdbID}>
            {props.title}
            {props.year}
            <button onClick={() => props.onClick(props)}>Nominate</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SearchResults;